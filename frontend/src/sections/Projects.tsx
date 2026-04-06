import SectionHeading from "../components/SectionHeading";
import styles from "./Projects.module.css";

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlight?: string;
}

const projects: Project[] = [
  {
    title: "API Management Plane",
    description:
      "Single entry point for 5000+ developers across JPMC's API ecosystem. Migrated from Apigee to Kong on Kubernetes, reducing infrastructure costs by 50%.",
    tech: ["Java", "Spring Boot", "Kubernetes", "Kong", "Cassandra"],
    highlight: "5000+ developers",
  },
  {
    title: "API Spec Designer & Quality Platform",
    description:
      "OpenAPI validation platform processing 4,000+ API specs as firm-wide compliance gate with LLM-powered auto-fix for 70% faster violation resolution.",
    tech: ["Node.js", "Spectral", "React", "LLM", "OpenAPI"],
    highlight: "4000+ API specs",
  },
  {
    title: "API Agent",
    description:
      "AI agent for automated OpenAPI spec generation and correction, achieving 3x faster API delivery and firm-wide compliance.",
    tech: ["Python", "LangChain", "LangGraph", "OpenAPI"],
    highlight: "3x faster delivery",
  },
  {
    title: "LogLens - AI Log Analyzer",
    description:
      "Universal log analysis tool with cross-service correlation engine. AI reasoning agent achieves 85% accuracy on root cause identification.",
    tech: ["Python", "LangGraph", "ChromaDB", "FastAPI"],
    highlight: "85% accuracy",
  },
  {
    title: "Observability Pipeline",
    description:
      "K8s-native log pipeline (Vector → Kafka → Splunk) handling 60 GB/day with schema normalization, enrichment, and built-in failover.",
    tech: ["Kubernetes", "Vector", "Kafka", "Splunk"],
    highlight: "60 GB/day",
  },
  {
    title: "Unified Entitlement Service",
    description:
      "Cross-team entitlement service with reusable Auth Manager adopted by 6+ services, accelerating secure feature delivery by 40%.",
    tech: ["Java", "Spring Boot", "REST APIs", "Microservices"],
    highlight: "40% faster delivery",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading label="Projects" title="What I've Built" />
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.folderIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                {project.highlight && (
                  <span className={styles.highlight}>{project.highlight}</span>
                )}
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.techList}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
