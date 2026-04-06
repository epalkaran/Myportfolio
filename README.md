# Portfolio — Palkaran Kaur

A personal portfolio website showcasing projects, skills, experience, and contact information.

## Tech Stack

### Frontend (deployed)
- **React 19** with TypeScript
- **Vite** — build tool and dev server
- Sections: Hero, About, Skills, Experience, Projects, Contact
- Components: Navbar, Footer, PDF Modal, Section Headings

### Backend (local API)
- **Java 21** with **Spring Boot 3.5**
- REST API (`/api/*`) for projects, skills, experience, and resume
- Spring Boot Actuator for health monitoring

### Hosting
- **GitHub Pages** — free, auto-deployed via GitHub Actions on every push to `master`

## Prerequisites

- **Node.js** 20+
- **Java** 21+ (only if running the backend locally)

## Running Locally

**Frontend only (sufficient for most development):**

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

**Backend (optional, for API development):**

```bash
cd backend
./mvnw spring-boot:run
```

Runs on http://localhost:8080

## Deployment

The site auto-deploys to GitHub Pages on every push to `master` via the GitHub Actions workflow at `.github/workflows/deploy.yml`.

**First-time setup on GitHub:**
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `master` — the workflow builds and deploys automatically

## Project Structure

```
my-portfolio/
├── frontend/             # React + Vite + TypeScript (deployed to GitHub Pages)
│   ├── public/           # Static assets (PDFs, favicon)
│   └── src/
│       ├── sections/     # Hero, About, Skills, Experience, Projects, Contact
│       └── components/   # Navbar, Footer, PdfModal, SectionHeading
├── backend/              # Spring Boot REST API (local development)
│   └── src/main/java/com/palak/portfolio/
│       ├── controller/   # Health, Project, Resume endpoints
│       ├── model/        # Project, Experience, Skill
│       └── config/       # CORS config
└── .github/workflows/    # GitHub Actions deployment
```
