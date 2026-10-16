import Container from "@/components/Container"

export default function Navbar() {
  return (
    <header className="nav">
      <Container className="navRow">
        <a href="#home" className="brand">
          <div className="logo">CP</div>
          <div className="brandText">
            <b>CampusPe</b>
            <span>Campus to Career</span>
          </div>
        </a>

        <nav className="navLinks">
          <a href="#colleges">Colleges</a>
          <a href="#employers">Employers</a>
          <a href="#jobs">Jobs</a>
          <a href="#blogs">Blogs</a>
        </nav>

        <div className="navActions">
          <a className="btn btnGhost" href="#signin">Sign in</a>
          <a className="btn btnPrimary" href="#get-started">Sign Up</a>
        </div>
      </Container>
    </header>
  )
}
