import Container from "@/components/Container";

const COLLEGE_POINTS = [
  { title: "Drive management", desc: "Create drives, eligibility rules & schedules." },
  { title: "Student tracking", desc: "Monitor applications, shortlists & outcomes." },
  { title: "Announcements", desc: "Share updates that students actually see." },
  { title: "Reports", desc: "Export clean reports for NAAC & internal reviews." },
];

const EMPLOYER_POINTS = [
  { title: "Faster hiring", desc: "Post openings and reach verified campus talent." },
  { title: "Smart shortlisting", desc: "Filter by skills, college, and availability." },
  { title: "Drive coordination", desc: "Keep communication and schedules in one place." },
  { title: "Better signal", desc: "Cleaner profiles built from resume + skills." },
];

export default function Colleges() {
  return (
    <section id="colleges" className="sec">
      <Container>
        <div className="twoCol">
          <div>
            <div className="secKicker">For Colleges</div>
            <h2 className="secTitle">A placement workflow your team will actually use</h2>
            <p className="secText">
              Manage drives, share announcements, and track outcomes. Keep students and coordinators aligned with a modern
              workflow.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#support">Partner with CampusPe</a>
              <a className="btn btnOutline" href="#support">Talk to us</a>
            </div>

            <div className="featureGrid">
              {COLLEGE_POINTS.map((p) => (
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

          <div className="mockCard">
            <div className="boardHead">
              <div className="boardTitle">Placement board</div>
              <div className="boardPills">
                <span className="chip">Drives</span>
                <span className="chip chipSoft">Announcements</span>
                <span className="chip chipSoft">Reports</span>
              </div>
            </div>

            <div className="boardGrid">
              <div className="miniCard">
                <div className="miniTop">
                  <div className="miniDot" />
                  <div className="miniTitle">Drive: Infosys</div>
                </div>
                <div className="miniSub">Eligibility + schedule set</div>
                <div className="miniMeta">142 applied • 24 shortlisted</div>
              </div>

              <div className="miniCard">
                <div className="miniTop">
                  <div className="miniDot miniDot2" />
                  <div className="miniTitle">Announcement</div>
                </div>
                <div className="miniSub">Pre-placement talk</div>
                <div className="miniMeta">Today 4:00 PM</div>
              </div>

              <div className="miniCard">
                <div className="miniTop">
                  <div className="miniDot miniDot3" />
                  <div className="miniTitle">Report export</div>
                </div>
                <div className="miniSub">NAAC-ready format</div>
                <div className="miniMeta">CSV • PDF</div>
              </div>

              <div className="miniCard">
                <div className="miniTop">
                  <div className="miniDot miniDot4" />
                  <div className="miniTitle">Outcome tracking</div>
                </div>
                <div className="miniSub">Offers & joining</div>
                <div className="miniMeta">Updated live</div>
              </div>
            </div>

            <div className="boardFoot">
              <div className="boardFootText">Student-first • Clean workflow</div>
              <a className="btn btnPrimary btnSm" href="#support">Get started</a>
            </div>
          </div>
        </div>

        <div className="spacer24" />

        <div id="employers" className="twoCol">
          <div className="glassCard">
            <div className="secKicker">For Employers</div>
            <h2 className="secTitle">Hire from campuses without the chaos</h2>
            <p className="secText">
              CampusPe helps you find high-intent candidates, run campus drives, and move faster with a simple workflow for
              hiring teams.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#support">Start hiring</a>
              <a className="btn btnOutline" href="#support">Request a demo</a>
            </div>

            <div className="featureGrid">
              {EMPLOYER_POINTS.map((p) => (
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

          <div className="mockCard">
            <div className="pipelineHead">
              <div>
                <div className="pipelineTitle">Hiring pipeline</div>
                <div className="pipelineSub">Verified campus talent</div>
              </div>
              <span className="chip">High-intent</span>
            </div>

            <div className="pipelineCols">
              <div className="pipeCol">
                <div className="pipeLabel">Applied</div>
                <div className="pipeItem">Akhil S • React</div>
                <div className="pipeItem">Sneha K • SQL</div>
                <div className="pipeItem">Vivek R • Java</div>
              </div>
              <div className="pipeCol">
                <div className="pipeLabel">Shortlisted</div>
                <div className="pipeItem">Meera P • UI</div>
                <div className="pipeItem">Rohan T • Python</div>
              </div>
              <div className="pipeCol">
                <div className="pipeLabel">Offer</div>
                <div className="pipeItem">Neha S • Analyst</div>
              </div>
            </div>

            <div className="pipelineFoot">
              <div className="miniNote">Faster shortlisting with skills + resume</div>
              <a className="btn btnOutline btnSm" href="#support">See demo</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
