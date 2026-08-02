const projects = [
  {
    name: "3alemny",
    category: "Education technology",
    year: "2025–present",
    role: "Co-founder & CTO",
    summary: "A bilingual learning platform built for students following the Egyptian national curriculum.",
    description: "3alemny brings lessons, practice questions, flashcards, mock exams, past papers, study planning, and Zaky—the platform’s AI tutor—into one place. I co-founded the company, lead its technical development, and manage the team building the product.",
    evidence: ["5,000+ registered users", "2,000+ monthly active users", "Led a 10-person team"],
    tech: "Supabase, Google OAuth, AI APIs, bilingual web product development",
    challenge: "The main challenge was turning a broad collection of study tools into one usable platform for Arabic- and English-speaking students. I led the integration of the tutor, learning tools, accounts, and progress features into a consistent product.",
    href: "https://3alemny.app",
    mark: "steps",
  },
  {
    name: "Zuki Cooks",
    category: "Food & media",
    year: "2025–present",
    role: "Creator",
    summary: "My cooking portfolio and the home of @zuki_cooks.",
    description: "The site presents my original dishes and approach to plating without turning the work into a generic recipe blog. It also supports my cookbook waitlist, newsletter sign-ups, and direct contact with people who follow my cooking.",
    evidence: ["2,000+ Instagram followers", "Original food photography", "Cookbook and newsletter sign-ups"],
    tech: "Responsive web design, image-led content, signup databases",
    challenge: "The site had to make the food the focus while still giving the project a useful structure beyond a social-media feed. I separated the visual portfolio from the cookbook and newsletter systems.",
    href: "https://zukicooks.com",
    mark: "bowl",
  },
  {
    name: "Zuki’s Chemistry Kitchen",
    category: "Chemistry & education",
    year: "2026–present",
    role: "Founder & developer",
    summary: "A food-science platform that explains the chemistry behind cooking.",
    description: "I built the resource I wanted as a chemistry student and serious home cook: recipes, kitchen experiments, reaction pathways, and concept pages that connect techniques such as fermentation, emulsification, browning, and heat transfer to the chemistry behind them.",
    evidence: ["300+ chemistry-linked recipes", "Reaction pathway explorer", "Original experiments and explanations"],
    tech: "Interactive web content, food-science research, chemistry communication",
    challenge: "The difficult part is keeping the science rigorous without writing like a textbook. Each page starts with a real kitchen transformation and then explains the mechanism, variables, and practical consequence.",
    href: "https://zukischemistrykitchen.com",
    mark: "flask",
  },
  {
    name: "Lumi",
    category: "Learning product",
    year: "2026",
    role: "Creator & developer",
    summary: "A calm visual environment for children learning maths and literacy.",
    description: "Lumi explores how a digital learning product can feel focused and approachable rather than noisy. Its visual lessons and playful interactions are designed around younger learners while preserving a clear structure for practice.",
    evidence: ["Maths and literacy focus", "Responsive interface", "Visual lesson system"],
    tech: "TypeScript, responsive interface design, interactive learning flows",
    challenge: "The design problem was balancing playfulness with concentration. I used restrained colour, simple navigation, and small visual rewards instead of filling the interface with distractions.",
    href: "https://lumi-learning-meadow.zuki2009.chatgpt.site",
    mark: "sun",
  },
  {
    name: "Nano",
    category: "Local AI",
    year: "In progress",
    role: "Developer",
    summary: "A language model configured to run locally on my computer.",
    description: "Nano is my hands-on exploration of local AI: running a model on my own hardware instead of relying on a hosted model for every request. The project is teaching me how model performance, privacy, latency, and computer resources interact in a real local setup.",
    evidence: ["Runs locally", "No hosted inference required", "Active development"],
    tech: "Local model runtime, on-device inference, model configuration",
    challenge: "Local models are constrained by the machine running them. The work is centred on finding a useful balance between model capability, response speed, memory use, and a practical interface.",
    status: "In progress",
    mark: "blocks",
  },
  {
    name: "XeduSAT",
    category: "Education technology",
    year: "In progress",
    role: "Product collaborator",
    summary: "An SAT preparation platform being built in collaboration with xedu.app.",
    description: "XeduSAT is a focused SAT preparation product I am developing with xedu.app. The collaboration combines my experience as a recent SAT student with Xedu’s education platform work. The public product and its final feature set are still under development.",
    evidence: ["Built with xedu.app", "SAT-focused product", "Active development"],
    tech: "Education product design, SAT content structure, web platform development",
    challenge: "The goal is to build around how students actually prepare rather than reproduce a digital question bank. We are shaping the product around focused practice and a clearer preparation workflow.",
    status: "In progress",
    mark: "target",
  },
];

