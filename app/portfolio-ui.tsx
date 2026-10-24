"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Entry } from "./content";
import { KineticSculpture } from "./motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const chapters = [
  { id: "education", title: "Education", subtitle: "Subjects & school life" },
  {
    id: "activities",
    title: "Activities",
    subtitle: "Building, learning, creating",
  },
  { id: "research", title: "Research", subtitle: "Questions & investigations" },
  { id: "awards", title: "Awards", subtitle: "Honours & milestones" },
];

const navigationPages = [
  ...chapters,
  {
    id: "projects",
    title: "Independent Projects",
    subtitle: "Websites, apps & games",
  },
  {
    id: "internships",
    title: "Internships",
    subtitle: "Professional experience",
  },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const [motion, setMotion] = useState(true);
  const indexPages = [
    { id: "", title: "Home", subtitle: "A field of interests" },
    ...navigationPages,
    { id: "about", title: "About", subtitle: "The person behind the projects" },
  ];

  useEffect(() => {
    const followLegacyLink = () => {
      if (pathname !== "/") return;
      const hash = window.location.hash.slice(1);
      const pages = [
        "education",
        "activities",
        "research",
        "awards",
        "projects",
        "internships",
        "about",
      ];
      if (pages.includes(hash)) router.replace(`/${hash}`);
      else if (["maths-ia", "physics-ia", "chemistry-ia", "scg"].includes(hash))
        router.replace(`/research#${hash}`);
    };
    followLegacyLink();
    window.addEventListener("hashchange", followLegacyLink);
    return () => window.removeEventListener("hashchange", followLegacyLink);
  }, [pathname, router]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--page-progress",
        String(range > 0 ? Math.min(1, window.scrollY / range) : 0),
      );
      document.documentElement.style.setProperty(
        "--hero-progress",
        String(
          pathname === "/"
            ? Math.min(1, window.scrollY / Math.max(window.innerHeight, 1))
            : 0,
        ),
      );
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      resize.disconnect();
    };
  }, [pathname]);

  function toggleMotion() {
    const next = !motion;
    setMotion(next);
    document.documentElement.dataset.motion = next ? "on" : "off";
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <Link
          className="wordmark"
          href="/"
          aria-label="Abdallah El Dessouky, home"
        >
          ae<span>d.</span>
        </Link>
        <nav aria-label="Main navigation">
          {navigationPages.map((chapter, i) => (
            <Link
              key={chapter.id}
              href={`/${chapter.id}`}
              aria-current={pathname === `/${chapter.id}` ? "page" : undefined}
            >
              <span className="nav-number">0{i + 1}</span>
              {chapter.title}
            </Link>
          ))}
        </nav>
        <button
          className="index-button mono"
          onClick={() => dialog.current?.showModal()}
        >
          Index <span aria-hidden="true">☷</span>
        </button>
      </header>
      <div className="side-rail" aria-hidden="true">
        <span>ABDALLAH EL DESSOUKY</span>
        <span>
          {pathname === "/"
            ? "PORTFOLIO / 2026"
            : `${pathname.slice(1).toUpperCase()} / 2026`}
        </span>
        <span className="rail-dot" />
      </div>
      <dialog
        className="index-dialog"
        aria-label="Portfolio index"
        ref={dialog}
      >
        <div className="dialog-header">
          <span className="mono">A personal index</span>
          <button
            className="close-button"
            aria-label="Close index"
            onClick={() => dialog.current?.close()}
          >
            ×
          </button>
        </div>
        <div className="dialog-links">
          {indexPages.map((page, i) => (
            <Link
              key={page.id}
              href={`/${page.id}`}
              aria-current={pathname === `/${page.id}` ? "page" : undefined}
              onClick={() => dialog.current?.close()}
            >
              <span className="mono">{String(i).padStart(2, "0")}</span>
              <span>
                {page.title}
                <small>{page.subtitle}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        <div className="dialog-footer">
          <a href="mailto:abdallaheldessouky09@gmail.com">Get in touch ↗</a>
          <button onClick={toggleMotion} aria-pressed={!motion}>
            {motion ? "Pause animation" : "Resume animation"}
          </button>
        </div>
      </dialog>
    </>
  );
}

function makeAtlasPaths() {
  const paths: string[] = [];
  function point(u: number, v: number) {
    const radius = 136 + 48 * Math.cos(v);
    const x = radius * Math.cos(u);
    const y = radius * Math.sin(u);
    const z = 48 * Math.sin(v);
    const tilt = 0.86;
    return `${(250 + x * 0.98 + y * 0.18).toFixed(1)},${(250 + y * Math.cos(tilt) + z * Math.sin(tilt)).toFixed(1)}`;
  }
  for (let j = 0; j < 22; j++) {
    const v = (j / 22) * Math.PI * 2;
    paths.push(
      Array.from({ length: 97 }, (_, k) =>
        point((k / 96) * Math.PI * 2, v),
      ).join(" "),
    );
  }
  for (let j = 0; j < 42; j++) {
    const u = (j / 42) * Math.PI * 2;
    paths.push(
      Array.from({ length: 49 }, (_, k) =>
        point(u, (k / 48) * Math.PI * 2),
      ).join(" "),
    );
  }
  return paths;
}
const atlasPaths = makeAtlasPaths();

export function Atlas() {
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="atlas"
      data-form={selected}
      ref={ref}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        ref.current?.style.setProperty(
          "--tilt-x",
          `${((event.clientY - rect.top) / rect.height - 0.5) * 12}deg`,
        );
        ref.current?.style.setProperty(
          "--tilt-y",
          `${((event.clientX - rect.left) / rect.width - 0.5) * -12}deg`,
        );
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty("--tilt-x", "0deg");
        ref.current?.style.setProperty("--tilt-y", "0deg");
      }}
    >
      <div className="atlas-corner top-left mono">
        FIG. 01
        <br />A FIELD OF INTERESTS
      </div>
      <div className="atlas-corner top-right" aria-hidden="true">
        +
      </div>
      <div className="atlas-grid" aria-hidden="true" />
      <div className="atlas-orbits" aria-hidden="true">
        <i />
        <i />
        <span />
      </div>
      <div className="sculpture" aria-hidden="true">
        <KineticSculpture mode={selected} />
        <div className="sculpture-spin">
          <svg viewBox="0 0 500 500" fill="none">
            {atlasPaths.map((points, i) => (
              <polyline
                points={points}
                key={i}
                stroke="currentColor"
                strokeWidth={i < 22 ? ".55" : ".65"}
                opacity={i < 22 ? ".56" : ".8"}
              />
            ))}
          </svg>
        </div>
      </div>
      <div className="atlas-center mono" aria-hidden="true">
        {["LEARN", "MAKE", "ASK", "GROW"][selected]}
        <span>↗</span>
      </div>
      <div className="atlas-controls" aria-label="Explore portfolio chapters">
        {chapters.map((chapter, i) => (
          <button
            key={chapter.id}
            className={selected === i ? "selected" : ""}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            <span className="mono">0{i + 1}</span>
            {chapter.title}
          </button>
        ))}
      </div>
      <span className="atlas-hint mono" aria-hidden="true">
        Move / drag to rotate
      </span>
      <div className="atlas-caption">
        <p>{chapters[selected].subtitle}</p>
        <Link href={`/${chapters[selected].id}`}>
          Explore {chapters[selected].title.toLowerCase()} ↗
        </Link>
      </div>
      <div className="atlas-corner bottom-right mono">
        30°02′ N<br />
        31°14′ E
      </div>
    </div>
  );
}

