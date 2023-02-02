import styles from "./ListItemLayout.module.css";

export default function ListItemLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        // value={checked}
        // onChange={onChangeCheckBox}
      />
      {children}
    </div>
  );
}
