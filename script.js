/* ============================================================
   Matanel Levavi - Portfolio logic
   - Bilingual (he / en) with RTL/LTR switch + persistence
   - Light / dark theme with persistence
   - Data-driven skills, projects and timeline
   - Scroll reveal, rotating role, mobile nav, active link
   ============================================================ */

/* ---------------- i18n dictionary ---------------- */
const I18N = {
  he: {
    brandName: "מתנאל לבבי",
    navAbout: "אודות", navSkills: "כישורים", navProjects: "פרויקטים",
    navJourney: "מסלול", navContact: "צור קשר",

    heroBadge: "פנוי לפרויקטים והזדמנויות",
    heroHi: "היי, אני",
    heroRolePrefix: "אני בונה",
    heroLead: "סטודנט למדעי המחשב באוניברסיטת אריאל. מתכנן תוכנה נקייה ומודולרית ב-Java, ב-Python וב-C/C++ - ממנועי דחיסה ברמה נמוכה ועד אפליקציות Full-Stack מודרניות. ממושמע, לומד מהר, ובנוי לעבודת צוות.",
    heroSeeWork: "לעבודות שלי", heroHire: "בוא נעבוד יחד", heroCv: "הורדת קורות חיים",
    statProjects: "פרויקטים נבחרים", statLangs: "שפות בשליטה", statGrad: "תואר ראשון צפוי",

    aboutKicker: "01 · אודות", aboutTitle: "הרבה מעבר לקוד",
    aboutP1: "סטודנט מוטיבציוני למדעי המחשב עם בסיס חזק ב-Java, ב-Python וב-C, ותשוקה אמיתית לכתיבת קוד נקי, יעיל וקל לתחזוקה. לומד מהר, מסיים מה שמתחיל, ושם לב לפרטים הקטנים.",
    aboutP2: "לפני האוניברסיטה שירתתי כלוחם ומפקד צוות בחטיבת גולני, ולאחר מכן גויסתי למילואים במלחמת חרבות ברזל. הרקע הזה עיצב את הדרך שבה אני עובד: רגוע תחת לחץ, אחראי, ואפשר לסמוך עליי כשזה חשוב.",
    aboutP3: "במקביל ללימודים אני חונך נוער עם מוגבלויות והובלתי תוכניות חינוכיות - אני באמת נהנה לעבוד עם אנשים, לא רק עם מכונות.",
    trait1Title: "ממושמע", trait1Text: "ניהול עצמי חזק ועמידה במשימות, גם תחת לחץ.",
    trait2Title: "אנליטי", trait2Text: "פתרון בעיות מובנה - מאלגוריתמים ועד ארכיטקטורה.",
    trait3Title: "לומד מהר", trait3Text: "פרואקטיבי, סקרן, ומאמץ טכנולוגיות חדשות במהירות.",
    trait4Title: "שחקן צוות", trait4Text: "מנהיגות ושיתוף פעולה - מהשטח ועד הכיתה.",

    skillsKicker: "02 · כישורים", skillsTitle: "כלי העבודה",
    skillsLangs: "שפות", skillsFrontend: "Web ו-Frontend",
    skillsBackend: "Backend ונתונים", skillsConcepts: "מושגים וכלים",
    skillsAI: "AI ו-LLM",

    projKicker: "03 · פרויקטים", projTitle: "דברים שבניתי",
    projSub: "מבחר עבודות אקדמיות ואישיות. כל פרויקט מקושר לקוד המקור ב-GitHub.",
    projAll: "לכל המאגרים ב-GitHub ←", projCode: "קוד", projLive: "לאתר החי",

    journeyKicker: "04 · מסלול", journeyTitle: "השכלה, שירות וניסיון",

    contactKicker: "05 · צור קשר", contactTitle: "יש לך פרויקט בראש?",
    contactLead: "פנוי לפרויקטים, לשיתופי פעולה ולמשרות. ספר לי מה אתה צריך - אחזור אליך מהר.",
    contactEmail: "שלח לי הצעה במייל",
    footerBuilt: "עוצב ונבנה בקפידה",
  },
  en: {
    brandName: "Matanel Levavi",
    navAbout: "About", navSkills: "Skills", navProjects: "Projects",
    navJourney: "Journey", navContact: "Contact",

    heroBadge: "Open to projects & opportunities",
    heroHi: "Hi, I'm",
    heroRolePrefix: "I build",
    heroLead: "Computer Science student at Ariel University. I design clean, modular software in Java, Python and C/C++ - from low-level compression engines to modern full-stack apps. Disciplined, fast-learning, and built for teamwork.",
    heroSeeWork: "See my work", heroHire: "Work with me", heroCv: "Download CV",
    statProjects: "Featured projects", statLangs: "Languages mastered", statGrad: "B.Sc. expected",

    aboutKicker: "01 · About", aboutTitle: "More than code",
    aboutP1: "I'm a motivated Computer Science student with a strong foundation in Java, Python and C, and a real passion for writing clean, efficient, maintainable code. I learn fast, I ship, and I care about getting the details right.",
    aboutP2: "Before university I served as a combat soldier and team leader in the Golani Brigade, and was later called up for reserve duty during the Iron Swords war. That background shaped how I work: calm under pressure, responsible, and dependable when it matters.",
    aboutP3: "Alongside my studies I mentor youth with disabilities and have led educational programs - I genuinely enjoy working with people, not just machines.",
    trait1Title: "Disciplined", trait1Text: "Strong self-management and follow-through, even under pressure.",
    trait2Title: "Analytical", trait2Text: "Structured problem-solving from algorithms to architecture.",
    trait3Title: "Fast learner", trait3Text: "Proactive, curious, and quick to pick up new tech.",
    trait4Title: "Team player", trait4Text: "Leadership and collaboration from the field to the classroom.",

    skillsKicker: "02 · Skills", skillsTitle: "Tools of the trade",
    skillsLangs: "Languages", skillsFrontend: "Web & Frontend",
    skillsBackend: "Backend & Data", skillsConcepts: "Concepts & Tools",
    skillsAI: "AI & LLM",

    projKicker: "03 · Projects", projTitle: "Things I've built",
    projSub: "A selection of academic and personal work. Every project links to its source on GitHub.",
    projAll: "See all repositories on GitHub →", projCode: "Code", projLive: "Live app",

    journeyKicker: "04 · Journey", journeyTitle: "Education, service & experience",

    contactKicker: "05 · Contact", contactTitle: "Have a project in mind?",
    contactLead: "I'm open to freelance projects, collaborations and full-time opportunities. Tell me what you need - I'll get back to you quickly.",
    contactEmail: "Email me a proposal",
    footerBuilt: "Designed & built with care",
  },
};