function ActivityEntry({
  entry,
  index,
  openAll,
  headingLevel,
}: {
  entry: Entry;
  index: number;
  openAll: boolean;
  headingLevel: 2 | 3;
}) {
  const [open, setOpen] = useState(openAll);
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <details
      className="activity-entry"
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
      id={entry.id}
    >
      <summary>
        <span className="entry-number mono">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="entry-heading">
          <span className="entry-category mono">{entry.category}</span>
          <Heading>{entry.name}</Heading>
          <span className="entry-role">{entry.role}</span>
        </div>
        <p className="entry-summary">{entry.summary}</p>
        <span className="entry-toggle" aria-hidden="true">
          ↗
        </span>
      </summary>
      <div className="entry-body">
        <div className="entry-aside mono">
          <span>{entry.period || entry.category}</span>
          {entry.href ? (
            <a href={entry.href} target="_blank" rel="noopener noreferrer">
              Visit project ↗
            </a>
          ) : null}
        </div>
        <div className="entry-prose">
          {entry.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </details>
  );
}

export function ActivityIndex({
  entries,
  variant,
  label = "activities",
}: {
  entries: Entry[];
  variant?: "school";
  label?: string;
}) {
  const [filter, setFilter] = useState("All");
  const [openAll, setOpenAll] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(entries.map((entry) => entry.category))),
  ];
  const filtered =
    filter === "All"
      ? entries
      : entries.filter((entry) => entry.category === filter);
  return (
    <div className={`activity-index ${variant || ""}`}>
      <div className="activity-toolbar">
        {variant ? (
          <span className="mono">
            School activities / {entries.length} entries
          </span>
        ) : (
          <div className="filters" aria-label={`Filter ${label}`}>
            {categories.map((category) => (
              <button
                key={category}
                aria-pressed={filter === category}
                className={filter === category ? "active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
                <span>
                  {category === "All"
                    ? entries.length
                    : entries.filter((entry) => entry.category === category)
                        .length}
                </span>
              </button>
            ))}
          </div>
        )}
        <button
          className="expand-button mono"
          aria-pressed={openAll}
          onClick={() => setOpenAll((value) => !value)}
        >
          {openAll ? "Close all" : "Open all"}
          <span aria-hidden="true">{openAll ? "−" : "+"}</span>
        </button>
      </div>
      <p className="visually-hidden" role="status">
        {filtered.length} {label} shown
      </p>
      {filtered.map((entry) => (
        <ActivityEntry
          key={`${entry.id}-${openAll}`}
          entry={entry}
          index={entries.indexOf(entry)}
          openAll={openAll}
          headingLevel={variant === "school" ? 3 : 2}
        />
      ))}
    </div>
  );
}

