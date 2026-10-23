// npm run lint: fails if the site source contains a banned claim, the old phone number,
// employer material or a leftover legacy file. Run it before every pull request.
import fs from 'fs';
import path from 'path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');

// Phrases that must never appear in the site's source. Case-insensitive.
const banned = [
  [/moyo/i, 'employer name (never mention the day job)'],
  [/88876\s?20727|8887620727/, 'old phone number'],
  [/google (ads )?(certified )?partner(?! badge)/i, '"Google Partner" claim (say "Google certified")'],
  [/\b[4-9]x google certified/i, 'wrong certificate count (there are 3)'],
  [/google ads measurement/i, 'certificate not held yet'],
  [/\+?340\s?%|99\.4\s?%|-62\s?%|177\+|88\s?% response/i, 'invented result figure'],
  [/300\+\s*(learners|students|marketers)|17\+\s*batch|ndmit|asdc/i, 'unconfirmed training claim'],
  [/6\+\s*years/i, 'experience is 5+ years'],
  [/research by harvard/i, 'uncited research claim'],
  [/claude 3(\.5)?\b|gpt-4/i, 'dated model name'],
  [/automation\.veloxisglobal\.com/i, 'dead form endpoint'],
  [/testimonial|verified client results/i, 'testimonials or client results (none to show yet)'],
];

const legacy = ['index.html', 'about.html', 'contact.html', 'projects.html', 'training.html', 'vite.config.js', 'dist', 'dist.zip', 'deploy_hostinger.zip', 'images'];

const textExt = new Set(['.js', '.jsx', '.mjs', '.ts', '.tsx', '.css', '.json', '.md', '.txt', '.html', '.xml']);
const skip = new Set(['node_modules', '.next', 'out', '.git', 'scripts']);
const problems = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (skip.has(name)) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else if (textExt.has(path.extname(name)) && name !== 'package-lock.json') {
      const lines = fs.readFileSync(full, 'utf8').split('\n');
      lines.forEach((line, i) => {
        for (const [re, why] of banned) {
          if (re.test(line)) problems.push(`${path.relative(root, full)}:${i + 1}  ${why}`);
        }
      });
    }
  }
}

walk(path.join(root, 'src'));
walk(path.join(root, 'public'));
for (const f of legacy) {
  if (fs.existsSync(path.join(root, f))) problems.push(`${f}  leftover legacy file`);
}

if (problems.length) {
  console.error(`check-claims: ${problems.length} problem(s)`);
  for (const p of problems) console.error(' - ' + p);
  process.exit(1);
}
console.log('check-claims: no banned claims, numbers or legacy files found.');
