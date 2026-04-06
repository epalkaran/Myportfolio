import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import PdfModal from "../components/PdfModal";
import styles from "./About.module.css";

function About() {
  const [showCert, setShowCert] = useState(false);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading label="About Me" title="Who I Am" />
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              I'm a full-stack platform engineer at <strong>JPMorgan Chase</strong>, where I
              own the API Management Plane — the single entry point for 5,000+ developers
              across JPMC's API ecosystem. I thrive at the intersection of platform engineering,
              developer experience, and AI-powered tooling.
            </p>
            <p>
              My journey started with a B.E. in Electronics & Computer Science from{" "}
              <strong>Thapar Institute of Engineering and Technology</strong> (CGPA: 9.44),
              where I built a strong foundation in algorithms, distributed systems, and
              machine learning.
            </p>
            <p>
              At JPMC, I've led initiatives ranging from migrating API gateways from Apigee
              to Kong on Kubernetes, to building AI agents for OpenAPI compliance, to
              architecting observability pipelines handling 60 GB/day of logs. I'm passionate
              about reducing developer friction and building tools that empower engineering
              teams at scale.
            </p>
          </div>
          <div className={styles.highlights}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>&#127891;</div>
              <h3>Education</h3>
              <p>B.E. in Electronics & Computer Science</p>
              <span>Thapar Institute | CGPA: 9.44</span>
            </div>
            <button className={styles.certCard} onClick={() => setShowCert(true)}>
              <div className={styles.cardIcon}>&#127942;</div>
              <h3>Certifications</h3>
              <p>CKAD - Kubernetes Application Developer</p>
              <span className={styles.viewCert}>Click to view certificate</span>
              <span className={styles.certBadge}>AWS Cloud Practitioner</span>
            </button>
            <div className={styles.card}>
              <div className={styles.cardIcon}>&#127941;</div>
              <h3>Awards</h3>
              <p>Rising Star Award - JPMC (H2 2024)</p>
              <span>SEP Leadership Award (Q2 2024)</span>
            </div>
          </div>
        </div>
      </div>

      {showCert && (
        <PdfModal
          src={`${import.meta.env.BASE_URL}CKAD_Cert.pdf`}
          title="CKAD - Certified Kubernetes Application Developer"
          onClose={() => setShowCert(false)}
        />
      )}
    </section>
  );
}

export default About;
