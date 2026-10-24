import type { Metadata } from "next";
import { PageTurn } from "../site-shell";
import { research } from "../content";
export const metadata: Metadata = { title: "Research" };
const publication =
  "https://nhsjs.com/2026/how-suitable-are-spent-coffee-grounds-for-heavy-metal-remediation-in-water-and-soil-a-systematic-review-of-mechanisms-conditions-and-practical-viability/";
export default function Page() {
  return (
    <>
      <section className="section" aria-labelledby="research-title">
        <div className="page-heading">
          <p className="eyebrow">Published work & school investigations</p>
          <h1 id="research-title">Research</h1>
          <p>
            My independent research comes first, followed by my IB internal
            assessments.
          </p>
        </div>
        <nav className="on-this-page" aria-label="Research on this page">
          <strong>On this page</strong>
          {research.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.id === "scg"
                ? "Coffee grounds"
                : item.subject.split(" · ")[0]}
            </a>
          ))}
        </nav>
        <div className="research-list">
          {research.map((item) => (
            <article
              className={`research-entry ${item.id === "scg" ? "featured-research" : ""}`}
              key={item.id}
              id={item.id}
            >
              <p className="eyebrow">
                {item.subject}
                {item.id === "scg" ? " · Published" : ""}
              </p>
              <h2>{item.title}</h2>
              {item.id === "scg" ? (
                <>
                  <p className="publication-meta">
                    National High School Journal of Science · 21 October 2026
                  </p>
                  <a
                    className="button"
                    href={publication}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the published article ↗
                  </a>
                </>
              ) : null}
              <div className="question">
                <h3>Research question</h3>
                <p>{item.question}</p>
              </div>
              <p>{item.text}</p>
              <p className="method">
                <strong>Method:</strong> {item.method}
              </p>
            </article>
          ))}
        </div>
      </section>
      <PageTurn
        previous={["/", "Home"]}
        next={["/projects", "Independent Projects"]}
      />
    </>
  );
}
