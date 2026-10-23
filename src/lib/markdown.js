import { Marked } from 'marked';

// Post bodies use "### Title {#anchor}" for their main sections. On the page those become <h2 id="anchor">,
// and "####" becomes <h3>, so every page has exactly one <h1> (the post title).
const marked = new Marked({
  gfm: true,
  renderer: {
    heading({ tokens, depth }) {
      const raw = this.parser.parseInline(tokens);
      const match = raw.match(/^(.*?)\s*\{#([a-z0-9-]+)\}\s*$/i);
      const text = match ? match[1] : raw;
      const id = match
        ? match[2]
        : text
            .toLowerCase()
            .replace(/<[^>]+>/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
      const level = Math.min(Math.max(depth - 1, 2), 4);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    },
  },
});

export function renderMarkdown(body) {
  // The FAQ block is rendered separately, so drop the empty FAQ heading at the end of a body.
  const cleaned = body.replace(/\n###\s+\d+\.\s+Frequently Asked Questions\s*\{#faq\}\s*$/i, '\n');
  const html = marked.parse(cleaned.trim());
  return html
    .replace(/<table>/g, '<div class="table-scroll"><table>')
    .replace(/<\/table>/g, '</table></div>');
}
