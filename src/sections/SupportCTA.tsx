import Container from "@/components/Container";

const POINTS = [
  { title: "Fast replies", desc: "Quick responses during working hours." },
  { title: "Guided onboarding", desc: "Step-by-step help for teams." },
  { title: "Student friendly", desc: "Simple, clear flows." },
];

export default function SupportCTA() {
  return (
    <section id="support" className="sec secAlt">
      <Container>
        <div className="ctaCard">
          <div className="ctaLeft">
            <div className="secKicker">Support</div>
            <h2 className="secTitle">Need help getting started?</h2>
            <p className="secText">
              We can help students, colleges and employers onboard smoothly. Share your details and we’ll reach out.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="mailto:support@campuspe.in">Email support</a>
              <a className="btn btnOutline" href="#support">Request onboarding</a>
            </div>
          </div>

          <div className="ctaRight">
            <div className="ctaGrid">
              {POINTS.map((p) => (
                <div key={p.title} className="ctaMini">
                  <div className="ctaMiniIcon">✓</div>
                  <div>
                    <div className="ctaMiniTitle">{p.title}</div>
                    <div className="ctaMiniDesc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ctaNote">We typically reply within 24 hours.</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