/* ---------------- Rotating roles ---------------- */
const ROLES = {
  he: ["מנועי דחיסה", "אפליקציות Full-Stack", "כלים מבוססי AI", "פרוטוקולי רשת", "פתרונות אלגוריתמיים"],
  en: ["compression engines", "full-stack apps", "AI-powered tools", "network protocols", "algorithmic solutions"],
};

/* ---------------- Skills ---------------- */
const SKILLS = {
  langs:    ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL"],
  front:    ["React", "Next.js", "React Native (Expo)", "Vite", "Tailwind CSS", "HTML5"],
  back:     ["FastAPI", "PostgreSQL", "SQLAlchemy", "Firebase", "Supabase", "NoSQL", "Pandas", "NumPy", "Sockets"],
  concepts: ["Data Structures", "Algorithms", "OOP", "Design Patterns", "Git", "Docker", "GitHub Actions", "Modular Design"],
  ai:       ["Google Gemini", "Prompt Engineering", "RAG", "Model Context Protocol (MCP)", "LangGraph", "Agentic Workflows"],
};

/* ---------------- Projects ---------------- */
const PROJECTS = [
  {
    icon: "🗜️", featured: true,
    flag: { he: "פרויקט גמר מצטיין", en: "Outstanding Final Project" },
    title: "Rygrans - Adaptive rANS Compression + Encryption",
    desc: {
      he: "מנוע דחיסה ברמת ביט (rANS) אדפטיבי עם הצפנה משולבת בתוך אותו תהליך: טבלת ההסתברויות מתעדכנת רק כאשר הביט המתאים במפתח הסודי שווה 1, כך שדחיסה והצפנה חולקות בדיוק אותו מנגנון, בלי שכבה נפרדת. נבנה מאפס ב-C++17, נבחר כפרויקט גמר מצטיין והוצג בכנס הפרויקטים הגמר של המחלקה למדעי המחשב באוניברסיטת אריאל, בהנחיית פרופ' דנה שפירא, דיקנית המחלקה. נבדק מול Huffman, Arithmetic Coding וגבול האנטרופיה התיאורטי, כולל רגישות למפתח ואפקט מפולת שלגים בין מפתחות דומים.",
      en: "A bit-level adaptive rANS (Range Asymmetric Numeral Systems) compression engine with encryption built into the same process: the probability table updates only when the matching bit of a secret key equals 1, so compression and encryption share one mechanism instead of separate layers. Built from scratch in C++17, selected as an outstanding final project and presented at Ariel University's Computer Science Department Final Projects Conference, advised by Prof. Dana Shapira, Dean of the Computer Science Department. Benchmarked against Huffman coding, arithmetic coding and the theoretical entropy bound, including key-sensitivity and avalanche-effect testing.",
    },
    tags: ["C++17", "Python", "rANS", "Cryptography", "Benchmarking"],
    repo: "https://github.com/Matanelevavi/ANS-Compression",
  },
  {
    icon: "🧭", featured: true,
    flag: { he: "AI · Full-Stack", en: "AI · Full-Stack" },
    title: "Shvilit - AI-Powered Hebrew Travel Guide",
    desc: {
      he: "אפליקציית טיולים חוצת-פלטפורמות ההופכת כל אתר עניין בישראל לסיור מונחה מותאם אישית - כטקסט, אודיו או וידאו - מבוססת נתוני ויקיפדיה כדי למנוע הזיות. נבנתה ושוגרה לבד: איתור מיקום גיאוגרפי, יצירת תוכן מבוססת Gemini עם עיגון במקורות, TTS ל-Edge, הרכבת וידאו עם FFmpeg, אימות Google/אורח, שאלוני חידון אוטומטיים, נקודות ולוח מובילים, ודשבורד אנליטיקס לניהול. ארכיטקטורת Adapter Pattern מאפשרת החלפת ספקי שירות (LLM, TTS, מקור מידע) בלי לגעת בממשק.",
      en: "A cross-platform travel app that turns any point of interest in Israel into a narrated tour on demand - as text, audio or video - grounded in Wikipedia data to avoid hallucinations. Built and shipped solo: geolocation-based discovery, Gemini-based script generation grounded in retrieved sources, edge-tts narration, server-side video assembly with FFmpeg, Google OAuth / guest auth, auto-generated quizzes, a points and leaderboard system, and an admin analytics dashboard. An adapter-pattern architecture lets every external service (POI source, LLM, TTS) be swapped without touching the UI.",
    },
    tags: ["Expo", "React Native", "TypeScript", "FastAPI", "Google Gemini", "Supabase"],
    repo: "https://github.com/Matanelevavi/shvilit",
    live: "https://shvilit.shvilit-tours.workers.dev",
  },
  {
    icon: "📈", featured: true,
    flag: { he: "Full-Stack", en: "Full-Stack" },
    title: "Planit - AI Financial Planner",
    desc: {
      he: "פלטפורמת תכנון פיננסי מבוססת מטרות עם מנוע כיול דינמי שמחשב מחדש בזמן אמת את ההפקדה החודשית הנדרשת. אבטחה ראשונה: JWT, האשינג Argon2 ו-Pydantic. ויזואליזציה אינטראקטיבית עם Recharts.",
      en: "A goal-based financial planning platform with a dynamic calibration engine that recalculates the required monthly contribution in real time. Security-first: JWT, Argon2 hashing and Pydantic validation. Interactive visualizations with Recharts.",
    },
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    repo: "https://github.com/Matanelevavi/Planit",
  },
  {
    icon: "📦",
    flag: { he: "PWA קהילתי", en: "Community PWA" },
    title: "Tavi-Li - Neighborhood Package Sharing",
    desc: {
      he: "PWA קהילתי לשכנים לשיתוף איסוף חבילות - מי שכבר בדרך לנקודת איסוף יכול לאסוף גם חבילות של שכנים באותו מסלול. חוקי אבטחה של Firestore אוכפים בעלות פר-מסמך, ולידציית שדות ותביעה בודדת לכל משלוח; דירוגים מוגבלים לעדכון יחיד למדרג כדי למנוע ניפוח. 52 בדיקות יחידה לחוקי האבטחה, מורצות מול אמולטור Firestore.",
      en: "A community PWA for neighbors to share package pickups - travelers already collecting a package can grab packages for neighbors on the same route. Firestore security rules enforce per-document ownership, field validation and one-claim-per-shipment logic; ratings are capped to one updatable slot per rater to prevent inflation. 52 unit tests for the security rules, run against the Firestore emulator.",
    },
    tags: ["Next.js", "TypeScript", "Firebase", "Firestore", "Tailwind CSS"],
    live: "https://tavi-li.vercel.app",
  },
  {
    icon: "🌐",
    flag: { he: "רשתות", en: "Networking" },
    title: "Reliable Transport Protocol",
    desc: {
      he: "אפליקציית לקוח-שרת שמממשת מנגנוני תעבורה אמינים מעל TCP: Sliding Window, Go-Back-N ובקרת זרימה דינמית. כולל handshake בשכבת האפליקציה, חיבור מתמשך ושחזור משגיאות.",
      en: "A client-server app implementing reliable transport mechanisms over TCP: Sliding Window, Go-Back-N and dynamic flow control. Includes an application-layer handshake, persistent connection and error recovery.",
    },
    tags: ["Python", "Sockets", "Go-Back-N", "Threading"],
    repo: "https://github.com/Matanelevavi/Communication-Networks-Assignment-3",
  },
  {
    icon: "🤖",
    flag: { he: "אלגו-מסחר", en: "Algo-Trading" },
    title: "Algo-Trade",
    desc: {
      he: "צנרת נתונים בפייתון לשליפה, בדיקה וויזואליזציה של נתוני מט\"ח מ-Polygon.io: הורדה ותחזוקה של נתונים היסטוריים לדקה עבור מספר צמדי מטבעות, חישוב שערים צולבים שאינם זמינים ישירות מה-API, דשבורדים אינטראקטיביים של נרות יפניים והשוואות בין צמדים עם Plotly, וסוויטת בדיקות ייעודית לשלמות ורציפות הנתונים.",
      en: "A Python data pipeline for fetching, testing and visualizing Forex market data via the Polygon.io API: downloads and maintains minute-by-minute historical data for multiple currency pairs, calculates cross-pair rates not available directly from the API, interactive candlestick dashboards and cross-pair comparisons with Plotly, and a dedicated test suite for data integrity and continuity.",
    },
    tags: ["Python", "Pandas", "Plotly", "Polygon.io", "Testing"],
    repo: "https://github.com/Matanelevavi/Algo-Trade",
  },
  {
    icon: "🧩",
    flag: { he: "אלגוריתמים", en: "Algorithms" },
    title: "Maze Pathfinding (Ex3)",
    desc: {
      he: "אלגוריתמים למערכי דו-ממד המייצגים מבוך: מציאת המסלול הקצר ביותר, ניתוח רכיבים קשירים וחישובי מרחק. עיצוב מונחה-עצמים עם ויזואליזציית GUI ובדיקות JUnit.",
      en: "Algorithms for 2D arrays representing mazes: shortest-path finding, connected-components analysis and distance computation. Object-oriented design with a GUI visualization and JUnit tests.",
    },
    tags: ["Java", "Algorithms", "OOP", "JUnit", "GUI"],
    repo: "https://github.com/Matanelevavi/Ex3",
  },
  {
    icon: "🏙️",
    flag: { he: "OOP", en: "OOP" },
    title: "Manhattan Real-Estate System",
    desc: {
      he: "מערכת ניהול נדל\"ן מקיפה למנהטן, המיישמת עקרונות תכנות מונחה-עצמים ותבניות עיצוב (Design Patterns) בארכיטקטורה מודולרית.",
      en: "A comprehensive real-estate management system for Manhattan, implementing object-oriented principles and design patterns in a modular architecture.",
    },
    tags: ["Java", "OOP", "Design Patterns"],
    repo: "https://github.com/Matanelevavi/Manhattan-Realestate-System",
  },
];