const experience = [
  {
    role: "Co-founder & Chief Technology Officer",
    organisation: "3alemny",
    place: "Cairo, Egypt",
    period: "2025–present",
    points: [
      "Lead the technical development of a bilingual education platform serving 5,000+ registered users and 2,000+ monthly active users.",
      "Manage a 10-person team building the AI tutor, study tools, user accounts, and learning experience.",
      "Translate feedback from students, teachers, and school demonstrations into product changes.",
    ],
  },
  {
    role: "Technical Office Intern",
    organisation: "KarmSolar",
    place: "Cairo, Egypt",
    period: "Summers 2023–2025",
    points: [
      "Worked alongside engineers in a commercial solar-energy company across three summers.",
      "Gained practical exposure to technical-office work, renewable-energy projects, and professional engineering workflows.",
    ],
  },
  {
    role: "Kitchen Assistant",
    organisation: "Eatery",
    place: "Cairo, Egypt",
    period: "Summers 2023–2025",
    points: [
      "Worked in a professional kitchen environment across three summers.",
      "The experience shaped both Zuki Cooks and my interest in explaining cooking through chemistry.",
    ],
  },
];

function ProjectMark({ type }: { type: string }) {
  return <span className={`project-mark ${type}`} aria-hidden="true"><i /><b /></span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top">Abdallah El Dessouky</a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Student · Developer · Builder</p>
          <h1>Abdallah<br /><span>“Zuki”</span><br />El Dessouky</h1>
          <p className="intro">I build education products, run a local AI model, and use chemistry to explain what happens in the kitchen. I’m currently open to technical and product internships.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">View my work <span>→</span></a>
            <a className="text-button" href="mailto:abdallaheldessouky09@gmail.com?subject=Internship%20opportunity">Discuss an internship ↗</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="blue-square" /><span className="stripe-field" /><span className="dot-field" />
          <span className="orbit"><i /></span><span className="blue-orb" /><span className="stair" /><span className="outline-box" />
        </div>
      </section>

      <section className="proof" aria-label="Selected results">
        <div><strong>5,000+</strong><span>3alemny users</span></div>
        <div><strong>2,000+</strong><span>monthly active users</span></div>
        <div><strong>10</strong><span>people led</span></div>
        <div><strong>6</strong><span>web and AI projects</span></div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2 id="projects-title">Projects</h2></div>
          <p>What I built, what I contributed, and what I learned.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-main">
                <div className="project-meta"><span>{project.category}</span><em>{project.year}</em></div>
                <h3>{project.name}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-summary">{project.summary}</p>
                <div className="evidence-row">{project.evidence.map(item => <span key={item}>{item}</span>)}</div>
                <details>
                  <summary>Read the case study <span>+</span></summary>
                  <div className="case-study">
                    <div><h4>What it is</h4><p>{project.description}</p></div>
                    <div><h4>Technical work</h4><p>{project.tech}</p></div>
                    <div><h4>Challenge</h4><p>{project.challenge}</p></div>
                  </div>
                </details>
                {project.href ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Visit live project ↗</a> : <span className="project-status">{project.status}</span>}
              </div>
              <ProjectMark type={project.mark} />
            </article>
          ))}
        </div>
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="section-heading light">
          <div><p className="eyebrow">Experience</p><h2 id="experience-title">Where I’ve worked</h2></div>
          <p>Work that shaped how I build and think.</p>
        </div>
        <div className="timeline">
          {experience.map(item => (
            <article className="timeline-item" key={item.role + item.organisation}>
              <div className="timeline-date">{item.period}</div>
              <div>
                <h3>{item.role}</h3>
                <p className="organisation">{item.organisation} · {item.place}</p>
                <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-contact" id="about">
        <div><p className="eyebrow">About</p><h2>Science, software, and useful products.</h2></div>
        <div className="about-copy">
          <p>I’m an IB student at the British International School in Cairo studying Mathematics, Chemistry, Physics, and Economics at Higher Level. I’m interested in materials science, engineering, and the ways software can make difficult ideas easier to understand.</p>
          <p>My strongest work sits between fields: an education platform informed by students, a chemistry platform built from cooking, and technical projects that move AI from an online service onto my own computer.</p>
          <div className="skills">
            <span>Product development</span><span>AI integration</span><span>Supabase</span><span>Technical leadership</span><span>Chemistry communication</span><span>Research</span>
          </div>
        </div>
      </section>

      <section className="opportunity">
        <p className="eyebrow">Open to opportunities</p>
        <h2>I’m looking for work where I can build, learn quickly, and contribute to a real product.</h2>
        <p>Technical, product, engineering, education technology, or applied-AI internships in Cairo or remote.</p>
        <a className="primary-button" href="mailto:abdallaheldessouky09@gmail.com?subject=Internship%20opportunity">Email me <span>→</span></a>
      </section>

      <footer id="contact">
        <div><p className="eyebrow">Contact</p><h2>Let’s talk.</h2></div>
        <div className="contact-links">
          <a href="mailto:abdallaheldessouky09@gmail.com">abdallaheldessouky09@gmail.com ↗</a>
          <a href="tel:+201000959992">+20 100 095 9992 ↗</a>
        </div>
        <p className="copyright">© 2026 Abdallah El Dessouky</p>
      </footer>
    </main>
  );
}
