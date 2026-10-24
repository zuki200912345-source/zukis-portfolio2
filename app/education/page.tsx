import type { Metadata } from "next";
import { Chapter, PageTurn } from "../site-shell";
import { schoolActivities, subjects } from "../content";
import { ActivityIndex } from "../portfolio-ui";

export const metadata: Metadata = { title: "Education" };

export default function Page() {
  return (
    <>
      <section
        id="education"
        className="education section"
        aria-labelledby="education-title"
      >
        <Chapter number="01" label="Education" />
        <div className="section-heading">
          <h1 id="education-title">Education</h1>
          <div className="heading-note">
            <span className="tiny-cross" aria-hidden="true">
              +
            </span>
            <p>British International School, Cairo</p>
            <p className="mono">
              IB Diploma candidate · Expected graduation 2027
            </p>
          </div>
        </div>
        <div className="subjects-heading mono">
          <h2>My subjects</h2>
          <span>Four higher level / two standard level</span>
        </div>
        <div className="subject-grid">
          {subjects.map((subject, i) => (
            <article className="subject" key={subject.name}>
              <div className="subject-top mono">
                <span>0{i + 1}</span>
                <span>{subject.level}</span>
              </div>
              <span className="subject-symbol" aria-hidden="true">
                {subject.symbol}
              </span>
              <h3>{subject.name}</h3>
              <p>{subject.detail || "International Baccalaureate"}</p>
            </article>
          ))}
        </div>
        <div className="school-heading">
          <p className="mono">Beyond my timetable</p>
          <h2>School activities & leadership</h2>
          <p>
            Organising a conference, bringing students into engineering, and
            making room for science beyond the syllabus.
          </p>
        </div>
        <ActivityIndex entries={schoolActivities} variant="school" />
      </section>
      <PageTurn
        previous={["/projects", "Independent Projects"]}
        next={["/activities", "Activities"]}
      />
    </>
  );
}
