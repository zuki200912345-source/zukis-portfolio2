export type Entry = {
  id: string;
  name: string;
  role: string;
  category: string;
  categories?: string[];
  linkLabel?: string;
  period?: string;
  summary: string;
  paragraphs: string[];
  href?: string;
};

export const subjects = [
  {
    name: "Mathematics",
    detail: "Analysis & Approaches",
    level: "HL",
    symbol: "∫",
  },
  {
    name: "Chemistry",
    detail: "",
    level: "HL",
    symbol: "C",
  },
  {
    name: "Physics",
    detail: "",
    level: "HL",
    symbol: "φ",
  },
  {
    name: "Economics",
    detail: "",
    level: "HL",
    symbol: "↗",
  },
  {
    name: "English A",
    detail: "Language & Literature",
    level: "SL",
    symbol: "Aa",
  },
  {
    name: "Arabic B",
    detail: "",
    level: "SL",
    symbol: "ع",
  },
];

export const schoolActivities: Entry[] = [
  {
    id: "biscmun",
    name: "BISC Model United Nations",
    role: "Secretary-General",
    category: "Leadership",
    summary:
      "Led a 450+ participant conference and a team of 50; coordinated with school administration and 10 other schools.",
    paragraphs: [
      "I lead BISC Model United Nations as Secretary-General. I planned and led a conference for more than 450 participants, managing a team of 50 and coordinating with our school administration and 10 other schools.",
      "I teach delegates how to research their assigned country, write position papers, and debate. I have also led our school’s delegation to conferences across Egypt.",
    ],
    period: "2025–present",
    categories: ["Leadership", "Community"],
  },
  {
    id: "engineering-club",
    name: "Engineering & Innovation Club",
    role: "Co-founder & president",
    category: "Engineering",
    period: "2026–present",
    summary:
      "Co-founded a club where younger students develop engineering projects in sustainability and technology.",
    paragraphs: [
      "I co-founded the Engineering & Innovation Club at the British International School, Cairo. I recruit and mentor younger students and help them plan practical engineering projects.",
      "Our proposed air-quality monitoring project starts with deciding what to measure and how to test a device. It is still a development project; the website’s concept images are not photographs of working hardware.",
    ],
    categories: ["Leadership", "Science & research", "Building"],
  },
  {
    id: "stem-club",
    name: "STEM Club",
    role: "President & STEM Week head",
    category: "Science outreach",
    period: "2025–present",
    summary:
      "Organised STEM Week, olympiad preparation, science fairs, and workshops with teachers and external speakers.",
    paragraphs: [
      "I lead the school’s Science, Technology, Engineering and Mathematics (STEM) Club and organise STEM Week. My work includes olympiad preparation, science fairs, and coordinating workshops with teachers and external speakers.",
    ],
    categories: ["Leadership", "Science & research", "Community"],
  },
];

