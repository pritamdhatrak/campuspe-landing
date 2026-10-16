import Container from "@/components/Container";

const BENEFITS = [
  { title: "Skill extraction", desc: "Auto-detect key skills from your resume." },
  { title: "Profile score", desc: "Quick improvements to make your profile stronger." },
  { title: "Better matches", desc: "Get roles aligned with your skill set." },
  { title: "Less effort", desc: "No repeated form filling." },
];

export default function UploadResume() {
  return (
    <section id="resume" className="sec secAlt">
      <Container>
        <div className="twoCol twoColReverse">
          <div className="mockCard">
            <div className="uploadHeader">
              <div className="secKicker">Upload your resume</div>
              <div className="uploadTitle">We’ll extract skills and build your profile</div>
            </div>

            <div className="dropZone">
              <div className="dropIcon">⬆</div>
              <div className="dropTitle">Drop PDF here</div>
              <div className="dropSub">or click to choose a file</div>
              <div className="dropBadges">
                <span className="badge">PDF</span>
                <span className="badge badgeSoft">ATS-friendly</span>
                <span className="badge badgeSoft">Fast parsing</span>
              </div>
              <a className="btn btnPrimary btnFull" href="#download">Upload resume</a>
            </div>
          </div>

          <div>
            <div className="stackTitle">One profile</div>
            <h2 className="secTitle">Upload once, apply everywhere</h2>
            <p className="secText">
              Create a clean profile that works across internships, drives and jobs. Keep everything in one place, and share
              it instantly when needed.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#download">Build my profile</a>
              <a className="btn btnOutline" href="#support">Need help?</a>
            </div>

            <div className="featureGrid">
              {BENEFITS.map((b) => (
                <div key={b.title} className="featureCard">
                  <div className="featureIcon">✓</div>
                  <div>
                    <div className="featureTitle">{b.title}</div>
                    <div className="featureDesc">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
