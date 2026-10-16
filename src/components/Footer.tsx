import Container from "@/components/Container"

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footerGrid">
          <div>
            <div className="brand">
              <div className="logo">CP</div>
              <div className="brandText">
                <b>CampusPe</b>
                <span>Campus to Career</span>
              </div>
            </div>
            <p>
              CampusPe helps students discover opportunities and helps colleges & employers connect with verified talent.
            </p>
          </div>

          <div>
            <h4>Product</h4>
            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              <a href="#features">Features</a>
              <a href="#colleges">Colleges</a>
              <a href="#employers">Employers</a>
              <a href="#download">Download</a>
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              <a href="#home">About</a>
              <a href="#support">Support</a>
              <a href="#support">Contact</a>
            </div>
          </div>

          <div>
            <h4>Legal</h4>
            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <div>© CampusPe. All rights reserved.</div>
          <div>Built with Next.js</div>
        </div>
      </Container>
    </footer>
  )
}
