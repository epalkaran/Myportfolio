import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.credit}>
          Designed & Built by <span>Palkaran Kaur</span>
        </p>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
