import styles from "./Modal.module.css";
import { useState, useEffect } from "react";
import cx from "clsx";

export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) {
  const [searchValue, setsearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(searchDataList);
  }, [searchDataList]);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredData(searchDataList);
    } else {
      const filteredSearchList = searchDataList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredSearchList);
    }
  }, [searchDataList, searchValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>Filter by {title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
        />
      </div>
      <div className={styles.list}>
        {filteredData.map((data) => (
          <div
            onClick={() => {
              const isLabel = title.toLowerCase() === "label";
              const paramKey = isLabel ? "labels" : title.toLowerCase();

              onClickCell({ [paramKey]: data.name });
            }}
            key={data.name}
            className={styles.item}
          >
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
}
