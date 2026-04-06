import { useState, useEffect } from "react";
import PdfModal from "./PdfModal";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={styles.nav}>
          <a href="#hero" className={styles.logo}>
            PK<span className={styles.logoDot}>.</span>
          </a>

          <button
            className={`${styles.menuBtn} ${mobileOpen ? styles.menuOpen : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`${styles.navLinks} ${mobileOpen ? styles.navOpen : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                className={styles.resumeBtn}
                onClick={() => {
                  setMobileOpen(false);
                  setShowResume(true);
                }}
              >
                Resume
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {showResume && (
        <PdfModal
          src="/Palkaran_Kaur_1.pdf"
          title="Resume — Palkaran Kaur"
          onClose={() => setShowResume(false)}
        />
      )}
    </>
  );
}

export default Navbar;
