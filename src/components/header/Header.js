import styles from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { useTodosActions } from "../provider/TodoProvider";

const Header = () => {
  const { filterHandler } = useTodosActions();
  return (
    <div className={styles.header}>
      <div className={styles.inputBox}>
        <BsSearch className={styles.icon} />
        <input
          type="search"
          className={styles.input}
          onChange={(e) => filterHandler("search", e)}
        />
      </div>
    </div>
  );
};

export default Header;
