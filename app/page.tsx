import Link from "next/link";
import { projects, internships } from "./project-content";
import { Atlas } from "./portfolio-ui";
import { activities, research, awards } from "./content";

const destinations = [
  {
    href: "/education",
    number: "01",
    name: "Education",
    line: "The starting point.",
    detail: "Six IB subjects and the communities I help build at school.",
    count: "Subjects & school life",
  },
  {
    href: "/activities",
    number: "02",
    name: "Activities",
    line: "Outside the lines.",
    detail:
      "Products, professional experiences, creative practice, and community.",
    count: `${activities.length} activities`,
  },
  {
    href: "/research",
    number: "03",
    name: "Research",
    line: "Stay with the question.",
    detail: "Heat, chemistry, and the potential of a familiar waste material.",
    count: `${research.length} investigations`,
  },
  {
    href: "/awards",
    number: "04",
    name: "Awards & honours",
    line: "A few milestones.",
    detail: "Recognition in chemistry, physics, mathematics, and STEM.",
    count: `${awards.length} honours`,
  },
  {
    href: "/projects",
    number: "05",
    name: "Independent Projects",
    line: "Things I build.",
    detail: "Websites, apps, games, and independent experiments.",
    count: `${projects.length} projects`,
  },
  {
    href: "/internships",
    number: "06",
    name: "Internships",
    line: "Learning through work.",
    detail: "Professional experience at Meta and KarmSolar.",
    count: `${internships.length} internships`,
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline mono">
          <span>Personal website / Cairo, Egypt</span>
          <span>IB diploma candidate · 2027</span>
        </div>
        <div className="hero-name">
          <p className="hero-kicker mono">Abdallah El Dessouky</p>
          <h1 id="hero-title">
            <span className="hero-title-line">Call me</span>
            <em>Zuki.</em>
            <span className="name-asterisk" aria-hidden="true">
              ✳
            </span>
          </h1>
        </div>
        <Atlas />
        <div className="hero-bottom">
          <p>
            I follow questions
            <br />
            across disciplines.
            <br />
            <span>Then I make things.</span>
          </p>
          <Link className="round-link" href="/education">
            <span>
              Enter the
              <br />
              portfolio
            </span>
            <span aria-hidden="true">↘</span>
          </Link>
          <p className="hero-note mono">
            Science. Software.
            <br />A piano. A kitchen.
            <br />A few connections.
          </p>
        </div>
        <div className="hero-baseline mono">
          <span>Choose a chapter ↓</span>
          <span>A work in curiosity, always.</span>
          <span>01 — 06</span>
        </div>
      </section>
      <section
        className="home-directory section"
        aria-labelledby="directory-title"
      >
        <div className="chapter-label">
          <span>Index</span>
          <span>Choose a direction</span>
          <span className="chapter-line" />
        </div>
        <div className="section-heading">
          <h2 id="directory-title">
            A few different
            <br />
            <em>ways in.</em>
          </h2>
          <p className="directory-note">
            Each chapter has its own page.
            <br />
            Follow what interests you.
          </p>
        </div>
        <div className="destination-grid">
          {destinations.map((item) => (
            <Link href={item.href} className="destination" key={item.href}>
              <span className="destination-top mono">
                <span>
                  {item.number} / {item.name}
                </span>
                <span aria-hidden="true">↗</span>
              </span>
              <h3>{item.line}</h3>
              <p>{item.detail}</p>
              <span className="destination-count mono">{item.count}</span>
            </Link>
          ))}
        </div>
        <Link href="/about" className="about-link">
          <span className="mono">And the person behind it all</span>
          <span>
            Meet Zuki <em>↗</em>
          </span>
        </Link>
      </section>
    </>
  );
}
