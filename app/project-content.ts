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
        "I developed a playable card-battle prototype with 16 cards and friendly online matches, using AI-assisted development tools.",
      ],
      href: "https://clash.adessouky.com",
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
        "The project brought together our policy research and product work: we explored how an AI-powered interface could encourage users to stay involved in the thinking process.",
      ],
    },
    {
      id: "thruster",
      name: "THRUSTER",
      role: "Browser game",
      category: "Games",
      period: "Play online",
      summary:
        "Built a browser jetpack game with missions, upgrades, and saved progress, supporting both guest play and accounts.",
      paragraphs: [
        "Built a browser jetpack game with missions, upgrades, and saved progress, supporting both guest play and accounts.",
      ],
      href: "https://jet.adessouky.com",
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
        "Built a website and portal prototype to introduce the club, explain proposed engineering projects, and organise member resources.",
      paragraphs: [
        "Built a website and portal prototype to introduce the club, explain proposed engineering projects, and organise member resources.",
      ],
    },
    {
      id: "portfolio",
      name: "Personal portfolio",
      role: "Website",
      category: "Websites & tools",
      period: "Published",
      summary:
        "Built and published a portfolio bringing my research, projects, and activities into one place.",
      paragraphs: [
        "Built and published a portfolio bringing my research, projects, and activities into one place.",
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
