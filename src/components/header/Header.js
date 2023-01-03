import styles from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.inputBox}>
        <BsSearch className={styles.icon} />
        <input type="search" className={styles.input} />
      </div>
    </div>
  );
};

export default Header;
