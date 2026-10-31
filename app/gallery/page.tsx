import type { Metadata } from "next";
import { Chapter, PageTurn } from "../site-shell";
import GalleryViewer from "./gallery-viewer";

export const metadata: Metadata = { title: "Gallery", description: "School presentations, the 3alemny founders, and the community around 3alemny." };

export default function GalleryPage() {
  return <>
    <section className="gallery-page activities section" aria-labelledby="gallery-title">
      <Chapter number="08" label="Gallery" />
      <div className="section-heading">
        <h1 id="gallery-title">Out in<br /><em>the world.</em></h1>
        <div className="heading-note"><span className="tiny-cross" aria-hidden="true">+</span><p>School presentations, the 3alemny team, and moments with our community.</p></div>
      </div>
      <div className="gallery-intro"><p>Abdallah El Dessouky, founder and CTO of 3alemny, presenting at school and sharing the work beyond the screen.</p><nav aria-label="Gallery sections"><a href="#presentations">Presentations ↓</a><a href="#founders">Founders ↓</a><a href="#community">Community ↓</a></nav></div>
      <GalleryViewer />
    </section>
    <PageTurn previous={["/music", "Music"]} next={["/about", "About"]} />
  </>;
}
