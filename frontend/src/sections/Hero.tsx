import styles from "./Hero.module.css";
import profileImg from "../assets/main.png";

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgGlow} />
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 className={styles.name}>Palkaran Kaur.</h1>
          <h2 className={styles.tagline}>
            I build platforms that power <span>thousands of developers.</span>
          </h2>
          <p className={styles.summary}>
            Software Engineer at <strong>JPMorgan Chase</strong>, owning the API Management
            Plane that serves 5,000+ developers. I specialize in building scalable platform
            infrastructure, developer tooling, and AI-powered solutions. CKAD certified with
            deep expertise in distributed systems and Kubernetes.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className={styles.btnPrimary}>
              View My Work
            </a>
            <a href="#contact" className={styles.btnOutline}>
              Get In Touch
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>5000+</span>
              <span className={styles.statLabel}>Developers Served</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>4000+</span>
              <span className={styles.statLabel}>API Specs Processed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>60 GB</span>
              <span className={styles.statLabel}>Logs/Day Pipeline</span>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img src={profileImg} alt="Palkaran Kaur" className={styles.profileImg} />
            <div className={styles.imageBorder} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
