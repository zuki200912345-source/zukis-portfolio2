import { activities, type Entry } from "./content";

export const internships = activities.filter((entry) =>
  ["meta", "karmsolar"].includes(entry.id),
);

export const projects: Entry[] = [
  ...activities
    .filter((entry) => entry.category === "Building")
    .map((entry) => ({ ...entry, category: "Learning & AI" })),
  ...[
    {
      id: "anchor",
      name: "Anchor",
      role: "App project",
      category: "Learning & AI",
      period: "Prototype",
      summary:
        "An app exploring how people can use AI while remaining involved in their own thinking, developed from my research into cognitive offloading.",
      paragraphs: [
        "An app exploring how people can use AI while remaining involved in their own thinking, developed from my research into cognitive offloading.",
      ],
    },
    {
      id: "thruster",
      name: "THRUSTER",
      role: "Browser game",
      category: "Games",
      period: "Play online",
      summary:
        "A jetpack game with missions, upgrades, different environments, and saved progress. Players can start as a guest or use an account.",
      paragraphs: [
        "A jetpack game with missions, upgrades, different environments, and saved progress. Players can start as a guest or use an account.",
      ],
      href: "https://jet.adessouky.com",
    },
    {
      id: "fortday",
      name: "Fortday",
      role: "Multiplayer game project",
      category: "Games",
      period: "In development",
      summary:
        "A browser game combining third-person movement, combat, and building. Multiplayer and the game world are still being developed and tested.",
      paragraphs: [
        "A browser game combining third-person movement, combat, and building. Multiplayer and the game world are still being developed and tested.",
      ],
    },
    {
      id: "texas-holdem",
      name: "Texas Hold’em",
      role: "Browser game",
      category: "Games",
      period: "Private demo",
      summary:
        "A single-player card game against three computer opponents, using play-money chips. The demo is private.",
      paragraphs: [
        "A single-player card game against three computer opponents, using play-money chips. The demo is private.",
      ],
    },
    {
      id: "pocket-cloud",
      name: "Pocket Cloud",
      role: "Workspace platform",
      category: "Websites & tools",
      period: "Web app",
      summary:
        "A workspace for files and small apps, with accounts, sharing, version history, and a local-first core.",
      paragraphs: [
        "A workspace for files and small apps, with accounts, sharing, version history, and a local-first core.",
      ],
      href: "https://pocket-cloud.adessouky.com",
    },
    {
      id: "bisc-eic",
      name: "BISC Engineering & Innovation Club",
      role: "Club website & portal",
      category: "Websites & tools",
      period: "Private demo",
      summary:
        "A website introducing the club and its proposed engineering projects, with a members’ portal for club resources. The demo is private.",
      paragraphs: [
        "A website introducing the club and its proposed engineering projects, with a members’ portal for club resources. The demo is private.",
      ],
    },
    {
      id: "portfolio",
      name: "Personal portfolio",
      role: "Website",
      category: "Websites & tools",
      period: "Published",
      summary:
        "This website brings together my research, education, projects, and activities.",
      paragraphs: [
        "This website brings together my research, education, projects, and activities.",
      ],
      href: "https://adessouky.com",
    },
  ],
];
