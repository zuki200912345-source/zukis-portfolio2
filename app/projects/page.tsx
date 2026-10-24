import type { Metadata } from "next";
import { Chapter, PageTurn } from "../site-shell";
import { ActivityIndex } from "../portfolio-ui";
import { projects } from "../project-content";
export const metadata: Metadata = { title: "Independent Projects" };
export default function Page() {
  return (
    <>
      <section
        id="projects"
        className="activities section"
        aria-labelledby="projects-title"
      >
        <Chapter number="05" label="Independent Projects" />
        <div className="section-heading">
          <h1 id="projects-title">
            Independent
            <br />
            <em>projects.</em>
          </h1>
          <div className="heading-note">
            <span className="tiny-cross" aria-hidden="true">
              +
            </span>
            <p>Websites, apps, games, and experiments.</p>
          </div>
        </div>
        <ActivityIndex entries={projects} label="projects" />
      </section>
      <PageTurn
        previous={["/awards", "Awards"]}
        next={["/internships", "Internships"]}
      />
    </>
  );
}
