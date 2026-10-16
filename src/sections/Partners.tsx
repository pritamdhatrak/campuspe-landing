import Container from "@/components/Container";

const BRANDS = ["Microsoft", "Google", "Amazon", "Deloitte", "TCS", "Infosys", "Accenture", "Wipro"];

export default function Partners() {
  return (
    <section id="partners" className="sec secAlt">
      <Container>
        <div className="secHead">
          <div className="secKicker">Partners</div>
          <h2 className="secTitle">A few brands students love</h2>
        </div>

        <div className="brandGrid">
          {BRANDS.map((b) => (
            <div key={b} className="brandCard">
              <div className="brandDot" />
              <div className="brandName">{b}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
