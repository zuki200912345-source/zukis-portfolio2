"use client";

import { useEffect, useState } from "react";
import type { Entry } from "./content";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const pages = [
  ["", "Home"],
  ["research", "Research"],
  ["projects", "Independent Projects"],
  ["education", "Education"],
  ["activities", "Activities"],
  ["awards", "Awards"],
  ["about", "About"],
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const followLegacyLink = () => {
      const hash = window.location.hash.slice(1);
      if (
        pathname === "/activities" &&
        ["3alemny", "xedu", "chemistry-kitchen", "lumi", "nano"].includes(hash)
      ) {
        router.replace(`/projects#${hash}`);
        return;
      }
      if (pathname !== "/") return;
      if (pages.some(([id]) => id && id === hash)) router.replace(`/${hash}`);
      else if (["maths-ia", "physics-ia", "chemistry-ia", "scg"].includes(hash))
        router.replace(`/research#${hash}`);
    };
    followLegacyLink();
    window.addEventListener("hashchange", followLegacyLink);
    return () => window.removeEventListener("hashchange", followLegacyLink);
  }, [pathname, router]);
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Zuki, home">
        Zuki<span>.</span>
      </Link>
      <nav aria-label="Main navigation">
        {pages.map(([id, title]) => (
          <Link
            key={id}
            href={`/${id}`}
            aria-current={pathname === `/${id}` ? "page" : undefined}
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
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
          {open ? "Close −" : "Read more +"}
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
}: {
  entries: Entry[];
  variant?: "school";
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
          <div className="filters" aria-label="Filter activities">
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
        {filtered.length} activities shown
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
