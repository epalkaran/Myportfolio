import styles from "./SectionHeading.module.css";

interface Props {
  label: string;
  title: string;
}

function SectionHeading({ label, title }: Props) {
  return (
    <div className={styles.heading}>
      <span className={styles.label}>{label}</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default SectionHeading;
