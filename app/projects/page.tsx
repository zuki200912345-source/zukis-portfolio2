import type { Metadata } from "next";
import { activities } from "../content";
import { PageTurn } from "../site-shell";
export const metadata: Metadata = { title: "Independent Projects" };
const builds = activities.filter((item) => item.category === "Building");
const projects = [
  ...builds.map((item) => ({
    id: item.id,
    name: item.name,
    category: "Learning & AI",
    role: item.role,
    description: item.summary,
    href: item.href,
    status:
      item.id === "nano"
        ? "In development"
        : item.href
          ? "Website"
          : "Prototype",
    paragraphs: item.paragraphs,
  })),
  {
    id: "anchor",
    name: "Anchor",
    category: "Learning & AI",
    role: "App project",
    description:
      "An app exploring how people can use AI while remaining involved in their own thinking, developed from my research into cognitive offloading.",
    status: "Prototype",
  },
  {
    id: "thruster",
    name: "THRUSTER",
    category: "Games",
    role: "Browser game",
    description:
      "A jetpack game with missions, upgrades, different environments, and saved progress. Players can start as a guest or use an account.",
    href: "https://jet.adessouky.com",
    status: "Play online",
  },
  {
    id: "fortday",
    name: "Fortday",
    category: "Games",
    role: "Multiplayer game project",
    description:
      "A browser game combining third-person movement, combat, and building. Multiplayer and the game world are still being developed and tested.",
    status: "In development",
  },
  {
    id: "texas-holdem",
    name: "Texas Hold’em",
    category: "Games",
    role: "Browser game",
    description:
      "A single-player card game against three computer opponents, using play-money chips.",
    status: "Private demo",
  },
  {
    id: "pocket-cloud",
    name: "Pocket Cloud",
    category: "Websites & tools",
    role: "Workspace platform",
    description:
      "A workspace for files and small apps, with accounts, sharing, version history, and a local-first core.",
    href: "https://pocket-cloud.adessouky.com",
    status: "Web app",
  },
  {
    id: "bisc-eic",
    name: "BISC Engineering & Innovation Club",
    category: "Websites & tools",
    role: "Club website & portal",
    description:
      "A website introducing the club and its proposed engineering projects, with a members’ portal for club resources.",
    status: "Private demo",
  },
  {
    id: "portfolio",
    name: "Personal portfolio",
    category: "Websites & tools",
    role: "Website",
    description:
      "This website: a place to organise my research, independent projects, education, and activities.",
    href: "/",
    status: "You’re here",
  },
];
const groups = ["Learning & AI", "Games", "Websites & tools"];
export default function Page() {
  return (
    <>
      <section className="section" aria-labelledby="projects-title">
        <div className="page-heading">
          <p className="eyebrow">Websites, apps & experiments</p>
          <h1 id="projects-title">Independent Projects</h1>
          <p>
            Things I have built or helped develop. Each project includes my
            role, a short description, and a link where it is publicly
            available.
          </p>
        </div>
        <nav className="on-this-page" aria-label="Project categories">
          <strong>Browse by type</strong>
          {groups.map((group, i) => (
            <a key={group} href={`#group-${i}`}>
              {group}
            </a>
          ))}
        </nav>
        {groups.map((group, i) => (
          <section
            className="project-group"
            id={`group-${i}`}
            key={group}
            aria-labelledby={`heading-${i}`}
          >
            <h2 id={`heading-${i}`}>{group}</h2>
            <div className="project-grid">
              {projects
                .filter((project) => project.category === group)
                .map((project) => (
                  <article
                    className="project-card"
                    id={project.id}
                    key={project.id}
                  >
                    <div className="project-top">
                      <p className="eyebrow">{project.role}</p>
                      <span className="status">{project.status}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {"paragraphs" in project ? (
                      <details className="project-details">
                        <summary>More about this project</summary>
                        {project.paragraphs.map((paragraph, j) => (
                          <p key={j}>{paragraph}</p>
                        ))}
                      </details>
                    ) : null}
                    {"href" in project && project.href ? (
                      <a
                        className="text-link project-link"
                        href={project.href}
                        {...(project.href.startsWith("https:")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {project.id === "thruster"
                          ? "Play THRUSTER"
                          : project.id === "portfolio"
                            ? "Back to home"
                            : `Visit ${project.name}`}{" "}
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <p className="availability">
                        {project.status === "Private demo"
                          ? "Demo is private."
                          : "Public demo not available yet."}
                      </p>
                    )}
                  </article>
                ))}
            </div>
          </section>
        ))}
      </section>
      <PageTurn
        previous={["/research", "Research"]}
        next={["/education", "Education"]}
      />
    </>
  );
}
