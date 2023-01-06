import styles from "./SideBar.module.css";
import { useTodosActions } from "../provider/TodoProvider";
import { FaBars } from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
import { useRef, useEffect } from "react";
import Header from "../header/Header";
import { useState } from "react";
import { useFilterTodos } from "../provider/TodoProvider";

const SideBar = () => {
  const [selected, setSelected] = useState("all");
  const { filterHandler } = useTodosActions();
  const sideBarRef = useRef();
  const todos = useFilterTodos();

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
            className={
              selected === "all" ? `${styles.li} ${styles.selected}` : styles.li
            }
            data-value="all"
            onClick={(e) => setSelected(e.target.dataset.value)}
          >
            <span>all todos</span>
            {todos.length ? (
              <span className={styles.count}>{todos.length}</span>
            ) : (
              ""
            )}
          </li>
          <li
            className={
              selected === "important"
                ? `${styles.li} ${styles.selected}`
                : styles.li
            }
            data-value="important"
            onClick={(e) => setSelected(e.target.dataset.value)}
          >
            <span>important</span>
            {todos.filter((todo) => todo.isImportant).length ? (
              <span className={styles.count}>
                {todos.filter((todo) => todo.isImportant).length}
              </span>
            ) : (
              ""
            )}
          </li>
          <li
            className={
              selected === "completed"
                ? `${styles.li} ${styles.selected}`
                : styles.li
            }
            data-value="completed"
            onClick={(e) => setSelected(e.target.dataset.value)}
          >
            <span>completed</span>
            {todos.filter((todo) => todo.isCompleted).length ? (
              <span className={styles.count}>
                {todos.filter((todo) => todo.isCompleted).length}
              </span>
            ) : (
              ""
            )}
          </li>
          <li
            className={
              selected === "unCompleted"
                ? `${styles.li} ${styles.selected}`
                : styles.li
            }
            data-value="unCompleted"
            onClick={(e) => setSelected(e.target.dataset.value)}
          >
            <span>unCompleted</span>
            {todos.filter((todo) => !todo.isCompleted).length ? (
              <span className={styles.count}>
                {todos.filter((todo) => !todo.isCompleted).length}
              </span>
            ) : (
              ""
            )}
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