export const activities: Entry[] = [
  {
    id: "3alemny",
    name: "3alemny",
    role: "Co-founder & CTO",
    category: "Building",
    period: "2025–present",
    href: "https://3alemny.app",
    summary:
      "Co-founded an Egyptian-curriculum learning platform that reached 5,000+ users by September 2026.",
    paragraphs: [
      "I co-founded 3alemny and lead its technical development. I work on the platform architecture, AI integration, database, and interface. Students can use an AI tutor, quizzes, flashcards, mock exams, and performance reports.",
      "I built a network of teachers and alumni to review curriculum coverage and test features against the exams students actually sit. I also demonstrated the platform at sports clubs and youth centres and collected feedback. By September 2026, the platform had reached more than 5,000 users.",
    ],
    categories: ["Building", "Leadership", "Community"],
  },
  {
    id: "xedu",
    name: "Xedu",
    role: "Partner & lead developer",
    category: "Building",
    period: "2026–present",
    href: "https://xedu.app",
    summary:
      "Developing SAT practice exams, focused drills, and progress tools for students and tutors.",
    paragraphs: [
      "I work with Xedu as a partner and lead developer on its SAT preparation platform. My work includes adaptive practice examinations, drills, and progress tracking that helps tutors see where students need support.",
    ],
    categories: ["Building"],
  },
  {
    id: "meta",
    name: "Meta",
    role: "AI policy intern",
    category: "Experience",
    period: "July–August 2026",
    summary:
      "Researched youth AI use and cognitive offloading; presented findings to AI, ethics, and public-policy teams.",
    paragraphs: [
      "During my internship at Meta in London, I researched how AI affects young people’s learning, memory, critical thinking, and independent decision-making. I focused on cognitive offloading: relying on technology to remember or think through tasks.",
      "I developed and presented findings to my supervisor and senior leaders across Meta’s AI, ethics, and public-policy teams. The work led me to begin Anchor, an app exploring how people can use AI while staying involved in their own thinking.",
    ],
    categories: ["Work experience", "Science & research"],
  },
  {
    id: "cooking",
    name: "Zuki Cooks",
    role: "Cook & creator",
    category: "Creative practice",
    href: "https://www.instagram.com/zuki_cooks/",
    summary:
      "Created dishes and food photography for Zuki Cooks, and demonstrated my cooking on El Hekaya with Amr Adib.",
    paragraphs: [
      "I share original dishes, plating, and food photography through Zuki Cooks. By September 2026, the account had grown to more than 3,000 followers. I also demonstrated my cooking on El Hekaya, hosted by Amr Adib.",
      "I have attended the international chefs’ meet at Cairo Food Week since 2023. Cooking also led me to build Zuki’s Chemistry Kitchen, where I explain the chemical processes behind familiar techniques.",
    ],
    categories: ["Creative practice", "Science & research"],
  },
  {
    id: "chemistry-kitchen",
    name: "Zuki’s Chemistry Kitchen",
    role: "Founder & developer",
    category: "Building",
    period: "2025–present",
    href: "https://zukischemistrykitchen.com",
    summary:
      "Built a food-science website connecting cooking techniques with emulsification, protein denaturation, and the Maillard reaction.",
    paragraphs: [
      "I created Zuki’s Chemistry Kitchen to explain what changes during cooking. I built the website and organised its explanations around ingredients, temperature, and technique, connecting observable results to the chemistry behind them.",
    ],
    categories: ["Building", "Science & research", "Creative practice"],
  },
  {
    id: "karmsolar",
    name: "KarmSolar",
    role: "Technical office intern",
    category: "Experience",
    period: "July 2025",
    summary:
      "Supported technical and economic evaluation of utility-scale and hybrid solar photovoltaic projects.",
    paragraphs: [
      "I worked in KarmSolar’s Technical Office for four weeks, supporting analysis of solar photovoltaic projects across multiple sites. I assisted with technical and economic evaluation and learned about grid integration and solar-project development workflows.",
    ],
    categories: ["Work experience", "Science & research"],
  },
  {
    id: "imperial",
    name: "Imperial Global Summer School",
    role: "Chemistry summer scholar",
    category: "Experience",
    period: "July 2026",
    summary:
      "Synthesised dyes, used infrared spectroscopy, and built and controlled a LEGO spectrometer at Imperial College London.",
    paragraphs: [
      "At Imperial College London’s Global Summer School, I studied molecular structure, bonding, and chemical analysis. Practical work included synthesising dyes, identifying functional groups with infrared spectroscopy, and building and controlling a LEGO spectrometer.",
      "I used coding and computational modelling to explore chemical systems, took part in medicinal chemistry and Chemical Kitchen activities, and developed and presented a group solution in the interdisciplinary Innovation Challenge.",
    ],
    categories: ["Science & research"],
  },
  {
    id: "dsamun",
    name: "DSAMUN",
    role: "Deputy Secretary-General",
    category: "Leadership",
    period: "2026–present",
    summary:
      "Deputy Secretary-General of an international Model United Nations conference in Greece.",
    paragraphs: [
      "I serve on the senior leadership team of DSAMUN, a THIMUN-affiliated conference in Greece. My responsibilities include committee operations and supporting the delegate experience across participating schools and countries.",
    ],
    categories: ["Leadership", "Community"],
  },
  {
    id: "eatery",
    name: "Eatery",
    role: "Kitchen operations assistant",
    category: "Experience",
    period: "Summers 2023–2025",
    summary:
      "Worked in a commercial kitchen across three summers, assisting with preparation, plating, and organisation.",
    paragraphs: [
      "I worked full-time in kitchen operations at Eatery on Egypt’s North Coast in August 2023, August 2024, and July 2025. During busy service periods, I assisted with food preparation, plating, and kitchen organisation while following hygiene and safety standards.",
    ],
    categories: ["Work experience", "Creative practice"],
  },
  {
    id: "piano",
    name: "Piano",
    role: "Pianist · Trinity College London programme",
    category: "Creative practice",
    period: "Since age six · Trinity since 2017",
    summary:
      "Playing since age six; Trinity College London Grade 6 achieved, now working towards Grade 8.",
    paragraphs: [
      "I have played piano since I was six and started the Trinity College London programme in 2017. I have achieved Grade 6 and am working towards Grade 8.",
      "My practice includes learning repertoire, working through difficult passages, and deciding how to phrase and interpret a piece.",
    ],
    categories: ["Creative practice"],
  },
  {
    id: "lumi",
    name: "Lumi",
    role: "Creator & developer",
    category: "Building",
    period: "2026",
    summary:
      "Created a visual learning interface for younger children’s maths and literacy.",
    paragraphs: [
      "I created Lumi to explore visual maths and literacy activities for younger children. I developed the lesson interface and experimented with colour, navigation, and small visual rewards. It is an interface project; I have not measured its effect on learning outcomes.",
    ],
    categories: ["Building"],
  },
  {
    id: "nano",
    name: "Nano",
    role: "Developer",
    category: "Building",
    period: "In development",
    summary:
      "An ongoing experiment with running a language model locally and comparing speed, capability, and memory use.",
    paragraphs: [
      "I am developing Nano to explore running a language model on my own computer. The project involves configuring local inference and examining how available hardware affects response speed and memory requirements.",
    ],
    categories: ["Building"],
  },
  {
    id: "community",
    name: "Food packing & community service",
    role: "Volunteer",
    category: "Community",
    summary:
      "Packed food for distribution to people experiencing homelessness in Egypt.",
    paragraphs: [
      "I volunteered in food packing for people experiencing homelessness in Egypt, helping prepare food for distribution as part of an organised group effort.",
    ],
    categories: ["Community"],
  },
  {
    id: "thimun",
    name: "THIMUN",
    role: "President",
    category: "Leadership",
    categories: ["Leadership", "Community"],
    period: "2026",
    summary:
      "President at The Hague International Model United Nations in 2026.",
    paragraphs: [
      "I served as a President at The Hague International Model United Nations (THIMUN) in 2026.",
    ],
  },
  {
    id: "gardening",
    name: "Home gardening",
    role: "Gardener",
    category: "Creative practice",
    categories: ["Creative practice", "Science & research"],
    period: "2016–present",
    summary:
      "Grew more than 15 types of fruits, vegetables, herbs, and cacti; made compost from household food scraps.",
    paragraphs: [
      "I created a garden at home and grew more than 15 types of fruits, vegetables, herbs, and cacti. I make compost and fertiliser from household food scraps, and use pH tests and home lab kits to assess soil and adapt it for different plants.",
    ],
  },
  {
    id: "table-tennis",
    name: "Table tennis",
    role: "Player",
    category: "Sport",
    categories: ["Sport"],
    period: "2019–present",
    summary:
      "Played competitively at Gezira Sporting Club from 2021 to 2023; continue to play recreationally each week.",
    paragraphs: [
      "I played competitive table tennis at Gezira Sporting Club in Cairo from 2021 to 2023. I continue to play recreationally every week.",
    ],
  },
];

