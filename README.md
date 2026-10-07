# Mercor Hiring App

Select the **best five candidates** out of a thousand in minutes.

[https://user-images.githubusercontent.com/…/demo.gif](https://user-images.githubusercontent.com/…/demo.gif) &#x20;

---

## ✨ Features

| Feature                | Details                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Automatic scoring**  | Weights **skills (50 %)**, **experience (30 %)**, **salary fit (20 %)** out‑of‑the‑box. Change two numbers to rebalance. |
| **Instant shortlist**  | One‑click **Shortlist** button adds a candidate to a shared React Context. Limit defaults to 5 picks.                    |
| **Lean architecture**  | Next.js API Route reads a JSON dump ↔ sends ranked list—no database needed for the MVP.                                  |
| **Type‑safe**          | Strict TypeScript models (`Candidate` interface) catch typos early.                                                      |
| **Fully offline demo** | Works with your local `form-submissions.json`; zero cloud setup.                                                         |

---

## 🚀 Quick Start

```bash
# 1. Clone
 git clone https://github.com/<your-username>/mercor-hiring-app.git
 cd mercor-hiring-app

# 2. Install deps
 npm install   # or pnpm install / yarn

# 3. Run dev server
 npm run dev   # http://localhost:3000
```

> **Prereqs:** Node 18+, npm 9+.  Tested on Windows 11 & macOS Sonoma.

---

## 📂 Project Structure

```
mercor-hiring-app
├── data/
│   └── form-submissions.json      👈 raw LinkedIn form dump (~1 MB)
└── src/
    ├── pages/
    │   ├── api/
    │   │   └── candidates.ts      – scores & sorts on the server
    │   ├── index.tsx              – candidate table
    │   └── shortlist.tsx          – final 5 hires
    ├── context/
    │   └── ShortlistContext.tsx   – global shortlist state
    ├── lib/
    │   └── score.ts               – skill / exp / salary maths
    └── types/
        └── Candidate.ts           – TypeScript model
```

---

## 🧮 Scoring Logic

```ts
// src/lib/score.ts
const weights = { skill: 0.5, exp: 0.3, salary: 0.2 };
```

| Factor               | Formula                                           |
| -------------------- | ------------------------------------------------- |
| **Skill match**      | `% of required skills in candidate.skills`        |
| **Experience**       | `min(work_experiences.length, 10) ÷ 10`           |
| **Salary advantage** | `1 − (candidateSalary ÷ maxBudget)` (capped at 0) |

🔧 **Tweak** any weight or the `maxBudget` constant → save → browser hot‑reloads.

---

## 🖥  Demo Walk‑Through (5 min)

1. **Open** `/` – candidates ranked by score.
2. **Click** *Shortlist* on five rows.
3. **Jump** to `/shortlist` to view final team; remove if needed.
4. **Open code** to show how scoring & context work (see [VIDEO](#)).

---

## 🛠  Tech Stack

- **Next.js 15** (Pages Router)
- **React 18 + TypeScript**
- **Tailwind CSS** – rapid utility styling
- **SWR** – tiny data‑fetch hook

---

## 🚦 Roadmap

-

PRs and suggestions welcome! 🙌

---

## 📄 License

MIT © 2025 Varun Kumar

