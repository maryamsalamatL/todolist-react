import styles from "./SideBar.module.css";
import { useTodosActions } from "../provider/TodoProvider";
import { FaBars } from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
import { useRef, useEffect } from "react";
import Header from "../header/Header";
import { useState } from "react";

const SideBar = () => {
  const [selected, setSelected] = useState("all");
  const { filterHandler } = useTodosActions();
  const sideBarRef = useRef();

  const sideBarHandler = (value) => {
    value === "show"
      ? (sideBarRef.current.className = `${styles.container} ${styles.show}`)
      : (sideBarRef.current.className = styles.container);
  };
  useEffect(() => {
    filterHandler(selected);
  }, [selected]);

  return (
    <>
      <Header selectedValue={selected} />
      <FaBars
        className={styles.listIcon}
        onClick={() => sideBarHandler("show")}
      />
      <div className={styles.container} ref={sideBarRef}>
        <ul className={styles.ul}>
          <li
            className={`${styles.li} ${styles.selected} `}
            data-value="all"
            onClick={(e) => setSelected(e.target.dataset.value)}
          >
            all todos
          </li>
          <li
            className={styles.li}
            data-value="important"
            onClick={(e) => setSelected(e.target.dataset.value)}
          >
            important
          </li>
          <li
            className={styles.li}
            data-value="completed"
            onClick={(e) => setSelected(e.target.dataset.value)}
          >
            completed
          </li>
          <li
            className={styles.li}
            data-value="unCompleted"
            onClick={(e) => setSelected(e.target.dataset.value)}
          >
            unCompleted
          </li>
        </ul>
        <BsChevronLeft
          className={styles.closeIcon}
          onClick={() => sideBarHandler("hide")}
        />
      </div>
    </>
  );
};
export default SideBar;
