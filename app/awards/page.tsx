import type { Metadata } from "next";
import { Chapter, PageTurn } from "../site-shell";
import { awards } from "../content";

export const metadata: Metadata = { title: "Awards & honours" };

export default function Page() {
  return (
    <>
      <section
        id="awards"
        className="awards section"
        aria-labelledby="awards-title"
      >
        <Chapter number="04" label="Awards & honours" />
        <div className="section-heading">
          <h1 id="awards-title">
            A few
            <br />
            <em>milestones.</em>
          </h1>
          <div className="award-seal" aria-hidden="true">
            <svg viewBox="0 0 160 160">
              <path d="M80 12 96 48 133 27 112 64 148 80 112 96 133 133 96 112 80 148 64 112 27 133 48 96 12 80 48 64 27 27 64 48Z" />
            </svg>
            <span>AED</span>
          </div>
        </div>
        <div className="award-list">
          {awards.map((award, i) => (
            <article className="award" key={award.title + award.organisation}>
              <span className="award-number mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{award.title}</h2>
                <p>{award.organisation}</p>
              </div>
              <span className="award-result">{award.result}</span>
              <span className="award-year mono">{award.year}</span>
            </article>
          ))}
        </div>
      </section>
      <PageTurn
        previous={["/research", "Research"]}
        next={["/about", "About"]}
      />
    </>
  );
}
