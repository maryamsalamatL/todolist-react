import { useRef } from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";

const Todo = ({ todo, onComplete, styles }) => {
  const liRef = useRef();
  return (
    <div
      className={`${styles.list} ${
        todo.isCompleted === true && styles.Completed
      }`}
      key={todo.id}
    >
      <div className={styles.text}>{todo.text}</div>
      <div className={styles.btnBox}>
        <button className={styles.btn}>edit</button>
        <button className={styles.btn} onClick={() => onComplete(todo.id)}>
          {todo.isCompleted === false ? (
            <span>
              <FaRegCircle />
            </span>
          ) : (
            <span>
              <FaRegCheckCircle />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Todo;
