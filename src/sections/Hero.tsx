import Container from "@/components/Container"
import Image from "next/image"

function RoleCard({
  icon,
  tag,
  title,
  desc,
  items,
  btn,
}: {
  icon: string
  tag: string
  title: string
  desc: string
  items: string[]
  btn: string
}) {
  return (
    <div className="roleCard">
      <div className="roleTop">
        <div className="roleIcon">{icon}</div>
        <div className="roleTag">{tag}</div>
      </div>

      <div className="roleTitle">{title}</div>
      <div className="roleDesc">{desc}</div>

      <div className="roleList">
        {items.map((t) => (
          <div key={t}>
            <div className="tick">✓</div>
            <div>{t}</div>
          </div>
        ))}
      </div>

      <div className="roleBtnWrap">
        <button className="roleBtn" type="button">{btn}</button>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Container>
        <div className="heroInner">
          <div className="heroTop">
            <div className="heroTopLeft">
              <div className="brand">
                <div className="logo">CP</div>
                <div className="brandText">
                  <b>CampusPe</b>
                  <span>Campus to Career</span>
                </div>
              </div>

              <div className="heroNav">
                <a href="#colleges">Colleges</a>
                <a href="#employers">Employers</a>
                <a href="#jobs">Jobs</a>
                <a href="#blogs">Blogs</a>
              </div>
            </div>

            <div className="heroTopRight">
              <a className="smallLink" href="#signin">Sign In</a>
              <a className="btn btnPrimary" href="#get-started" style={{ height: 36, padding: "0 14px" }}>
                Sign Up
              </a>
            </div>
          </div>

          <div className="heroContent">
            <div className="pill">
              <span className="pillIcon">⟡</span>
              AI-Powered Campus Assistant
            </div>

            <div className="h1">
              Connect <span className="blue">10X Faster</span><span className="green">.</span>
            </div>

            <div className="lead">
              One platform connecting students, colleges & employers — faster.
            </div>

            <div className="heroQuestion">What are you looking for?</div>

            <div className="heroGrid">
              <RoleCard
                icon="🎓"
                tag="Coming Soon"
                title="College"
                desc="Explore colleges, courses, fees, placements & more"
                items={[
                  "Search by course, location, fees",
                  "Connect directly with colleges",
                  "Improve student placements",
                ]}
                btn="Join Waitlist →"
              />
              <RoleCard
                icon="💼"
                tag="Available Now"
                title="I'm Looking for a Job"
                desc="Upload your resume. We'll find jobs that fit you."
                items={[
                  "Jobs from 1000+ sources",
                  "AI powered matching",
                  "WhatsApp & email alerts",
                ]}
                btn="Explore Jobs →"
              />
              <RoleCard
                icon="🧑‍💻"
                tag="Coming Soon"
                title="I'm Hiring"
                desc="Connect with colleges and find candidates — from students to graduates."
                items={[
                  "Connect directly with colleges",
                  "Find the right candidates",
                  "Simplify your hiring",
                ]}
                btn="Join Waitlist →"
              />
            </div>

            <div className="stats">
              <div className="stat">
                <div className="statIcon">👥</div>
                <div>
                  <b>800+</b>
                  <span>Students</span>
                </div>
              </div>
              <div className="stat">
                <div className="statIcon">🏛️</div>
                <div>
                  <b>130+</b>
                  <span>colleges</span>
                </div>
              </div>
              <div className="stat">
                <div className="statIcon">🧳</div>
                <div>
                  <b>100+</b>
                  <span>jobs & internships</span>
                </div>
              </div>
              <div className="stat">
                <div className="statIcon">🛡️</div>
                <div>
                  <b>100%</b>
                  <span>Safe & Trusted</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 4 }} id="signin">
              <a className="btn btnPrimary" href="#download">Download App</a>
              <a className="btn btnOutline" href="#features">Explore opportunities</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
