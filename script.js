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

    projKicker: "03 · פרויקטים", projTitle: "דברים שבניתי",
    projSub: "מבחר עבודות אקדמיות ואישיות. כל פרויקט מקושר לקוד המקור ב-GitHub.",
    projAll: "לכל המאגרים ב-GitHub ←", projCode: "קוד",

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

    projKicker: "03 · Projects", projTitle: "Things I've built",
    projSub: "A selection of academic and personal work. Every project links to its source on GitHub.",
    projAll: "See all repositories on GitHub →", projCode: "Code",

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
  langs:    ["Java", "Python", "C", "C++", "SQL", "TypeScript"],
  front:    ["React", "Vite", "Tailwind CSS", "HTML5", "JavaScript"],
  back:     ["FastAPI", "PostgreSQL", "SQLAlchemy", "Pandas", "NumPy", "Sockets"],
  concepts: ["Data Structures", "Algorithms", "OOP", "Git", "Docker", "Modular Design"],
};

/* ---------------- Projects ---------------- */
const PROJECTS = [
  {
    icon: "🗜️", featured: true,
    flag: { he: "מוצג", en: "Featured" },
    title: "Adaptive rANS Compression + Encryption",
    desc: {
      he: "מנוע דחיסה אנטרופי (rANS) אדפטיבי מבוסס בלוקים עם מנגנון הצפנה משולב, מבוסס מאמר מחקרי. המודל מתעדכן רק כאשר ביט המפתח הוא 1 - בלי המפתח הפענוח מייצר פלט שונה לחלוטין. נמדד מול HTSCodecs ו-Arithmetic Coding.",
      en: "An adaptive, block-based rANS entropy coder with an integrated encryption mechanism, derived from a research paper. The model updates only when the key bit is 1 - without the key, decompression yields completely different output. Benchmarked against HTSCodecs and Arithmetic Coding.",
    },
    tags: ["C++17", "Python", "rANS", "Cryptography", "Benchmarking"],
    repo: "https://github.com/Matanelevavi/ANS-Compression",
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
      he: "פרויקט מסחר אלגוריתמי בפייתון - חקר אסטרטגיות, עיבוד נתוני שוק ולוגיקת החלטה אוטומטית.",
      en: "An algorithmic trading project in Python - strategy exploration, market-data processing and automated decision logic.",
    },
    tags: ["Python", "Pandas", "Data Analysis"],
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
    type: "edu", period: "2022 – 2027",
    role: { he: "תואר B.Sc. במדעי המחשב", en: "B.Sc. in Computer Science" },
    org: { he: "אוניברסיטת אריאל", en: "Ariel University" },
    desc: { he: "מבני נתונים, אלגוריתמים, תכנות מערכות, OOP, מסדי נתונים, הסתברות.", en: "Data Structures, Algorithms, System Programming, OOP, Databases, Probability." },
  },
  {
    type: "mil", period: "2023 – 2025",
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
  const map = { chipsLangs: SKILLS.langs, chipsFront: SKILLS.front, chipsBack: SKILLS.back, chipsConcepts: SKILLS.concepts };
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
        <a href="${p.repo}" target="_blank" rel="noopener">⌥ ${I18N[lang].projCode} →</a>
      </div>`;
    grid.appendChild(card);
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

/* ---------------- Init ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem("ml-theme") || "dark");
  renderChips();
  applyLang(lang);          // also renders projects, timeline, reveals, rotator
  initNav();
  $("#year").textContent = new Date().getFullYear();

  $("#langToggle").addEventListener("click", () => applyLang(lang === "he" ? "en" : "he"));
  $("#themeToggle").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    applyTheme(cur === "dark" ? "light" : "dark");
  });
  $("#printCv").addEventListener("click", () => window.print());
});
