import styles from "./Badge.module.css";

export default function Badge({ name, color }) {
  return (
    <span className={styles.badge} style={{ background: `#${color}` }}>
      {name}
    </span>
  );
}
