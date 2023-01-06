import styles from "./Sort.module.css";
import { useState, useEffect } from "react";
import { useTodosActions } from "../provider/TodoProvider";

const Sort = ({ filterValue }) => {
  const [value, setValue] = useState("");
  const { sortHandler } = useTodosActions();
  useEffect(() => {
    sortHandler(value, filterValue);
  }, [value]);
  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="newest" className={styles.option} selected>
          Newest
        </option>
        <option value="oldest" className={styles.option}>
          Oldest
        </option>
      </select>
    </div>
  );
};

export default Sort;
