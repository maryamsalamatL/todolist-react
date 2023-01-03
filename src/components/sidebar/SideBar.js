import styles from "./SideBar.module.css";
import { useTodosActions } from "../provider/TodoProvider";
import { FaBars } from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
import { useRef } from "react";
const SideBar = () => {
  const { filterHandler } = useTodosActions();
  const sideBarRef = useRef();
  const sideBarHandler = (value) => {
    value === "show"
      ? (sideBarRef.current.className = `${styles.container} ${styles.show}`)
      : (sideBarRef.current.className = styles.container);
  };
  return (
    <>
      <FaBars
        className={styles.listIcon}
        onClick={() => sideBarHandler("show")}
      />
      <div className={styles.container} ref={sideBarRef}>
        <ul className={styles.ul}>
          <li
            className={`${styles.li} ${styles.selected} `}
            onClick={() => filterHandler("all")}
          >
            all todos
          </li>
          <li className={styles.li} onClick={() => filterHandler("important")}>
            important
          </li>
          <li className={styles.li} onClick={() => filterHandler("completed")}>
            completed
          </li>
          <li
            className={styles.li}
            onClick={() => filterHandler("unCompleted")}
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