/* ---------------- Timeline ---------------- */
const TIMELINE = [
  {
    type: "edu", period: "2026",
    role: { he: "AI for Software Developers - Advanced Track", en: "AI for Software Developers - Advanced Track" },
    org: { he: "TechTroop AI Academy (בשיתוף Elevation ושירות התעסוקה)", en: "TechTroop AI Academy (with Elevation & Israel's Employment Service)" },
    desc: {
      he: "קורס בן 30 שעות: הנדסת פרומפטים לקוד, פיתוח AI-native (Cursor, Claude Code), הנדסת קונטקסט, מערכות RAG, Model Context Protocol (MCP), אוטומציות (Gemini, Apps Script, n8n), עיצוב agents עם LangGraph ומערכות multi-agent. פרויקט מסכם: פתרון LLM מקצה-לקצה המשלב RAG, איסוף קונטקסט ותזמור אגנטי.",
      en: "A 30-hour course: prompt engineering for code, AI-native development (Cursor, Claude Code), context engineering, RAG systems, the Model Context Protocol (MCP), automations (Gemini, Apps Script, n8n), agent design with LangGraph, and multi-agent systems. Final project: an end-to-end LLM solution combining RAG, context ingestion and agentic orchestration.",
    },
  },
  {
    type: "edu", period: "2022 – 2027",
    role: { he: "תואר B.Sc. במדעי המחשב", en: "B.Sc. in Computer Science" },
    org: { he: "אוניברסיטת אריאל", en: "Ariel University" },
    desc: {
      he: "יסודות מתמטיים: חדו\"א 1-2, אלגברה לינארית 1-2, מבנים דיסקרטיים, לוגיקה ותורת הקבוצות, הסתברות והיסק סטטיסטי. מדעי המחשב תיאורטיים: מבני נתונים, אלגוריתמים 1-2, אוטומטים ושפות פורמליות, חישוביות. מערכות: מערכות ספרתיות, ארכיטקטורת מחשבים, מערכות הפעלה, תכנות מערכות 1-2, תכנות מונחה-עצמים, רשתות תקשורת. יישומי/נתונים: מסדי נתונים (ציון 99), דחיסת נתונים, למידה עמוקה ועיבוד שפה טבעית.",
      en: "Mathematical foundations: Calculus 1 & 2, Linear Algebra 1 & 2, Discrete Structures, Logic and Set Theory, Probability, Statistical Inference. Theoretical CS: Data Structures, Algorithms 1 & 2, Automata and Formal Languages, Computability. Systems: Digital Systems, Computer Architecture, Operating Systems, Systems Programming 1 & 2, Object-Oriented Programming, Computer Networks. Applied / Data: Databases (grade: 99), Data Compression, Deep Learning and Natural Language Processing.",
    },
  },
  {
    type: "mil", period: "2023 – 2026",
    role: { he: "מילואים - מלחמת חרבות ברזל", en: "Reserves - Iron Swords War" },
    org: { he: "צה\"ל, עזה ולבנון", en: "IDF, Gaza & Lebanon" },
    desc: { he: "שירות מילואים מבצעי תחת אחריות גבוהה.", en: "Operational reserve service under high responsibility." },
  },
  {
    type: "work", period: "2021 – 2022",
    role: { he: "רכז מינהלי", en: "Administrative Coordinator" },
    org: { he: "ישיבת ירוחם", en: "Yeshivat Yerucham" },
    desc: { he: "ניהול לוגיסטיקה, לוחות זמנים ותיאום אירועים.", en: "Managed logistics, scheduling and event coordination." },
  },
  {
    type: "mil", period: "2019 – 2021",
    role: { he: "לוחם ומפקד צוות", en: "Combat Soldier & Team Leader" },
    org: { he: "חטיבת גולני, צה\"ל", en: "Golani Brigade, IDF" },
    desc: { he: "הובלת צוותים קטנים במצבי לחץ גבוהים - משמעת, הסתגלות ופתרון בעיות.", en: "Led small teams under high-pressure situations - discipline, adaptability and problem-solving." },
  },
  {
    type: "work", period: "2023 – 2024",
    role: { he: "חונך נוער (התנדבות)", en: "Youth Mentor (Volunteer)" },
    org: { he: "בית הגלגלים", en: "Beit HaGalgalim" },
    desc: { he: "חניכת ילדים עם מוגבלויות פיזיות וקוגניטיביות, קידום הכלה ותקשורת.", en: "Mentored children with physical and cognitive disabilities; promoted inclusion and communication." },
  },
];

