import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <div className={styles.header}>Header</div>
      <div className={styles.listContainer}>ListContainer</div>
      <div className={styles.footer}>footer</div>
    </>
  );
}

function Button() {
  return <button className={styles.button}>New Issue</button>;
}

export default App;
