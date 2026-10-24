import type { Metadata } from "next";
import { Chapter, PageTurn } from "../site-shell";
import { ActivityIndex } from "../portfolio-ui";
import { activities } from "../content";

export const metadata: Metadata = { title: "Music" };
const music = activities.filter((entry) => entry.id === "piano");

export default function Page() {
  return (
    <>
      <section
        id="music"
        className="activities section"
        aria-labelledby="music-title"
      >
        <Chapter number="07" label="Music" />
        <div className="section-heading">
          <h1 id="music-title">
            At the
            <br />
            <em>piano.</em>
          </h1>
          <div className="heading-note">
            <span className="tiny-cross" aria-hidden="true">
              +
            </span>
            <p>
              Playing since age six. Trinity College London programme since
              2017.
            </p>
          </div>
        </div>
        <ActivityIndex entries={music} label="music entries" />
      </section>
      <PageTurn
        previous={["/internships", "Internships"]}
        next={["/about", "About"]}
      />
    </>
  );
}
