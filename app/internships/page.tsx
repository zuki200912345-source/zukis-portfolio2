import type { Metadata } from "next";
import { Chapter, PageTurn } from "../site-shell";
import { ActivityIndex } from "../portfolio-ui";
import { internships } from "../project-content";
export const metadata: Metadata = { title: "Internships" };
export default function Page() {
  return (
    <>
      <section
        id="internships"
        className="activities section"
        aria-labelledby="internships-title"
      >
        <Chapter number="06" label="Internships" />
        <div className="section-heading">
          <h1 id="internships-title">
            Professional
            <br />
            <em>experience.</em>
          </h1>
          <div className="heading-note">
            <span className="tiny-cross" aria-hidden="true">
              +
            </span>
            <p>My internships at Meta and KarmSolar.</p>
          </div>
        </div>
        <ActivityIndex entries={internships} label="internships" />
      </section>
      <PageTurn
        previous={["/projects", "Independent Projects"]}
        next={["/music", "Music"]}
      />
    </>
  );
}