/* ============================================================
   Rendering
   ============================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};

let lang = localStorage.getItem("ml-lang") || "he";

function renderChips() {
  const map = { chipsLangs: SKILLS.langs, chipsFront: SKILLS.front, chipsBack: SKILLS.back, chipsConcepts: SKILLS.concepts, chipsAI: SKILLS.ai };
  for (const [id, arr] of Object.entries(map)) {
    const box = document.getElementById(id);
    box.innerHTML = "";
    arr.forEach(s => box.appendChild(el("span", "chip", s)));
  }
}

function renderProjects() {
  const grid = $("#projectsGrid");
  grid.innerHTML = "";
  PROJECTS.forEach(p => {
    const card = el("article", "project-card reveal" + (p.featured ? " featured" : ""));
    const tags = p.tags.map(t => `<span class="pc-tag">${t}</span>`).join("");
    card.innerHTML = `
      <div class="pc-top">
        <div class="pc-icon">${p.icon}</div>
        <span class="pc-flag">${p.flag[lang]}</span>
      </div>
      <h3 class="pc-title">${p.title}</h3>
      <p class="pc-desc">${p.desc[lang]}</p>
      <div class="pc-tags">${tags}</div>
      <div class="pc-links">
        ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">⌥ ${I18N[lang].projCode} →</a>` : ""}
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">🔗 ${I18N[lang].projLive} →</a>` : ""}
      </div>`;
    grid.appendChild(card);
  });
  initCardTilt();
}

const REDUCE_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initCardTilt() {
  if (REDUCE_MOTION) return;
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty("--mx", `${(x / r.width) * 100}%`);
      card.style.setProperty("--my", `${(y / r.height) * 100}%`);
      const rx = ((y / r.height) - 0.5) * -6;
      const ry = ((x / r.width) - 0.5) * 6;
      card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

function renderTimeline() {
  const tl = $("#timeline");
  tl.innerHTML = "";
  TIMELINE.forEach(t => {
    const item = el("div", "tl-item reveal " + t.type);
    item.innerHTML = `
      <div class="tl-period">${t.period}</div>
      <div class="tl-role">${t.role[lang]}</div>
      <div class="tl-org">${t.org[lang]}</div>
      <div class="tl-desc">${t.desc[lang]}</div>`;
    tl.appendChild(item);
  });
}

/* ---------------- Language ---------------- */
function applyLang(next) {
  lang = next;
  localStorage.setItem("ml-lang", lang);
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "he" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    if (I18N[lang][key] != null) node.textContent = I18N[lang][key];
  });

  $("#langLabel").textContent = lang === "he" ? "EN" : "עב";
  renderProjects();
  renderTimeline();
  startRotator(true);
  observeReveals();
}

