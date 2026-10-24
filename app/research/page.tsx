import type { Metadata } from "next";
import { Chapter, PageTurn } from "../site-shell";
import { research } from "../content";
import { ResearchDiagram } from "../portfolio-ui";

export const metadata: Metadata = { title: "Research" };

export default function Page() {
  return (
    <>
      <section
        id="research"
        className="research section"
        aria-labelledby="research-title"
      >
        <Chapter number="03" label="Research projects" />
        <div className="section-heading">
          <h1 id="research-title">
            Stay with
            <br />
            <em>the question.</em>
          </h1>
          <div className="heading-note">
            <span className="tiny-cross" aria-hidden="true">
              +
            </span>
            <p>
              Investigations in materials,
              <br />
              heat, and chemistry.
            </p>
            <p className="mono">Questions & approaches</p>
          </div>
        </div>
        <div className="research-list">
          {research.map((item, i) => (
            <article className="research-entry" key={item.id} id={item.id}>
              <div className="research-art">
                <ResearchDiagram type={item.type} />
                <span className="mono">
                  {item.code} / 0{i + 1}
                </span>
              </div>
              <div className="research-copy">
                <p className="mono research-meta">{item.subject}</p>
                <h2>{item.title}</h2>
                {item.id === "scg" ? (
                  <a
                    className="publication-link mono"
                    href="https://nhsjs.com/2026/how-suitable-are-spent-coffee-grounds-for-heavy-metal-remediation-in-water-and-soil-a-systematic-review-of-mechanisms-conditions-and-practical-viability/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the published article · NHSJS ↗
                  </a>
                ) : null}
                <div className="question">
                  <span className="mono">The question</span>
                  <p>{item.question}</p>
                </div>
                {"outcome" in item && item.outcome ? (
                  <div className="research-outcome">
                    <p className="mono outcome-label">Published output</p>
                    <p>{item.outcome}</p>
                  </div>
                ) : null}
                <p className="research-description">{item.text}</p>
                <div className="research-footer">
                  <span className="mono">{item.method}</span>
                  <span className="formula">{item.formula}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageTurn
        previous={["/activities", "Activities"]}
        next={["/awards", "Awards"]}
      />
    </>
  );
}
