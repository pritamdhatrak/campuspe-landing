import Container from "@/components/Container"
import Button from "@/components/Button"

export default function Employers() {
  return (
    <section id="employers" className="py-14 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="order-2 lg:order-1 grid gap-3">
            {[
              { t: "Faster hiring", d: "Post openings and reach verified campus talent." },
              { t: "Smart shortlisting", d: "Filter by skills, college, and availability." },
              { t: "Drive coordination", d: "Keep communication and schedules in one place." },
              { t: "Better signal", d: "Cleaner profiles built from resume + skills." },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_18px_55px_-45px_rgba(2,6,23,.55)] transition hover:-translate-y-0.5 hover:border-slate-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{x.t}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{x.d}</div>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-sky-600/10" />
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-xs font-semibold text-sky-700">For Employers</div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Hire from campuses without the chaos
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              CampusPe helps you find high-intent candidates, run campus drives, and move faster with a simple
              workflow for hiring teams.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="#get-started" variant="primary" className="h-11">
                Start hiring
              </Button>
              <Button href="#support" variant="outline" className="h-11">
                Request a demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
