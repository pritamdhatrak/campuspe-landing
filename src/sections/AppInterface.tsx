import Container from "@/components/Container";

const POINTS = [
  { title: "Fast feed", desc: "Get updates instantly." },
  { title: "Track status", desc: "Know what’s next." },
  { title: "Saved items", desc: "Keep important roles." },
  { title: "Simple profile", desc: "One place for everything." },
];

export default function AppInterface() {
  return (
    <section id="download" className="sec">
      <Container>
        <div className="twoCol">
          <div>
            <div className="secKicker">App interface</div>
            <h2 className="secTitle">A clean, modern app students enjoy using</h2>
            <p className="secText">
              Built for speed and clarity. Discover, apply, and track everything with a simple UI that feels premium.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#download">Download now</a>
              <a className="btn btnOutline" href="#features">See features</a>
            </div>

            <div className="featureGrid">
              {POINTS.map((p) => (
                <div key={p.title} className="featureCard">
                  <div className="featureIcon">✓</div>
                  <div>
                    <div className="featureTitle">{p.title}</div>
                    <div className="featureDesc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="phoneWrap">
            <div className="phoneFrame">
              <div className="phoneBar" />
              <div className="phoneScreen">
                <div className="phoneTitle">CampusPe app interface</div>
                <div className="phoneCard">
                  <div className="phoneCardTitle">Today</div>
                  <div className="phoneRow">
                    <span className="dot dot1" />
                    <div>
                      <div className="phoneRowTitle">Internships</div>
                      <div className="phoneRowSub">Fresh picks near you</div>
                    </div>
                  </div>
                  <div className="phoneRow">
                    <span className="dot dot2" />
                    <div>
                      <div className="phoneRowTitle">Campus drives</div>
                      <div className="phoneRowSub">Upcoming schedules</div>
                    </div>
                  </div>
                  <div className="phoneRow">
                    <span className="dot dot3" />
                    <div>
                      <div className="phoneRowTitle">Saved</div>
                      <div className="phoneRowSub">Track your applications</div>
                    </div>
                  </div>
                </div>

                <div className="phonePills">
                  <span className="pillMini">Fast</span>
                  <span className="pillMini">Clean</span>
                  <span className="pillMini">Student-first</span>
                </div>
              </div>
            </div>

            <div className="glowUnder" />
          </div>
        </div>
      </Container>
    </section>
  );
}