/* ---------------- Theme ---------------- */
function applyTheme(next) {
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("ml-theme", next);
}

/* ---------------- Rotating role typing ---------------- */
let rotTimer = null, rotState = { i: 0, c: 0, del: false };
function startRotator(reset) {
  if (rotTimer) clearTimeout(rotTimer);
  if (reset) rotState = { i: 0, c: 0, del: false };
  const node = $("#rotator");
  const list = ROLES[lang];
  const tick = () => {
    const word = list[rotState.i];
    rotState.c += rotState.del ? -1 : 1;
    node.textContent = word.slice(0, rotState.c);
    let delay = rotState.del ? 45 : 90;
    if (!rotState.del && rotState.c === word.length) { delay = 1500; rotState.del = true; }
    else if (rotState.del && rotState.c === 0) { rotState.del = false; rotState.i = (rotState.i + 1) % list.length; delay = 350; }
    rotTimer = setTimeout(tick, delay);
  };
  tick();
}

/* ---------------- Scroll reveal ---------------- */
let io = null;
function observeReveals() {
  if (io) io.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(n => io.observe(n));
}

/* ---------------- Nav behaviour ---------------- */
function initNav() {
  const nav = $("#nav");
  const links = $("#navLinks");
  const burger = $("#hamburger");

  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 20), { passive: true });

  burger.addEventListener("click", () => { links.classList.toggle("open"); burger.classList.toggle("open"); });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { links.classList.remove("open"); burger.classList.remove("open"); }));

  // Active section highlight
  const sections = [...document.querySelectorAll("section[id]")];
  const navMap = {};
  links.querySelectorAll("a").forEach(a => navMap[a.getAttribute("href").slice(1)] = a);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.querySelectorAll("a").forEach(a => a.classList.remove("active"));
        if (navMap[e.target.id]) navMap[e.target.id].classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));
}

