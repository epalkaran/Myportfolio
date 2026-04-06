import SectionHeading from "../components/SectionHeading";
import styles from "./Skills.module.css";

interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "< />",
    items: ["Java (JDK)", "JavaScript (ES6+)", "Python", "TypeScript", "SQL"],
  },
  {
    category: "Systems & Infrastructure",
    icon: "{ }",
    items: ["Kubernetes", "Kafka", "Cassandra", "Elasticsearch", "Redis", "PostgreSQL"],
  },
  {
    category: "Full Stack Development",
    icon: "[ ]",
    items: ["React.js", "Next.js", "Spring Boot", "Node.js", "Flask", "REST APIs", "Microservices"],
  },
  {
    category: "Cloud & DevOps",
    icon: ">>",
    items: ["AWS (Lambda, EC2, S3)", "Docker", "Terraform", "CI/CD", "GitHub Actions"],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading label="Skills" title="Technologies I Work With" />
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>
              <span className={styles.icon}>{group.icon}</span>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <span key={item} className={styles.item}>
                    {item}
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

export default Skills;
