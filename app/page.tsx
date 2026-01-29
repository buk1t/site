export default function Home() {
  return (
    <main className="page">
      <div className="wrap">
        <header className="top">
          <div>
            <div className="kicker">buk1t.com</div>
            <h1 className="title">Build. Ship. Iterate.</h1>
            <p className="subtitle">
              A small homebase for dev projects, experiments, and whatever I’m
              working on next.
            </p>

            <div className="actions">
              <a className="btn" href="/projects">
                Projects <span aria-hidden>→</span>
              </a>
              <a
                className="btn ghost"
                href="https://github.com/buk1t"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden>↗</span>
              </a>
              <a className="btn ghost" href="mailto:dev@buk1t.com">
                dev@buk1t.com
              </a>
            </div>
          </div>

          <div className="status">
            <div className="statusRow">
              <span className="dot" /> status <span className="muted">online</span>
            </div>
            <div className="statusRow">
              <span className="dot blue" /> deploy <span className="muted">vercel</span>
            </div>
            <div className="statusRow">
              <span className="dot purple" /> stack <span className="muted">next.js</span>
            </div>
          </div>
        </header>

        <section className="grid">
          <div className="card">
            <h2>Now</h2>
            <p>
              Setting up a clean Next.js base, a projects index, and a simple way
              to keep this site updated without it turning into a chore.
            </p>
          </div>

          <div className="card">
            <h2>Next</h2>
            <ul>
              <li>Projects page + cards</li>
              <li>Optional notes/blog</li>
              <li>Small “about” + links</li>
            </ul>
          </div>
        </section>

        <section className="terminal">
          <div className="termBar">
            <span className="dotRed" />
            <span className="dotYellow" />
            <span className="dotGreen" />
            <span className="termTitle">~/buk1t</span>
          </div>
          <pre className="termBody">
{`$ cat roadmap.txt
- ship homepage
- add /projects
- keep it simple`}
          </pre>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} buk1t · built with next.js
        </footer>
      </div>
    </main>
  );
}