import styles from "./SideBar.module.css";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
const SideBar = () => {
  return (
    <>
      <FaBars className={styles.listIcon} />
      <div className={styles.container}>
        <ul className={styles.ul}>
          <li className={`${styles.li} ${styles.selected} `}>all todos</li>
          <li className={styles.li}>completed</li>
          <li className={styles.li}>unCompleted</li>
          <li className={styles.li}>important</li>
        </ul>
        <BsChevronLeft className={styles.closeIcon} />
      </div>
    </>
  );
};

export default SideBar;
