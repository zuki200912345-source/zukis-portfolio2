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
          <h1 id="awards-title">Awards & honours</h1>
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
        previous={["/activities", "Activities"]}
        next={["/about", "About"]}
      />
    </>
  );
}
