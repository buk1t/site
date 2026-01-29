type Project = {
  name: string;
  desc: string;
  href?: string; // live link
  repo?: string; // github link
  status?: "active" | "in dev" | "archived";
};

const PROJECTS: Project[] = [
  {
    name: "buk1t.com",
    desc: "personal site",
    href: "https://www.buk1t.com",
    status: "active",
  },
  {
    name: "home",
    desc: "custom home page designed for safari",
    href: "https://buk1t.github.io/home/",
    status: "active",
  },
  {
    name: "mood",
    desc: "mood tracking app",
    href: "https://github.com/buk1t/mood",
    status: "in dev",
  }
  // Add yours here:
  // {
  //   name: "my-tool",
  //   desc: "Small utility that does X.",
  //   href: "https://example.com",
  //   repo: "https://github.com/buk1t/my-tool",
  //   status: "in dev",
  // },
];

export default function Projects() {
  return (
    <main className="page">
      <div className="wrap">
        <header className="termWindow">
          <div className="termBar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="termTitle">Terminal — projects</span>
          </div>

          <div className="termBody">
            <Line ctx="projects" cmd="ls -la projects/" />

            <h1 className="hero">Projects</h1>
            <p className="sub">
              things im currently working on. more soon...
            </p>

            <div className="row" style={{ marginTop: 16 }}>
              <a className="btn ghost" href="/">
                cd ~/
              </a>
              <a className="btn ghost" href="/now">
                open now/
              </a>
            </div>

            <div className="spacer" />

            <Line ctx="projects" cmd="cat projects.json" />

            <div className="chips" style={{ marginTop: 12 }}>
              {PROJECTS.map((p) => (
                <div key={p.name} className="chip">
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span className="chipLabel">{p.name}</span>
                    {p.status ? <StatusPill status={p.status} /> : null}
                  </div>

                  <div className="chipValue" style={{ marginTop: 6, whiteSpace: "normal" }}>
                    {p.desc}
                  </div>

                  {(p.href || p.repo) && (
                    <div className="row" style={{ marginTop: 10 }}>
                      {p.href && (
                        <a className="btn" href={p.href} target="_blank" rel="noreferrer">
                          open ↗
                        </a>
                      )}
                      {p.repo && (
                        <a className="btn ghost" href={p.repo} target="_blank" rel="noreferrer">
                          repo ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="spacer" />

            <Line ctx="contact" cmd="ssh buk1t" />
            <div className="row" style={{ marginTop: 12 }}>
              <a className="btn" href="mailto:dev@buk1t.com">
                dev@buk1t.com
              </a>
              <a className="btn ghost" href="https://x.com/_buk1t" target="_blank" rel="noreferrer">
                x.com/_buk1t ↗
              </a>
              <a
                className="btn ghost"
                href="https://instagram.com/_buk1t"
                target="_blank"
                rel="noreferrer"
              >
                instagram.com/_buk1t ↗
              </a>
            </div>
          </div>
        </header>
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

function StatusPill({ status }: { status: "active" | "in dev" | "archived" }) {
  const label = status === "active" ? "ACTIVE" : status === "in dev" ? "IN DEV" : "ARCHIVED";
  return (
    <span
      style={{
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 999,
        border: "1px solid rgba(120,255,160,0.22)",
        background: "rgba(0,0,0,0.35)",
        color: "rgba(120,255,160,0.95)",
        opacity: status === "archived" ? 0.6 : 1,
      }}
    >
      {label}
    </span>
  );
}