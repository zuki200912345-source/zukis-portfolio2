export type Entry = {
  id: string;
  name: string;
  role: string;
  category: string;
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
  { name: "Chemistry", detail: "", level: "HL", symbol: "C" },
  { name: "Physics", detail: "", level: "HL", symbol: "φ" },
  { name: "Economics", detail: "", level: "HL", symbol: "↗" },
  {
    name: "English A",
    detail: "Language & Literature",
    level: "SL",
    symbol: "Aa",
  },
  { name: "Arabic B", detail: "", level: "SL", symbol: "ع" },
];

export const schoolActivities: Entry[] = [
  {
    id: "biscmun",
    name: "BISCMUN",
    role: "Secretary-General",
    category: "Leadership & diplomacy",
    summary:
      "Helping students turn research and debate into a conference of their own.",
    paragraphs: [
      "As Secretary-General of BISCMUN, I lead the student team organising our school's Model United Nations conference. The work includes coordinating with school administration and participating schools, supporting committee preparation, and helping the different parts of the conference function together. I also teach delegates how to research an issue, write a position paper, debate, and conduct themselves during a conference. Those responsibilities connect the academic side of MUN with the practical work of bringing people together.",
      "My involvement extends beyond the conference itself to supporting the school's participation in other MUN events in Egypt. I value the preparation behind a good debate: understanding the position someone represents, checking the evidence, and deciding how to communicate a proposal clearly. Leading a conference gives me responsibility for creating the conditions in which other students can practise those skills.",
    ],
  },
  {
    id: "engineering-club",
    name: "Engineering & Innovation Club",
    role: "Co-founder & president",
    category: "Engineering",
    period: "2026–present",
    summary:
      "A space for younger students to turn a technical question into a project.",
    paragraphs: [
      "I co-founded the Engineering & Innovation Club at BISC to give students a place to work on engineering and technology projects together. My role includes recruiting students, supporting younger year groups, and helping shape projects around practical questions in sustainability and design. One proposed direction is an air-quality monitoring device and a wider local sensing project. The work begins with deciding what a device should measure, why those measurements would be useful, and how students could develop the project responsibly.",
      "I am interested in the decisions that come before a working prototype: choosing a manageable problem, dividing responsibilities, and explaining technical ideas to people with different levels of experience. The club provides a setting for that process. Its purpose is to help students build confidence through hands-on work while learning to distinguish a promising concept from a tested result.",
    ],
  },
  {
    id: "stem-club",
    name: "STEM Club",
    role: "President & STEM Week head",
    category: "Science outreach",
    period: "2025–present",
    summary:
      "Making science visible beyond the classroom through events, workshops, and unfamiliar problems.",
    paragraphs: [
      "Through the STEM Club, I have helped organise STEM Week, olympiad preparation, and science fairs at school. I coordinate with teachers and external speakers to support workshops and give students opportunities to encounter science beyond their regular lessons. The role combines an interest in scientific ideas with the practical organisation needed to make an event useful to the students attending it. A workshop needs a clear purpose, suitable content, and a format that encourages people to participate.",
      "I particularly enjoy the connection between classroom learning and problems that do not arrive with a familiar method attached. Olympiad preparation offers one version of that experience, while science fairs and workshops give students room to explore their own questions. Helping organise these activities allows me to contribute to the school's scientific life and support students whose interests may be different from my own.",
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
      "Building study tools around the Egyptian curriculum and the students who use them.",
    paragraphs: [
      "I co-founded 3alemny, an Arabic-English learning platform for students following the Egyptian national curriculum, and lead its technical development. The platform brings together an AI tutor, practice questions, flashcards, mock examinations, and progress tools. My work covers the connections between those features: how a student accesses an account, asks a question, practises a topic, and returns to continue learning. I also manage the team contributing to the product and translate feedback into development priorities.",
      "The project involves work away from the interface as well. I have used demonstrations and conversations with students and teachers to understand how the platform fits their actual study routines. Building for a specific curriculum makes those details matter. The questions students practise and the feedback they receive need to reflect the examinations they prepare for. 3alemny is where I have spent the most time connecting product decisions with the people affected by them.",
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
      "Developing SAT preparation around focused practice and a clearer view of progress.",
    paragraphs: [
      "I work with Xedu on the development of an SAT preparation platform, bringing my experience as a student to the design of practice tools. The work includes adaptive practice examinations and drills, alongside progress tracking that helps tutors understand how students are doing. My role connects the structure of the product with the preparation process it is meant to support. A useful system needs to make a student's next step understandable and give teachers information they can act on.",
      "This collaboration has given me another perspective on education technology. 3alemny is built around the Egyptian curriculum, while SAT preparation has a different assessment format and learning rhythm. Working across both encourages me to examine which design decisions are specific to one examination and which problems recur across learning products. It also gives me experience developing a product with a partner and responding to the needs of students and educators together.",
    ],
  },
  {
    id: "meta",
    name: "Meta",
    role: "AI policy intern",
    category: "Experience",
    period: "Summer 2026",
    summary:
      "Researching how young people use AI, and when assistance becomes cognitive offloading.",
    paragraphs: [
      "During my internship at Meta in London, I researched young people's use of artificial intelligence, with particular attention to cognitive offloading. I examined how relying on technology to remember, reason, or complete tasks might affect learning and independent decision-making. My work included literature reviews, policy notes, and a peer survey. I presented findings to policy professionals and revised my written work in response to feedback, learning how research is shaped for an audience making practical decisions.",
      "The experience also led to Anchor, an application exploring how people can use AI while remaining involved in their own thinking. That question matters to me as someone who builds AI-based learning tools. It pushed me to consider what happens after an answer appears on screen: whether the user understands the reasoning, can question it, and can still approach a similar problem independently.",
    ],
  },
  {
    id: "cooking",
    name: "Zuki Cooks",
    role: "Cook & creator",
    category: "Creative practice",
    href: "https://www.instagram.com/zuki_cooks/",
    summary:
      "Original dishes, food photography, and a long-running curiosity about what happens in a kitchen.",
    paragraphs: [
      "Cooking is both a creative practice and a source of scientific questions for me. Through Zuki Cooks, I share original dishes, plating, and food photography with an audience beyond my own kitchen. The work includes deciding how a dish should taste and look, preparing it, and finding a way to communicate it visually. I have also demonstrated my cooking on El Hekaya with Amr Adib on Egyptian television, bringing an activity I practise personally into a very different public setting.",
      "My interest in cooking extends to professional kitchens and the chemistry of food. Changes in temperature, timing, and method can alter a result in ways that are immediately visible. That connection has shaped Zuki's Chemistry Kitchen and my academic interest in materials and processes. Cooking gives me a place to work with those questions while continuing to make something intended to be enjoyed.",
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
      "Following a cooking technique down to the molecular changes that make it work.",
    paragraphs: [
      "I created Zuki's Chemistry Kitchen to explain familiar cooking processes through the chemistry behind them. The platform connects ingredients, temperature, and technique with changes such as emulsification, protein denaturation, and the Maillard reaction. My role includes building the web experience and structuring the explanations so that a reader can move from an observable result to the mechanism that helps explain it. The project draws directly on my interests as a chemistry student and home cook.",
      "I am especially interested in how processing conditions change the structure and behaviour of a mixture. Small differences in a method can produce noticeable differences in a finished dish. Explaining those differences requires care about what a model can establish and which variables are being controlled. The platform gives me a way to practise communicating scientific ideas through examples a reader can recognise from everyday life.",
    ],
  },
  {
    id: "karmsolar",
    name: "KarmSolar",
    role: "Technical office intern",
    category: "Experience",
    period: "July 2025",
    summary:
      "Looking at photovoltaic performance as part of a real engineering system.",
    paragraphs: [
      "During a four-week Technical Office internship at KarmSolar, I supported the analysis and evaluation of solar photovoltaic projects. I looked at how conditions such as temperature and panel angle affect expected output and gained exposure to the technical and economic considerations involved in solar power plants. The work placed ideas from physics in a professional setting where a design decision has consequences for a larger system. It also introduced me to the workflows used in engineering project development.",
      "Comparing different configurations made me think about the relationship between efficiency, durability, and performance over time. A change that improves one part of a system may introduce a different constraint elsewhere. That question connects with my interest in materials science and process design: understanding a material's properties is part of deciding how it can be used reliably in practice. The internship gave that interest a concrete engineering context.",
    ],
  },
  {
    id: "imperial",
    name: "Imperial Global Summer School",
    role: "Chemistry summer scholar",
    category: "Experience",
    period: "July 2025",
    summary:
      "From synthesising a material to examining its structure and properties.",
    paragraphs: [
      "At Imperial College London's Global Summer School, I studied chemistry through practical and interdisciplinary activities. I synthesised dyes and used infrared spectroscopy to identify functional groups in the products. The programme also included molecular structure, bonding, computational modelling, and applied chemistry. Building and controlling a LEGO spectrometer provided another way to connect an instrument's construction with the data it produces. These activities broadened the settings in which I could use ideas from my school chemistry course.",
      "I also worked on a group solution in an interdisciplinary Innovation Challenge and encountered connections between chemistry, medicine, and gastronomy. Moving between synthesis and analysis was especially valuable. Producing a material raises further questions about what it contains, how it behaves, and whether it suits its intended use. That sequence helped clarify why I want to keep studying the relationship between molecular interactions and useful materials.",
    ],
  },
  {
    id: "dsamun",
    name: "DSAMUN",
    role: "Deputy Secretary-General",
    category: "Leadership",
    period: "2026",
    summary:
      "Supporting the organisation and committee work of an international MUN conference in Greece.",
    paragraphs: [
      "As Deputy Secretary-General at DSAMUN, a THIMUN-affiliated conference in Greece, I contribute to the senior leadership team supporting committee operations and the delegate experience. The role builds on my involvement in school MUN while placing it in an international setting. It involves thinking about how different committees fit within one conference and how the organisation behind them supports substantive debate. Working with people from different schools and countries adds another dimension to that responsibility.",
      "MUN has given me opportunities to practise research, public speaking, and negotiation, but leadership also requires attention to the work that happens outside a debate. Committee preparation and clear coordination influence whether delegates can participate effectively. My roles at DSAMUN and BISCMUN allow me to approach the same activity from different scales, learning how to support other students while remaining accountable for the practical details of a conference.",
    ],
  },
  {
    id: "eatery",
    name: "Eatery",
    role: "Kitchen operations assistant",
    category: "Experience",
    period: "Summers 2023–2025",
    summary:
      "Working through the pace, preparation, and discipline of a professional kitchen.",
    paragraphs: [
      "I worked in kitchen operations at Eatery on Egypt's North Coast across three summers, assisting with food preparation, plating, and kitchen organisation. The role involved full-time work during busy service periods, when tasks need to be completed in coordination with the rest of the kitchen. Maintaining hygiene and safety standards was part of the everyday responsibility. The experience gave me a view of cooking as organised work carried out by a team under time constraints.",
      "A professional kitchen adds demands that are less visible when cooking at home. Preparation affects what is possible during service, and a finished plate depends on work shared across different people. That experience has influenced my own cooking and my interest in process control. It also gives me a practical reference point when I think about how small changes in a method can affect consistency and the final result.",
    ],
  },
  {
    id: "piano",
    name: "Piano",
    role: "Pianist · Trinity College London programme",
    category: "Creative practice",
    period: "2017–present",
    summary:
      "A sustained practice in listening, interpretation, and returning to difficult passages.",
    paragraphs: [
      "I have studied piano since 2017 through the Trinity College London programme. It is a continuing activity alongside my academic studies, research, and technology projects. Working on a piece involves reading its structure, listening carefully to the sound, and making decisions about how to express a phrase. Progress often comes from returning to a short passage and paying attention to something that was easy to miss in a complete performance. The process asks for both concentration and patience.",
      "I value having an activity in which the result is heard rather than explained. Piano gives me a different way to engage with structure and interpretation, and a reason to practise without needing a new project at the end of every session. It remains part of my life as a musician, with its own demands and interests alongside the scientific and technical work represented elsewhere on this site.",
    ],
  },
  {
    id: "lumi",
    name: "Lumi",
    role: "Creator & developer",
    category: "Building",
    period: "2026",
    summary:
      "Exploring a calmer visual environment for children's maths and literacy.",
    paragraphs: [
      "Lumi is a learning product I created around visual maths and literacy activities for younger children. The project explores how an educational interface can be approachable and playful while giving a learner a clear structure. My work focuses on the relationship between the lesson, its visual presentation, and the interactions used to practise it. It is a different audience from the older students using my other education projects, which makes the design decisions useful to examine on their own terms.",
      "I am interested in how much information a screen asks a child to process and whether a playful element helps them concentrate on the activity. The project gave me room to consider restrained colour, navigation, and small visual rewards as part of a learning experience. Lumi represents an exploration of those ideas through a working interface, rather than a claim about measured educational outcomes.",
    ],
  },
  {
    id: "nano",
    name: "Nano",
    role: "Developer",
    category: "Building",
    period: "In development",
    summary:
      "Investigating what changes when a language model runs on my own computer.",
    paragraphs: [
      "Nano is my exploration of running a language model locally on my own computer. The project looks at what changes when inference depends on the hardware available to me rather than a hosted service. It involves configuring a local model and considering the relationship between capability, response speed, and memory use. Those constraints make the implementation a useful way to examine a technology I also encounter through online products and AI integrations.",
      "The project remains in development. I am interested in the practical trade-offs of a local setup, including how much computing capacity a model needs and what makes an interface useful in everyday use. Nano gives me a place to work through those questions directly. It complements my education product work by shifting attention from the application around a model to the conditions under which the model itself runs.",
    ],
  },
  {
    id: "community",
    name: "Food packing & community service",
    role: "Volunteer",
    category: "Community",
    summary:
      "Contributing time to preparing food for people experiencing homelessness in Egypt.",
    paragraphs: [
      "My community service has included food packing for people experiencing homelessness in Egypt. This is a practical contribution that depends on people giving time to a shared task. It sits alongside the more public parts of my work, including leadership and creating online products, but is valuable to me as a form of direct participation. The work is focused on preparing food that can be distributed to people who need it.",
      "I include this activity because a personal website should also reflect responsibilities that do not become a new platform or a research project. Taking part in a collective effort provides a different perspective on contribution. It asks me to work on the task in front of me and recognise how individual effort fits into something organised by others. That experience forms part of my understanding of community alongside the students and collaborators I work with elsewhere.",
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
    title: "Academic Endeavour Award",
    organisation: "BISC · Chemistry HL",
    result: "Recipient",
    year: "2026",
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
