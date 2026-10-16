import Container from "@/components/Container";

const FEATURES = [
  { title: "Curated feed", desc: "Relevant roles based on skills & interests." },
  { title: "Fast apply", desc: "One profile. Multiple applications." },
  { title: "Verified listings", desc: "Cleaner, safer discovery experience." },
  { title: "Bookmarks", desc: "Save and track what matters." },
];

const PICKS = [
  { role: "Data Analyst Intern", meta: "EdTech • Remote", type: "Internship" },
  { role: "Software Trainee", meta: "Product Company • Bangalore", type: "Full-time" },
  { role: "Campus Ambassador", meta: "Community • Hybrid", type: "Part-time" },
  { role: "UI Designer", meta: "Studio • Remote", type: "Project" },
];

export default function OpportunityDiscovery() {
  return (
    <section id="opportunities" className="sec">
      <Container>
        <div className="twoCol">
          <div>
            <div className="secKicker">Opportunity Discovery</div>
            <h2 className="secTitle">Find the right opportunity faster</h2>
            <p className="secText">
              Smart discovery + clean filtering means you spend less time searching and more time applying. Get the freshest
              postings, campus drives and projects tailored to you.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#download">Explore opportunities</a>
              <a className="btn btnOutline" href="#download">Get the app</a>
            </div>

            <div className="featureGrid">
              {FEATURES.map((f) => (
                <div key={f.title} className="featureCard">
                  <div className="featureIcon">✓</div>
                  <div>
                    <div className="featureTitle">{f.title}</div>
                    <div className="featureDesc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mockCard">
            <div className="mockTop">
              <div>
                <div className="mockTitle">Today’s picks</div>
                <div className="mockSub">Fresh & trending openings</div>
              </div>
              <div className="mockChip">Filters</div>
            </div>

            <div className="pickList">
              {PICKS.map((p) => (
                <div key={p.role} className="pickCard">
                  <div className="pickLeft">
                    <div className="pickRole">{p.role}</div>
                    <div className="pickMeta">{p.meta}</div>
                    <div className="pickBadges">
                      <span className="badge">{p.type}</span>
                      <span className="badge badgeSoft">Active</span>
                    </div>
                  </div>
                  <a className="pickCta" href="#download">View →</a>
                </div>
              ))}
            </div>

            <div className="mockBottom">
              <div>
                <div className="mockTitle">Personalized matches</div>
                <div className="mockSub">Turn on recommendations</div>
              </div>
              <button className="toggle" type="button" aria-label="Toggle recommendations">
                <span className="toggleDot" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
