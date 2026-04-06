import SectionHeading from "../components/SectionHeading";
import styles from "./Experience.module.css";

interface ExperienceSection {
  title: string;
  points: string[];
}

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  sections: ExperienceSection[];
}

const experiences: ExperienceItem[] = [
  {
    company: "JP Morgan Chase & Co.",
    role: "Software Engineer (SDE-II)",
    location: "Bangalore, India",
    duration: "July 2023 - Present",
    sections: [
      {
        title: "API Management Plane - Platform Ownership",
        points: [
          "Tech lead for API Management Plane, architecting single entry point for 5000+ developers across JPMC's API ecosystem.",
          "Authored RFCs defining platform architecture and entitlement model; drove alignment across 3 teams and 6+ services.",
          "Drove migration from Apigee to Kong on Kubernetes — reduced infrastructure costs by 50% and codebase complexity.",
        ],
      },
      {
        title: "Cross-Team Entitlements & Access Control",
        points: [
          "Led cross-team delivery of a unified Entitlement Service defining roles and permissions across API Platform.",
          "Created reusable Auth Manager adopted by 6+ services, accelerating secure feature delivery by 40%.",
        ],
      },
      {
        title: "API Quality & API Designer",
        points: [
          "Built OpenAPI validation platform (Node.js, Spectral) processing 4,000+ API specs as firm-wide compliance gate.",
          "Developed API Spec Designer with LLM-powered auto-fix; 3x faster spec editing, 70% faster violation resolution.",
          "Drove adoption across 300+ API teams as mandatory quality checkpoint.",
        ],
      },
      {
        title: "API Agent",
        points: [
          "Engineered AI agent (LangChain, LangGraph) for automated OpenAPI spec generation — 3x faster API delivery.",
        ],
      },
      {
        title: "Observability Pipeline",
        points: [
          "Architected K8s-native log pipeline (Vector → Kafka → Splunk) handling 60 GB/day with 40% reduced latency.",
        ],
      },
    ],
  },
  {
    company: "JP Morgan Chase & Co.",
    role: "Software Intern (SEP Intern)",
    location: "Bangalore, India",
    duration: "Jan 2023 - June 2023",
    sections: [
      {
        title: "API Store - Subscription & Consumer Platform",
        points: [
          "Designed API Subscription workflow (Spring Boot, Kafka, Cassandra) — 40% faster consumer onboarding, 90% reduction in manual processing.",
        ],
      },
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading label="Experience" title="Where I've Worked" />
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineLine}>
                <div className={styles.dot} />
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.duration}>{exp.duration}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                </div>
                <div className={styles.sections}>
                  {exp.sections.map((sec, j) => (
                    <div key={j} className={styles.expSection}>
                      <h4 className={styles.sectionTitle}>{sec.title}</h4>
                      <ul className={styles.points}>
                        {sec.points.map((point, k) => (
                          <li key={k}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
