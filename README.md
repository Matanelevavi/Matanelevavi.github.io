# Matanel Levavi - Personal Portfolio

A fast, bilingual (Hebrew / English) personal portfolio and CV site.
Pure HTML, CSS and JavaScript - no build step, no dependencies.

🔗 **Live:** https://matanelevavi.github.io

## Features

- **Bilingual** - one-click switch between Hebrew (RTL) and English (LTR); the choice is remembered.
- **Light / dark theme** - remembered across visits.
- **Sections** - Hero, About, Skills, Projects, Journey (timeline) and Contact.
- **Download CV** - the "Download CV" button opens a clean print view (Save as PDF).
- **Responsive** - works on phone, tablet and desktop.
- **Contact** - direct email (mailto) plus LinkedIn and GitHub links.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | All styling, themes and responsive rules |
| `script.js`  | Content (projects, skills, timeline), translations and interactivity |

## Editing content

All text lives in `script.js`:
- `I18N` - every UI string in Hebrew and English.
- `PROJECTS` - the project cards (title, description he/en, tags, GitHub link).
- `TIMELINE` - education, military service and work experience.
- `SKILLS` - the skill chips.

Edit those objects, save, and refresh - no tooling required.

## Run locally

```bash
python -m http.server 4178
# open http://localhost:4178
```

---
© Matanel Levavi · matanelevavi@gmail.com
