import type { Metadata } from "next";
import { Chapter, PageTurn } from "../site-shell";
import { activities } from "../content";
import { ActivityIndex } from "../portfolio-ui";

export const metadata: Metadata = { title: "Activities" };

export default function Page() {
  return (
    <>
      <section
        id="activities"
        className="activities section"
        aria-labelledby="activities-title"
      >
        <Chapter number="02" label="Activities" />
        <div className="section-heading">
          <h1 id="activities-title">
            Outside
            <br />
            <em>the lines.</em>
          </h1>
          <div className="heading-note">
            <span className="tiny-cross" aria-hidden="true">
              +
            </span>
            <p>
              Things I build.
              <br />
              Places I learn.
              <br />
              Practices I return to.
            </p>
          </div>
        </div>
        <ActivityIndex entries={activities} />
        <div className="interlude">
          <span className="mono">A recurring thread</span>
          <p>
            What happens
            <br />
            if I <em>try it?</em>
          </p>
          <svg viewBox="0 0 200 200" aria-hidden="true">
            <path d="M20 100h160M100 20v160M43 43l114 114M43 157 157 43" />
            <circle cx="100" cy="100" r="61" />
          </svg>
        </div>
      </section>
      <PageTurn
        previous={["/education", "Education"]}
        next={["/research", "Research"]}
      />
    </>
  );
}
