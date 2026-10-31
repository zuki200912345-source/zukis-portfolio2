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
        <a className="school-gallery-link mono" href="#school-presentations">See school presentations ↓</a>
        <ActivityIndex entries={projects} label="projects" />
        <section className="school-gallery" id="school-presentations" aria-labelledby="school-presentations-title">
          <div className="school-gallery-heading">
            <div>
              <p className="mono">School presentations</p>
              <h2 id="school-presentations-title">Taking ideas <em>to students.</em></h2>
            </div>
            <p>Abdallah El Dessouky, founder and CTO of 3alemny, presenting at a school.</p>
          </div>
          <div className="school-gallery-grid">
            <figure>
              <img src="/gallery/3alemny-school-presentation.jpg" alt="Abdallah presenting at a lectern beside a projection screen" loading="lazy" />
              <figcaption className="mono">A school presentation</figcaption>
            </figure>
            <figure>
              <img src="/gallery/3alemny-presentation-stage.jpg" alt="Abdallah speaking at the lectern on a school stage" loading="lazy" />
              <figcaption className="mono">Sharing the work in person</figcaption>
            </figure>
          </div>
          <figure className="school-gallery-video">
            <video controls preload="metadata" poster="/gallery/3alemny-presentation-stage.jpg" aria-label="Video of Abdallah presenting at a school">
              <source src="/gallery/school-presentation.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <figcaption className="mono">A moment from the presentation</figcaption>
          </figure>
          <div className="school-gallery-community">
            <div className="school-gallery-heading">
              <div>
                <p className="mono">3alemny · community</p>
                <h3>Meeting students <em>along the way.</em></h3>
              </div>
              <p>Sharing 3alemny with students and introducing the platform in person.</p>
            </div>
            <div className="school-gallery-community-grid">
              <figure><img src="/gallery/3alemny-community-1.jpg" alt="Two people holding 3alemny brochures on a football pitch" loading="lazy" /></figure>
              <figure><img src="/gallery/3alemny-community-2.jpg" alt="Two students holding 3alemny brochures on a football pitch" loading="lazy" /></figure>
              <figure><img src="/gallery/3alemny-community-3.jpg" alt="Two students holding 3alemny brochures outdoors" loading="lazy" /></figure>
              <figure><img src="/gallery/3alemny-community-4.jpg" alt="Two students holding 3alemny brochures on a football pitch" loading="lazy" /></figure>
            </div>
          </div>
        </section>
      </section>
      <PageTurn
        previous={["/awards", "Awards"]}
        next={["/internships", "Internships"]}
      />
    </>
  );
}
