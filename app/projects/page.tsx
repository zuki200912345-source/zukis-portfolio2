import type { Metadata } from "next";
import Link from "next/link";
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
        <Link className="school-gallery-link mono" href="/gallery">Go to the gallery ↗</Link>
        <ActivityIndex entries={projects} label="projects" />
        <section className="school-gallery" id="school-presentations" aria-labelledby="school-presentations-title">
          <div className="school-gallery-heading"><div><p className="mono">School presentations & community</p><h2 id="school-presentations-title">See the <em>gallery.</em></h2></div><p><Link href="/gallery">Explore photos and video from school visits and 3alemny ↗</Link></p></div>
        </section>
      </section>
      <PageTurn
        previous={["/awards", "Awards"]}
        next={["/internships", "Internships"]}
      />
    </>
  );
}
