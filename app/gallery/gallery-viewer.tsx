"use client";

import { useRef, useState } from "react";

type Photo = { src: string; alt: string; caption: string };
type Group = { id: string; label: string; title: string; intro: string; photos: Photo[] };

const presentation: Photo[] = [
  { src: "/gallery/3alemny-school-presentation.jpg", alt: "Abdallah at the lectern during a school presentation", caption: "School presentation · 01" },
  { src: "/gallery/3alemny-presentation-stage.jpg", alt: "Abdallah presenting on a school stage", caption: "School presentation · 02" },
];
const founders: Photo[] = [
  { src: "/gallery/full/founders-approved.jpg", alt: "The three 3alemny founders at their booth", caption: "The 3alemny founders" },
];
const communityNumbers = [15, 16, 17, 18, 22, 23, 25, 27];
const communityDescriptions = [
  "Two people holding 3alemny brochures on a football pitch",
  "Two students holding 3alemny brochures on a football pitch",
  "A person holding a 3alemny brochure outdoors",
  "Two students holding 3alemny brochures on a football pitch",
  "A student holding a 3alemny brochure outdoors",
  "Two students holding 3alemny brochures outdoors",
  "Two students holding 3alemny brochures on a football pitch",
  "Two students holding 3alemny brochures outdoors",
];
const community: Photo[] = communityNumbers.map((number, i) => ({
  src: `/gallery/full/photo-${String(number).padStart(2, "0")}.jpg`,
  alt: communityDescriptions[i],
  caption: `3alemny community · ${String(i + 1).padStart(2, "0")}`,
}));
const groups: Group[] = [
  { id: "presentations", label: "01 / School presentations", title: "Taking ideas to students.", intro: "Presenting at a school and sharing ideas with students in person.", photos: presentation },
  { id: "founders", label: "02 / 3alemny", title: "Building together.", intro: "With my 3alemny co-founders at our booth.", photos: founders },
  { id: "community", label: "03 / Community", title: "Meeting people along the way.", intro: "Sharing 3alemny with students and introducing the platform in person.", photos: community },
];
const photos = groups.flatMap((group) => group.photos);

export default function GalleryViewer() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const open = (index: number) => { setSelected(index); dialog.current?.showModal(); };
  const move = (step: number) => setSelected((index) => (index + step + photos.length) % photos.length);
  return (
    <>
      {groups.map((group) => {
        const start = photos.indexOf(group.photos[0]);
        return <section className="gallery-group" key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
          <div className="gallery-group-head">
            <div><p className="mono">{group.label}</p><h2 id={`${group.id}-title`}>{group.title}</h2></div>
            <p>{group.intro}</p>
          </div>
          {group.id === "presentations" && <figure className="gallery-feature-video">
            <video controls preload="metadata" poster="/gallery/3alemny-presentation-stage.jpg" aria-label="Video of Abdallah presenting at a school">
              <source src="/gallery/school-presentation.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <figcaption className="mono">A moment from the presentation · 26 seconds</figcaption>
          </figure>}
          <div className="gallery-grid">
            {group.photos.map((photo, i) => <button className="gallery-tile" type="button" key={photo.src} onClick={() => open(start + i)} aria-label={`Open photo: ${photo.alt}`}>
              <img src={photo.src} alt="" loading="lazy" />
              <span className="gallery-tile-number mono">{String(i + 1).padStart(2, "0")} ↗</span>
            </button>)}
          </div>
        </section>;
      })}
      <dialog className="gallery-lightbox" ref={dialog} aria-label="Photo viewer" onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }}>
        <div className="gallery-viewer-top"><span className="mono">{selected + 1} / {photos.length}</span><button type="button" onClick={() => dialog.current?.close()} aria-label="Close photo viewer">Close ×</button></div>
        <img src={photos[selected].src} alt={photos[selected].alt} />
        <div className="gallery-viewer-bottom"><p>{photos[selected].caption}</p><div><button type="button" onClick={() => move(-1)} aria-label="Previous photo">←</button><button type="button" onClick={() => move(1)} aria-label="Next photo">→</button></div></div>
      </dialog>
    </>
  );
}
