import cx from "clsx";
import styles from "./ListContainer.module.css";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ListItemLayout from "./components/ListItemLayout";

import { useState } from "react";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");

  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "GreenYellow",
            color: "black",
          }}
        >
          New Issue
        </Button>
      </div>
      <OpenClosedFilters />
      <ListItemLayout className={styles.listFilter}>
        <div className={styles.filterLists}>
          <span>Author</span>
          <span>Label</span>
          <span>Projects</span>
          <span>Milestones</span>
          <span>Assignee</span>
          <span>sort</span>
        </div>
      </ListItemLayout>
      <div className={styles.container}>
        <ListItem
          badges={[
            {
              color: "red",
              title: "Bug2",
            },
            {
              color: "blue",
              title: "Bug1",
            },
          ]}
        />
      </div>
    </div>
  );
}

function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);

  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  );
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  );
}
