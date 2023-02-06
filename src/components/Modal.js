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
    setFilteredData(serchDataList);
  }, [serchDataList]);

  // useEffect(() => {
  //   setFilteredData(serchDataList.filter((item) => item === serchValue));
  // }, [serchDataList, serchValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>Filter by {title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={serchValue}
          onChange={(e) => setSerchValue(e.target.value)}
        />
      </div>
      {filteredData.map((data) => (
        <div
          onClick={() => onClickCell(data)}
          key={data.name}
          className={styles.item}
        >
          {data.name}
        </div>
      ))}
    </div>
  );
}
