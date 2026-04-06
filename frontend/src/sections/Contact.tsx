import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kaurpalk20@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading label="Contact" title="Get In Touch" />
        <div className={styles.grid}>
          <div className={styles.info}>
            <p className={styles.intro}>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something great. Feel free to reach out!
            </p>
            <div className={styles.links}>
              <a href="mailto:kaurpalk20@gmail.com" className={styles.link}>
                <span className={styles.linkIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <div>
                  <span className={styles.linkLabel}>Email</span>
                  <span className={styles.linkValue}>kaurpalk20@gmail.com</span>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/palkaran-kaur"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span className={styles.linkIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </span>
                <div>
                  <span className={styles.linkLabel}>LinkedIn</span>
                  <span className={styles.linkValue}>palkaran-kaur</span>
                </div>
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={submitted}>
              {submitted ? "Opening Mail Client..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