/* ---------------- Hero particle constellation ---------------- */
function initParticles() {
  const canvas = $("#heroCanvas");
  const hero = $("#hero");
  if (!canvas || !hero) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  const mouse = { x: null, y: null };

  function accentColor() {
    return getComputedStyle(document.documentElement).getPropertyValue("--i3").trim() || "#06b6d4";
  }

  function resize() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));
  }

  function frame() {
    const accent = accentColor();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      if (mouse.x != null) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 140 && dist > 0.01) { p.x -= (dx / dist) * 0.6; p.y -= (dy / dist) * 0.6; }
      }
    });

    ctx.fillStyle = accent;
    particles.forEach(p => {
      ctx.globalAlpha = 0.55;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill();
    });

    ctx.strokeStyle = accent;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 120) {
          ctx.globalAlpha = (1 - dist / 120) * 0.25;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    if (!REDUCE_MOTION) requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize, { passive: true });
  hero.addEventListener("mousemove", e => {
    const r = hero.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  }, { passive: true });
  hero.addEventListener("mouseleave", () => { mouse.x = null; mouse.y = null; });

  resize();
  frame();
}

/* ---------------- Animated stat counters ---------------- */
function initCounters() {
  const nums = document.querySelectorAll(".stat-num[data-count-to]");
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const target = parseInt(node.dataset.countTo, 10);
      const suffix = node.dataset.suffix || "";
      if (REDUCE_MOTION) { node.textContent = target + suffix; io2.unobserve(node); return; }
      const duration = 1100;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io2.unobserve(node);
    });
  }, { threshold: 0.4 });
  nums.forEach(n => io2.observe(n));
}

