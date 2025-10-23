# FunCare Website

> This provides a complete setup, usage, and contribution guide for the **FunCare Website** project.

---

## 🧩 1) Tech Stack & Tools

### **Core Stack**
- **Framework:** Next.js (React, App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui, Radix Primitives, lucide-react
- **Animation:** framer-motion, react-parallax-tilt
- **State/Utils:** React hooks and custom utilities

### **Developer Tools**
- **Node.js:** LTS (v18+ recommended; v20 ideal)
- **Package Manager:** npm (or pnpm/yarn if standardized)
- **Version Control:** Git + GitHub
- **Editor:** VS Code

**Recommended VS Code Extensions:**
- Tailwind CSS IntelliSense  
- ESLint  
- Prettier – Code formatter  
- GitLens (optional but helpful)

**Optional (macOS)**
- **Homebrew** to install tools  
- **nvm** to switch Node versions (`brew install nvm`)

---

## 🚀 2) Quick Start

```bash
# 1. Clone repository
git clone https://github.com/Funcare/fun-care-website.git
cd fun-care-website

# 2. Navigate to frontend folder
cd frontend

# 3. (Optional) Use Node 20
nvm use 20

# 4. Install dependencies
npm install

# 5. Run local development server
npm run dev
# Visit http://localhost:3000
```

> ⚠️ If you see `next: command not found`, make sure dependencies are installed and you're in `/frontend`.

---

## 📂 3) Project Structure

```
fun-care-website/
├─ frontend/
│  ├─ app/                 # Next.js App Router (pages/layouts)
│  ├─ components/          # UI components
│  ├─ lib/                 # Utilities and helpers
│  ├─ public/icons/        # Static assets
│  ├─ styles/              # Global styles
│  ├─ tailwind.config.ts
│  ├─ next.config.mjs
│  ├─ package.json
│  └─ ...
└─ README.md
```


---

## 🧰 4) Scripts

| Command | Description |
|----------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production app |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run format` | Format using Prettier |

---

## 🎨 5) UI System & Conventions

- **Tailwind CSS** for styling (`tailwind.config.ts`)  
- **shadcn/ui** components in `components/ui/`  
- **lucide-react** icons imported as components  
- **Animations:** `framer-motion`, `react-parallax-tilt`  
- **Accessibility:** Use Radix primitives and semantic HTML


---

## 🌿 6) Git Workflow

```bash 
# Update main branch
git checkout main
git pull origin main

# Create a feature branch
git checkout -b <your-name>/<feature>

# Commit and push
git add -A
git commit -m "feat: add new section"
git push origin <your-branch>
```

Then open a Pull Request on GitHub → “Compare & pull request” → add a clear title and description.


---

## 🧠 7) Step-by-Step: First Run Setup

1. **Install Node.js (LTS)**
   ```bash
   brew install node
   brew install nvm
   nvm install --lts
   nvm use --lts
   ```

2. **Clone the repo**
   ```bash
   git clone https://github.com/Funcare/fun-care-website.git
   cd fun-care-website/frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```


4. **Run development server**
   ```bash
   npm run dev
   ```

---

## 🪲 8) Troubleshooting

### A) `next: command not found`
Fix:
```bash
cd frontend
npm install
npm run dev
```

### B) `ENOENT: package.json not found`
- You're in the wrong folder. Move to `/frontend`.


### C) Port 3000 already in use
```bash
lsof -i :3000
kill -9 <PID>
```

### D) TypeScript or ESLint errors
```bash
npm run lint
```


---

## 👥 Team

**Leads:** Shereen (Saccae Studio), Kay<br />
**Collaborators:** Subhan, Murat<br />
**Project:** FunCare Website Development<br />
**Meetings:** Mondays 5:30–6:30 PM<br />
**Communication:** WhatsApp group + GitHub (Between Collaborators)

---

<p align="center">
  <b>This is only a Frontend setup, this will be updated in Future.</b>
</p>

---

**© 2025 FunCare Institute — All rights reserved.**