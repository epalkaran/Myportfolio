import { useEffect } from "react";
import styles from "./PdfModal.module.css";

interface Props {
  src: string;
  title: string;
  onClose: () => void;
}

function PdfModal({ src, title, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.actions}>
            <a
              href={src}
              download
              className={styles.downloadBtn}
            >
              Download
            </a>
            <button onClick={onClose} className={styles.closeBtn} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
        <div className={styles.body}>
          <iframe
            src={src}
            title={title}
            className={styles.iframe}
          />
        </div>
      </div>
    </div>
  );
}

export default PdfModal;
