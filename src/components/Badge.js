import cx from "clsx";
import styles from "./Badge.module.css";

export default function Badge({ title, color }) {
  return <span className={cx(styles.badge, styles[color])}>{title}</span>;
}
