import styles from "./Modal.module.css";
import { useState, useEffect } from "react";
import cx from "clsx";

export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  serchDataList,
  onClickCell,
}) {
  const [serchValue, setSerchValue] = useState("");
  const [filteredData, setFilteredData] = useState(serchDataList);

  useEffect(() => {
    setFilteredData(serchDataList.filter((item) => item === serchValue));
  }, [serchDataList, serchValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={serchValue}
          onChange={(e) => setSerchValue(e.target.value)}
        />
      </div>
      {serchDataList.map((data) => (
        <div key={data} onClick={onClickCell} role="button">
          {data}
        </div>
      ))}
    </div>
  );
}
