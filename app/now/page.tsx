export default function Now() {
  return (
    <main className="page">
      <div className="wrap">
        <header className="termWindow">
          <div className="termBar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="termTitle">Terminal — now</span>
          </div>

          <div className="termBody">
            <div className="line">
              <span className="prompt">bw@buk1t</span>
              <span className="dim">:</span>
              <span className="cmd"> cat now.txt</span>
              <span className="cursor" aria-hidden />
            </div>

            <h1 className="hero">Now</h1>
            <p className="sub">
              what have you been working on buk1t? uhh idk look below
            </p>

             <div className="row" style={{ marginTop: 16 }}>
              <a className="btn ghost" href="/">
                cd ~/
              </a>
              <a className="btn" href="/projects">
                cd projects/
              </a>
            </div>

            <div className="readme" style={{ marginTop: 14 }}>
              <p>
                <span className="tag">FOCUS</span> finishing up buk1t.com
              </p>
              <p>
                <span className="tag">WHATS NEW</span> i just started working on my mood project and i think it will soon be in beta
              </p>
              <p>
                <span className="tag">FUTURE</span> go through old projects and decide whether to add them here
              </p>
            </div>
          </div>
        </header>
      </div>
    </main>
  );
}