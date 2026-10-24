import Link from "next/link";
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
          <h1 id="activities-title">Activities</h1>
          <div className="heading-note">
            <p>Internships, creative interests, and community service.</p>
          </div>
        </div>
        <p className="section-note">
          Looking for my websites and apps?{" "}
          <Link href="/projects">Visit Independent Projects →</Link>
        </p>
        <ActivityIndex
          entries={activities.filter((entry) => entry.category !== "Building")}
        />
      </section>
      <PageTurn
        previous={["/education", "Education"]}
        next={["/awards", "Awards"]}
      />
    </>
  );
}
