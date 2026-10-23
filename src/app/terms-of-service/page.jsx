import { site } from '../../lib/site';
import { pageMeta } from '../../lib/meta';

export const metadata = pageMeta({
  title: 'Terms of use',
  description: 'The short terms for using muddassirali.com and its guides: sharing, no guarantees, links, liability and Indian law.',
  path: '/terms-of-service',
});

export default function TermsPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap wrap--narrow" style={{ marginInline: 'auto' }}>
          <p className="label">Last updated 23 October 2026</p>
          <h1 className="page-title">Terms of use</h1>
          <p className="page-lede">By using this site you agree to these terms. They are short.</p>
        </div>
      </header>
      <section className="section section--tight">
        <div className="wrap wrap--narrow legal prose" style={{ marginInline: 'auto' }}>
          <h2>Using the guides</h2>
          <p>
            You are welcome to read, share and quote the guides here. If you quote more than a few lines, please
            link back to the original page. Please do not copy whole guides onto another site.
          </p>

          <h2>No guarantees</h2>
          <p>
            The guides are general information, written in good faith. They are not legal, tax or financial
            advice. Prices, tools and rules change, so check anything important with the source before you rely on
            it. Your results depend on your situation and your work.
          </p>

          <h2>Links to other sites</h2>
          <p>
            This site links to other websites and may show Google ads. I do not control those sites or ads and am
            not responsible for them.
          </p>

          <h2>Liability</h2>
          <p>
            To the extent the law allows, I am not liable for any loss that comes from using this site or acting on
            its content.
          </p>

          <h2>Law</h2>
          <p>These terms are governed by the laws of India. Courts in Kanpur, Uttar Pradesh have jurisdiction.</p>

          <h2>Questions</h2>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
