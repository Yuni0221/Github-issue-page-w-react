import cx from "clsx";
import axios from "axios";

import styles from "./ListContainer.module.css";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ListItemLayout from "./components/ListItemLayout";
import Modal from "./components/Modal";
import Pagination from "./components/Pagination";
import { GITHUB_API } from "./api";

import { useState, useEffect } from "react";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpenMode, setIsOpenMode] = useState(true);
  const maxPage = 10;

  async function getData(params) {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, {
      params,
    });

    setList(data.data);
  }

  useEffect(() => {
    getData({ page, state: isOpenMode ? "open" : "closed" });
  }, [page, isOpenMode]);

  console.log({ list });

  return (
    <>
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
        <OpenClosedFilters
          isOpenMode={isOpenMode}
          onClickMode={setIsOpenMode}
        />
        <div className={styles.container}>
          <ListItemLayout className={styles.listFilter}>
            <ListFilter onChangeFilter={(filteredData) => {}} />
          </ListItemLayout>

          {list.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              checked={checked}
              onClickCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={page}
          onClickPageButton={(pageNumber) => setPage(pageNumber)}
          maxPage={maxPage}
        />
      </div>
    </>
  );
}

function ListFilter({ onChangeFilter }) {
  const [showModal, setShowModal] = useState();
  const [list, setList] = useState([]);
  const filterList = ["Label", "Milestone", "Assignee"];

  async function getData(apiPath) {
    const data = await axios.get(
      `${GITHUB_API}/repos/facebook/react/${apiPath}`
    );

    let result = [];
    switch (apiPath) {
      case "assignees":
        result = data.data.map((d) => ({
          name: d.login,
        }));
        break;
      case "milestones":
        result = data.data.map((d) => ({
          name: d.title,
        }));
        break;
      case "labels":
      default:
        result = data.data;
    }

    console.log({ result });
    setList(result);
  }

  useEffect(() => {
    if (showModal) {
      const apiPath = `${showModal.toLowerCase()}s`;
      getData(apiPath);
    }
  }, [showModal]);

  return (
    <>
      <div className={styles.filterLists}>
        {filterList.map((filter) => (
          <ListFilterItem
            serchDataList={list}
            key={filter}
            onClick={() => setShowModal(filter)}
            onClose={() => setShowModal()}
            showModal={showModal === filter}
          >
            {filter}
          </ListFilterItem>
        ))}
      </div>
    </>
  );
}

function ListFilterItem({
  children,
  placeholder,
  serchDataList,
  showModal,
  onClick,
  onClose,
  onChangeFilter,
}) {
  const [list, setList] = useState(serchDataList);

  useEffect(() => {
    setList(serchDataList);
  }, [serchDataList]);

  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={onClick}>
        {children} ☺︎
      </span>
      <div className={styles.modalContainer}>
        <Modal
          title={children}
          opened={showModal}
          onClose={onClose}
          placeholder={placeholder}
          serchDataList={list}
          onClickCell={(cellInfo) => {}}
        />
      </div>
    </div>
  );
}

function OpenClosedFilters({ isOpenMode, onClickMode }) {
  return (
    <>
      <OpenClosedFilter
        // size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => onClickMode(true)}
      />
      <OpenClosedFilter
        // size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => onClickMode(false)}
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
