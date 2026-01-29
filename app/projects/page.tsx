export default function Projects() {
  return (
    <main className="page">
      <div className="wrap">
        <a href="/" className="kicker">
          ← Home
        </a>

        <h1 className="title" style={{ marginTop: 12 }}>
          Projects
        </h1>
        <p className="subtitle">
          This will be the list of things I’m building. For now, it’s a stub.
        </p>

        <div className="grid" style={{ marginTop: 18 }}>
          <div className="card">
            <h2>buk1t.com</h2>
            <p>Next.js + Vercel + custom domain. (This site.)</p>
          </div>

          <div className="card">
            <h2>Contact</h2>
            <p>
              Email:{" "}
              <a className="btn ghost" href="mailto:dev@buk1t.com">
                dev@buk1t.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}