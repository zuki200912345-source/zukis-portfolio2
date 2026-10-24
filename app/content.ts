export type Entry = {
  id: string;
  name: string;
  role: string;
  category: string;
  categories?: string[];
  linkLabel?: string;
  period?: string;
  summary: string;
  outcomes?: string[];
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
      "Coordinated delegation forms, school communications, and committee-report preparation for BISCMUN XIV, scheduled for December 2026.",
    paragraphs: [
      "As Secretary-General, I lead the student team preparing BISCMUN XIV. My work includes coordinating with participating schools and the school administration, organising delegation information, and following up on committee preparation.",
      "For the 3–5 December 2026 conference, I have coordinated school-specific delegation forms, registration follow-up, chair-report revisions, and opening-ceremony invitations.",
    ],
    period: "2025–present",
    categories: ["Leadership", "Community"],
    outcomes: [
      "Issued school-specific delegation forms and coordinated registration follow-up.",
      "Coordinated chair-report revisions and committee preparation with the Secretariat.",
      "Prepared opening-ceremony invitations for the 3–5 December 2026 conference.",
    ],
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
      "I helped develop the plan for an air-quality monitoring project, working through what the device should measure and how we would test it.",
    ],
    categories: ["Leadership", "Science & research", "Building"],
    outcomes: [
      "Co-founded a school club and recruited and mentored younger students.",
      "Developed an air-quality monitoring project plan.",
    ],
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
    outcomes: [
      "Organised STEM Week activities, science fairs, and olympiad preparation.",
      "Coordinated workshops with teachers and external speakers.",
    ],
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
      "Launched a bilingual Egyptian-curriculum study platform with tutoring, practice tools, and a student-feedback process.",
    paragraphs: [
      "I co-founded 3alemny and lead its technical development, including the platform architecture, AI integration, database, and interface. The product brings study tools for the Egyptian curriculum into one web platform.",
      "I demonstrated the platform at sports clubs and youth centres and worked with teachers and alumni on curriculum coverage and feature feedback. I used demonstrations and a feedback survey to gather suggestions for product revisions.",
    ],
    categories: ["Building", "Leadership", "Community"],
    outcomes: [
      "Published a platform combining an AI tutor, quizzes, flashcards, mock exams, and progress reports.",
      "Created product demonstrations and gathered feedback from students and teachers.",
    ],
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
    outcomes: [
      "Developed SAT practice and drill interfaces with a product partner.",
      "Developed progress-tracking tools for tutors to review student practice.",
    ],
  },
  {
    id: "meta",
    name: "Meta",
    role: "AI policy intern",
    category: "Experience",
    period: "13 July–17 August 2026 · five weeks",
    summary:
      "Produced literature reviews, policy notes, a peer-survey analysis, and a presentation on cognitive offloading; developed Anchor with a fellow intern.",
    paragraphs: [
      "During my five-week placement with Meta’s Global Policy team, I researched young people’s use of AI with a fellow intern. We combined literature reviews with an exploratory survey of 20 peers and developed executive policy notes on cognitive offloading.",
      "I presented our findings to my supervisor and policy professionals, then revised the work in response to their feedback. Our recommendations included asking students to attempt a problem before using AI, offering hints, and keeping teachers involved.",
      "We also built Anchor, a cognitive-practice prototype, and shared the deployed version with our supervisor. It gave us a way to explore our research questions through product development.",
    ],
    categories: ["Work experience", "Science & research"],
    outcomes: [
      "Produced literature reviews and executive policy notes on youth AI use.",
      "Co-developed a survey of 20 peers and presented research-based recommendations to policy professionals.",
      "Built and shared Anchor, a cognitive-practice prototype, with a fellow intern.",
    ],
  },
  {
    id: "cooking",
    name: "Zuki Cooks",
    role: "Cook & creator",
    category: "Creative practice",
    href: "https://www.instagram.com/zuki_cooks/",
    summary:
      "Produced original dishes, food photography, and a live cooking demonstration on El Hekaya with Amr Adib.",
    paragraphs: [
      "Through Zuki Cooks, I create dishes and document the preparation and presentation through photography. I also demonstrated my cooking on El Hekaya, hosted by Amr Adib.",
      "Professional kitchen work and visits to Cairo Food Week have added to this practice. Questions about temperature, texture, and technique led me to build Zuki’s Chemistry Kitchen.",
    ],
    categories: ["Creative practice", "Science & research"],
    outcomes: [
      "Published dishes, plating, and food photography through Zuki Cooks.",
      "Demonstrated my cooking on El Hekaya with Amr Adib.",
      "Turned questions from cooking into the Chemistry Kitchen website.",
    ],
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
    outcomes: [
      "Published a website explaining food chemistry through familiar cooking techniques.",
      "Connected ingredients and processing conditions with emulsification, protein denaturation, and the Maillard reaction.",
    ],
  },
  {
    id: "karmsolar",
    name: "KarmSolar",
    role: "Technical office intern",
    category: "Experience",
    period: "July 2025",
    summary:
      "Prepared and submitted a presentation explaining KarmSolar’s four business lines during my Technical Office placement.",
    paragraphs: [
      "During my four-week KarmSolar placement, I researched the company’s four business lines and prepared a presentation for my supervisor. I explained how generation, microgrids, geographical distribution, and urban distribution fit into its energy business.",
      "My assigned analytical work also covered project performance and income statements, introducing me to the financial decisions behind energy projects.",
    ],
    categories: ["Work experience", "Science & research"],
    outcomes: [
      "Submitted a business-lines presentation to my supervisor in July 2025.",
      "Explained generation, microgrids, geographical distribution, and urban distribution.",
    ],
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
    outcomes: [
      "Synthesised dyes and used infrared spectroscopy to examine the products.",
      "Built and controlled a LEGO spectrometer.",
      "Developed and presented a group solution in an interdisciplinary Innovation Challenge.",
    ],
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
      "Prepared ingredients and plated dishes during busy service across three summers at Eatery.",
    paragraphs: [
      "I worked full-time in kitchen operations at Eatery on Egypt’s North Coast in August 2023, August 2024, and July 2025. During busy service periods, I assisted with food preparation, plating, and kitchen organisation while following hygiene and safety standards.",
    ],
    categories: ["Work experience", "Creative practice"],
    outcomes: [
      "Assisted with food preparation and plating during commercial service.",
      "Maintained kitchen organisation, hygiene, and safe working practices across three summer placements.",
    ],
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
    outcomes: [
      "Achieved Trinity College London Piano Grade 6.",
      "Continuing repertoire practice towards Grade 8.",
    ],
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
      "I built Lumi’s maths and literacy lesson interface for younger children, experimenting with colour, navigation, and visual rewards to make each activity easy to follow.",
    ],
    categories: ["Building"],
    outcomes: [
      "Built a visual maths and literacy interface for younger children.",
      "Designed lesson navigation and visual feedback for a young audience.",
    ],
  },
  {
    id: "nano",
    name: "Nano",
    role: "Developer",
    category: "Building",
    period: "In development",
    summary:
      "Configuring a local language-model setup and exploring response speed and memory use.",
    paragraphs: [
      "I am developing Nano to explore running a language model on my own computer. The project involves configuring local inference and examining how available hardware affects response speed and memory requirements.",
    ],
    categories: ["Building"],
    outcomes: [
      "Configuring local inference and comparing hardware demands.",
    ],
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
    outcomes: [
      "Prepared food packs as part of a group distribution effort for people experiencing homelessness in Egypt.",
    ],
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
    outcomes: [
      "Established a home garden with more than 15 types of fruits, vegetables, herbs, and cacti.",
      "Produced compost from household food scraps and used pH testing to guide soil preparation.",
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
    subject: "Published research · NHSJS · 21 October 2026",
    title: "A second life for coffee grounds.",
    code: "SCG",
    question:
      "How suitable are spent coffee grounds for heavy-metal remediation in water and soil?",
    method: "Systematic literature review",
    text: "I published a systematic review of 30 studies in the National High School Journal of Science on 21 October 2026. I compared five categories of coffee-ground materials, examining how preparation methods and treatment conditions affect heavy-metal removal. The review identifies promising applications and priorities for long-term field research. Sabrina Hu, a PhD candidate at the University of Cambridge, mentored the work.",
    formula: "surface → interaction → application",
    type: "surface",
    outcome:
      "A published review of 30 studies, with a comparison of five material categories and their practical limitations.",
  },
  {
    id: "maths-ia",
    subject: "Mathematics · Internal assessment",
    title: "A steak, a cross-section, a heat equation.",
    code: "MTH",
    question:
      "How can the one-dimensional heat equation be used to model heat transfer through a steak as it cooks?",
    method: "Mathematical modelling · one-dimensional heat equation",
    text: "I use the one-dimensional heat equation to model how temperature changes inside a steak as it cooks. The investigation connects position and time to heat transfer, applying partial differential equations to a question from my own cooking.",
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
    text: "I investigate how layers of bubble wrap affect the rate at which water cools. Using temperature–time measurements and exponential fitting, I compare cooling constants and examine how surface heat loss and wrap attachment affect the model.",
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
    text: "I compare orange juice with an ascorbic acid solution after controlled heating, using iodometric back titration to measure changes in iodine-reducing capacity. Comparing each sample with its initial concentration helps me examine how the mixture in orange juice affects the result.",
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
