import type { Metadata } from "next";
import { PageTurn } from "../site-shell";

export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (
    <>
      <section className="about section" aria-labelledby="about-title">
        <div className="about-label mono">The person between the projects</div>
        <h1 id="about-title">
          Curiosity rarely stays
          <br />
          in <em>one subject.</em>
        </h1>
        <div className="about-grid">
          <p>
            I’m Abdallah El Dessouky, usually called Zuki. I’m an IB student in
            Cairo interested in materials science, engineering, and the ways a
            scientific idea becomes something useful.
          </p>
          <p>
            That interest follows me into the kitchen, into the software I
            build, and into questions about how we learn. Away from those
            projects, I play piano, read, and garden.
          </p>
        </div>
      </section>
      <PageTurn previous={["/music", "Music"]} next={["/", "Home"]} />
    </>
  );
}
