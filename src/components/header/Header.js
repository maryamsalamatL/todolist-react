import styles from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { useTodosActions } from "../provider/TodoProvider";
import Sort from "../sort/Sort";

const Header = ({ selectedValue }) => {
  const { searchHandler } = useTodosActions();

  const changeHandler = (e) => {
    searchHandler(e, selectedValue);
  };
  return (
    <div className={styles.header}>
      <div className={styles.inputBox}>
        <BsSearch className={styles.icon} />
        <input
          type="search"
          className={styles.input}
          onChange={changeHandler}
        />
        <Sort filterValue={selectedValue} />
      </div>
    </div>
  );
};

export default Header;