export const research = [
  {
    id: "scg",
    subject: "Independent research",
    title: "A second life for coffee grounds.",
    code: "SCG",
    question:
      "How suitable are spent coffee grounds for heavy-metal remediation in water and soil?",
    method: "Systematic literature review",
    text: "A review of adsorption mechanisms, preparation methods, and testing conditions, developed with guidance from Sabrina Hu, a PhD candidate at the University of Cambridge. The work examines dissolved-metal removal in water and reduced metal bioavailability in soil, alongside the limits of comparing results across studies.",
    formula: "surface → interaction → application",
    type: "surface",
  },
  {
    id: "maths-ia",
    subject: "Mathematics · Internal assessment",
    title: "A steak, a cross-section, a heat equation.",
    code: "MTH",
    question:
      "How can the one-dimensional heat equation be used to model heat transfer through a steak as it cooks?",
    method: "Mathematical modelling · one-dimensional heat equation",
    text: "An exploration of cooking through a one-dimensional mathematical model of heat transfer. The central idea is to describe how temperature varies with position and time inside a steak, connecting a familiar kitchen process with partial differential equations.",
    formula: "∂T/∂t = α ∂²T/∂x²",
    type: "heat",
  },
  {
    id: "physics-ia",
    subject: "Physics · Internal assessment",
    title: "What does another layer change?",
    code: "PHY",
    question:
      "How does the number of bubble-wrap layers (0, 1, 2, 3, 4, 5 layers) surrounding a beaker affect the cooling constant, k, of water from 80 °C to 40 °C, determined from temperature–time measurements using Newton’s law of cooling?",
    method: "Experimental investigation · thermal modelling",
    text: "An investigation of insulation and cooling using temperature–time measurements and exponential fitting. The analysis considers the effective cooling constant of the complete setup, the constant-k assumption, and sources of uncertainty such as surface losses and wrap attachment.",
    formula: "dT/dt = −k(T − Tₐ)",
    type: "cooling",
  },
  {
    id: "chemistry-ia",
    subject: "Chemistry · Internal assessment",
    title: "Heating, juice, and what a titration measures.",
    code: "CHM",
    question:
      "How does heating time (0, 2, 4, 6, 8, 10 and 12 min) at a water bath temperature of 60.0 °C affect the concentration of iodine-reducing substances, expressed as ascorbic acid equivalents in mol dm⁻³, in Juhayna carton orange juice compared with prepared ascorbic acid solution, determined by iodometric back titration?",
    method: "Experimental investigation · iodometric back titration",
    text: "A comparison of orange juice and a simpler ascorbic acid solution under controlled heating. The scope distinguishes iodine-reducing capacity from a selective measurement of vitamin C, and compares retention relative to each sample’s initial concentration.",
    formula: "I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻",
    type: "reaction",
  },
];

export const awards = [
  {
    title: "Senior Mathematical Challenge",
    organisation: "UK Mathematics Trust",
    result: "Gold",
    year: "",
  },
  {
    title: "International Chemistry Quiz",
    organisation: "Royal Australian Chemical Institute · Senior Division",
    result: "Distinction",
    year: "2026",
  },
  {
    title: "Senior Physics Challenge",
    organisation: "British Physics Olympiad",
    result: "Silver",
    year: "2026",
  },
  {
    title: "Academic Endeavour Award",
    organisation: "BISC · Chemistry HL",
    result: "Recipient",
    year: "2026",
  },
  {
    title: "Intermediate Mathematical Challenge",
    organisation: "UK Mathematics Trust",
    result: "Silver",
    year: "2025",
  },
  {
    title: "STEM Competition",
    organisation: "Cairo American College",
    result: "First place",
    year: "",
  },
];
