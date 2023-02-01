import styles from "./Header.module.css";

import Button from "./components/Button";
import Space from "./components/Space";

export default function Header() {
  return (
    <div className={styles.header}>
      <Button
        styles={{
          fontSize: "14px",
          backgroundColor: "transparent",
          color: "black",
        }}
      >
        Watch
      </Button>
      <Space />
      <Button
        styles={{
          fontSize: "14px",
          backgroundColor: "transparent",
          color: "black",
        }}
      >
        Fork <div className={styles.circle}>5</div>
      </Button>
      <Space />
      <Button
        styles={{
          fontSize: "14px",
          backgroundColor: "transparent",
          color: "black",
        }}
      >
        Star
      </Button>
    </div>
  );
}