/* ---------------- Live GitHub stat ---------------- */
let ghRepoCount = null;
function renderGhStat() {
  const node = $("#ghLiveStat");
  if (!node || ghRepoCount == null) return;
  const label = lang === "he" ? "מאגרים ציבוריים ב-GitHub כרגע" : "public repositories on GitHub right now";
  node.textContent = `${ghRepoCount} ${label}`;
}
async function loadGithubStats() {
  try {
    const res = await fetch("https://api.github.com/users/Matanelevavi");
    if (!res.ok) throw new Error("bad response");
    const data = await res.json();
    ghRepoCount = data.public_repos;
    renderGhStat();
  } catch (e) {
    const wrap = $("#ghLive");
    if (wrap) wrap.remove();
  }
}

/* ---------------- Back to top ---------------- */
function initToTop() {
  const btn = $("#toTop");
  if (!btn) return;
  window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 500), { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: REDUCE_MOTION ? "auto" : "smooth" }));
}

/* ---------------- Init ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem("ml-theme") || "dark");
  renderChips();
  applyLang(lang);          // also renders projects, timeline, reveals, rotator
  initNav();
  initParticles();
  initCounters();
  initToTop();
  loadGithubStats();
  $("#year").textContent = new Date().getFullYear();

  $("#langToggle").addEventListener("click", () => { applyLang(lang === "he" ? "en" : "he"); renderGhStat(); });
  $("#themeToggle").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    applyTheme(cur === "dark" ? "light" : "dark");
  });
  $("#printCv").addEventListener("click", () => window.print());
});
