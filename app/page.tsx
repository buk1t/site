const SOCIALS = [
  { label: "X", href: "https://x.com/_buk1t" },
  { label: "Instagram", href: "https://instagram.com/_buk1t" },
  { label: "Email", href: "mailto:dev@buk1t.com" },
];

export default function Home() {
  return (
    <main className="page">
      <div className="wrap">
        <header className="termWindow">
          <div className="termBar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="termTitle">Terminal — buk1t</span>
          </div>

          <div className="termBody">
            <Line ctx="whoami" cmd="git push origin main" />
            <h1 className="hero">buk1t</h1>
            <p className="sub">
              homepage for my site... welcome!
            </p>

            <div className="row">
              <a className="btn" href="/projects">
                cd projects/
              </a>
               <a className="btn" href="/now">
                cd now/
              </a>
            </div>

            <div className="spacer" />

            <Line ctx="socials" cmd="ls -a"/>
            <div className="chips">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  className="chip"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="chipLabel">{s.label}</span>
                  <span className="chipValue">{pretty(s.href)}</span>
                </a>
              ))}
            </div>

            <div className="spacer" />

            <Line ctx="readme" cmd="nano README.txt" />
            <div className="readme">
              <p>
                <span className="tag">NOW</span> finishing up this site
              </p>
              <p>
                <span className="tag">NEXT</span> getting back to working on my projects
              </p>
            </div>
          </div>
        </header>

        <footer className="footer">
          <span>© {new Date().getFullYear()} buk1t</span>
          <span className="sep">·</span>
          <span>www.buk1t.com</span>
          <span className="sep">·</span>
          <span><a href="https://links.buk1t.com">links</a></span>
        </footer>
      </div>
    </main>
  );
}

function Line({ ctx, cmd }: { ctx: string; cmd: string }) {
  return (
    <div className="line">
      <span className="prompt">buk1t@{ctx}</span>
      <span className="dim">:</span>
      <span className="cmd"> {cmd}</span>
      <span className="cursor" aria-hidden />
    </div>
  );
}

function pretty(href: string) {
  return href.replace(/^https?:\/\//, "");
}