export function ResearchDiagram({ type }: { type: string }) {
  if (type === "cooling")
    return (
      <svg viewBox="0 0 360 300" aria-hidden="true" className="research-svg">
        <path className="diagram-axis" d="M45 30V255H330" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            className="cooling-path"
            style={{ "--i": i } as CSSProperties}
            d={`M45 40 C100 ${145 - i * 13},160 ${232 - i * 16},320 ${245 - i * 18}`}
          />
        ))}
        <text x="48" y="282">
          t
        </text>
        <text x="20" y="36">
          T
        </text>
        <circle cx="45" cy="40" r="4" fill="currentColor" />
      </svg>
    );
  if (type === "reaction")
    return (
      <svg viewBox="0 0 360 300" aria-hidden="true" className="research-svg">
        <path d="m90 100 80-45 80 45v95l-80 45-80-45Z" />
        <path d="M170 55V20M250 100l55-30M250 195l55 30M90 195l-55 30M90 100 35 70" />
        {[
          [90, 100],
          [170, 55],
          [250, 100],
          [250, 195],
          [170, 240],
          [90, 195],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r={i % 2 ? 12 : 7}
              fill={i % 2 ? "var(--accent)" : "var(--research-bg)"}
            />
          </g>
        ))}
        <circle cx="170" cy="145" r="40" strokeDasharray="2 6" />
        <path d="M151 145h38M170 126v38" />
        <text x="30" y="280">
          STRUCTURE / TRANSFORMATION
        </text>
      </svg>
    );
  if (type === "heat")
    return (
      <svg viewBox="0 0 360 300" aria-hidden="true" className="research-svg">
        {Array.from({ length: 13 }, (_, i) => (
          <path
            key={i}
            opacity={0.25 + i * 0.045}
            d={`M35 ${45 + i * 17} Q130 ${15 + i * 14} 180 ${80 + i * 8} T325 ${45 + i * 17}`}
          />
        ))}
        <path d="M35 260h290" />
        <text x="35" y="286">
          x / HEAT THROUGH A CROSS-SECTION
        </text>
      </svg>
    );
  return (
    <svg viewBox="0 0 360 300" aria-hidden="true" className="research-svg">
      {Array.from({ length: 11 }, (_, i) => (
        <ellipse
          key={i}
          cx="180"
          cy="150"
          rx={32 + i * 10}
          ry={14 + i * 8}
          transform={`rotate(${i * 8} 180 150)`}
          opacity={0.35 + i * 0.06}
        />
      ))}
      {[
        [66, 100],
        [265, 65],
        [278, 220],
        [115, 250],
      ].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x} ${y} 180 150`} strokeDasharray="3 5" />
          <circle cx={x} cy={y} r="7" fill="var(--accent)" />
        </g>
      ))}
    </svg>
  );
}
