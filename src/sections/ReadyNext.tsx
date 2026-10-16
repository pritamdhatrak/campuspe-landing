import Container from "@/components/Container";

const COLS = [
  { title: "Students", desc: "Find internships, drives, and projects." },
  { title: "Colleges", desc: "Run placements with a clean workflow." },
  { title: "Employers", desc: "Hire verified campus talent faster." },
];

export default function ReadyNext() {
  return (
    <section id="features" className="sec">
      <Container>
        <div className="finalCard">
          <div className="finalTop">
            <div>
              <div className="secKicker">Get started</div>
              <h2 className="secTitle">Ready for your next step?</h2>
              <p className="secText">Create your profile, discover opportunities, and start applying in minutes.</p>
            </div>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#download">Download app</a>
              <a className="btn btnOutline" href="#features">Explore features</a>
            </div>
          </div>

          <div className="finalGrid">
            {COLS.map((c) => (
              <div key={c.title} className="finalMini">
                <div className="finalMiniTitle">{c.title}</div>
                <div className="finalMiniDesc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
