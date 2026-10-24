import Link from "next/link";

const sections = [
  {
    href: "/research",
    name: "Research",
    detail:
      "My published coffee grounds review and investigations in mathematics, physics, and chemistry.",
    action: "View research",
  },
  {
    href: "/projects",
    name: "Independent Projects",
    detail:
      "Websites, learning tools, games, and software I have built or helped develop.",
    action: "Browse projects",
  },
  {
    href: "/education",
    name: "Education",
    detail:
      "My IB subjects and the clubs and conferences I help organise at school.",
    action: "View education",
  },
  {
    href: "/activities",
    name: "Activities",
    detail:
      "Internships, cooking, piano, Model United Nations, and community service.",
    action: "View activities",
  },
  {
    href: "/awards",
    name: "Awards & honours",
    detail: "Recognition in chemistry, physics, mathematics, and STEM.",
    action: "View awards",
  },
  {
    href: "/about",
    name: "About me",
    detail: "A little about my interests and how to get in touch.",
    action: "Meet Zuki",
  },
];
export default function Home() {
  return (
    <div className="section home-page">
      <section className="home-intro" aria-labelledby="home-title">
        <p className="eyebrow">Abdallah El Dessouky · Cairo, Egypt</p>
        <h1 id="home-title">Hi, I’m Zuki.</h1>
        <p className="lead">
          I’m an IB student interested in materials science and engineering. I
          research, build software, and explore the chemistry behind cooking.
        </p>
        <div className="actions">
          <Link className="button" href="/research">
            Explore my research →
          </Link>
          <Link className="button secondary" href="/projects">
            See my projects →
          </Link>
        </div>
      </section>
      <aside className="publication-strip">
        <span className="eyebrow">Published research · October 2026</span>
        <Link href="/research#scg">
          Spent coffee grounds for heavy-metal remediation{" "}
          <span aria-hidden="true">→</span>
        </Link>
        <p>Read about the study and find the full article in NHSJS.</p>
      </aside>
      <section className="directory" aria-labelledby="directory-title">
        <h2 id="directory-title">Explore my work</h2>
        <div className="destination-grid">
          {sections.map((item) => (
            <Link className="destination" href={item.href} key={item.href}>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              <span className="text-link">{item.action} →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
