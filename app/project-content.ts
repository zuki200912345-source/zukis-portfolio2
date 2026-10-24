import { activities, schoolActivities, type Entry } from "./content";

export const internships = activities.filter((entry) =>
  ["meta", "karmsolar", "eatery"].includes(entry.id),
);

export const projects: Entry[] = [
  ...activities
    .filter((entry) => entry.category === "Building")
    .map((entry) => ({
      ...entry,
      category: "Learning & AI",
      categories: ["Learning & AI"],
    })),
  ...[
    {
      id: "riftfront",
      name: "Riftfront",
      role: "Browser game project",
      category: "Games",
      period: "Playable prototype",
      summary:
        "A card-battle game with 16 playable cards and friendly online matches.",
      paragraphs: [
        "I developed Riftfront with AI-assisted development tools. The current version has 16 playable cards and friendly online matches; the larger card collection and progression systems are still in development.",
      ],
      href: "https://clash.adessouky.com",
    },
    {
      id: "slipstream",
      name: "SLIPSTREAM",
      role: "Browser racing project",
      category: "Games",
      period: "Prototype",
      summary:
        "A browser racing game with room-based multiplayer in development.",
      paragraphs: [
        "I developed SLIPSTREAM with AI-assisted development tools. The frontend is published; multiplayer currently depends on a development server and is not continuously available.",
      ],
      href: "https://car.adessouky.com",
    },
    {
      id: "anchor",
      name: "Anchor",
      role: "Collaborative app project",
      category: "Learning & AI",
      period: "Prototype · 2026",
      summary:
        "Built a cognitive-practice prototype with a fellow intern, applying questions from our Meta research to a working product.",
      outcomes: [
        "Developed an AI-powered prototype focused on cognitive practice and awareness of AI use.",
        "Shared the deployed prototype with our supervisor during the placement.",
      ],
      paragraphs: [
        "Anchor grew out of our research on cognitive offloading during the Meta internship. I worked with a fellow intern to turn the research questions into a prototype and shared a deployed version with our supervisor in August 2026.",
        "The platform is an exploratory product. Its intended benefit—supporting independent thinking while using AI—has not been established through an effectiveness study.",
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

const publishedResearch: Entry = {
  outcomes: [
    "Published a systematic review in the National High School Journal of Science.",
    "Synthesised 30 studies and distinguished five material categories, their reported performance, and practical limitations.",
  ],
  id: "coffee-research",
  name: "Spent coffee grounds research",
  role: "Author · systematic literature review",
  category: "Science & research",
  categories: ["Science & research"],
  period: "Published 21 October 2026",
  summary:
    "Published a 30-study review comparing five types of spent-coffee-ground materials for heavy-metal remediation.",
  paragraphs: [
    "I reviewed how spent coffee grounds interact with heavy metals in water and soil, examining adsorption mechanisms, preparation methods, and experimental conditions. Sabrina Hu, a PhD candidate at the University of Cambridge, mentored the research.",
    "The review was published in the National High School Journal of Science. It examines both potential applications and the limitations of comparing results from different laboratory studies.",
  ],
  href: "https://nhsjs.com/2026/how-suitable-are-spent-coffee-grounds-for-heavy-metal-remediation-in-water-and-soil-a-systematic-review-of-mechanisms-conditions-and-practical-viability/",
  linkLabel: "Read publication",
};

// One record per experience in the complete index; specialised pages reuse it.
const completeEntries = [
  ...activities,
  ...schoolActivities,
  publishedResearch,
  ...projects.filter(
    (project) => !activities.some((entry) => entry.id === project.id),
  ),
];
const activityOrder = [
  "3alemny",
  "biscmun",
  "thimun",
  "dsamun",
  "coffee-research",
  "meta",
  "chemistry-kitchen",
  "cooking",
  "engineering-club",
  "stem-club",
  "xedu",
  "karmsolar",
  "imperial",
  "eatery",
  "piano",
  "gardening",
  "table-tennis",
  "community",
];
export const allActivities: Entry[] = [
  ...activityOrder.flatMap((id) =>
    completeEntries.filter((entry) => entry.id === id),
  ),
  ...completeEntries.filter((entry) => !activityOrder.includes(entry.id)),
].map((entry) => ({ ...entry, categories: entry.categories ?? ["Building"] }));
