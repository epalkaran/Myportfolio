# Portfolio — Palkaran Kaur

A personal portfolio website showcasing projects, skills, experience, and contact information. Built as a full-stack application with a React frontend served by a Spring Boot backend.

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** — build tool and dev server
- Sections: Hero, About, Skills, Experience, Projects, Contact
- Components: Navbar, Footer, PDF Modal, Section Headings

### Backend
- **Java 21** with **Spring Boot 3.5**
- REST API (`/api/*`) for projects, skills, experience, and resume
- Serves the built React frontend as static files in production
- Spring Boot Actuator for health monitoring

### Deployment
- **Docker** multi-stage build (Node + Maven + JRE)
- **Render** free tier via `render.yaml` blueprint

## Prerequisites

- **Node.js** 20+
- **Java** 21+
- **Maven** (or use the included `mvnw` wrapper)

## Running Locally

### Option 1: Frontend and backend separately (for development)

**Backend:**

```bash
cd backend
./mvnw spring-boot:run
```

Runs on http://localhost:8080

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

Runs on http://localhost:3000 with API requests proxied to `:8080`.

### Option 2: Single bundled app (production-like)

```bash
cd backend
./mvnw package -DskipTests
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

This builds the React frontend, copies it into Spring Boot's static resources, and packages everything into a single JAR. Open http://localhost:8080.

### Option 3: Docker

```bash
docker build -t my-portfolio .
docker run -p 8080:8080 my-portfolio
```

Open http://localhost:8080.

## Project Structure

```
my-portfolio/
├── frontend/          # React + Vite + TypeScript
│   └── src/
│       ├── sections/  # Hero, About, Skills, Experience, Projects, Contact
│       └── components/# Navbar, Footer, PdfModal, SectionHeading
├── backend/           # Spring Boot REST API
│   └── src/main/java/com/palak/portfolio/
│       ├── controller/# Health, Project, Resume endpoints
│       ├── model/     # Project, Experience, Skill
│       └── config/    # CORS and SPA routing
├── Dockerfile         # Multi-stage production build
└── render.yaml        # Render deployment blueprint
```
