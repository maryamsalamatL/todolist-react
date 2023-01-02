import { FaRegCheckCircle, FaRegCircle, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import EditTodo from "./EditTodo";

const Todo = ({ todo, onComplete, styles, removeTodo, onEdit }) => {
  const [edit, setEdit] = useState({ id: null, isCompleted: false, text: "" });

  const renderTodo = () => {
    return (
      <div
        className={`${styles.list} ${
          todo.isCompleted === true && styles.Completed
        }`}
        key={todo.id}
      >
        <div className={styles.text}>{todo.text}</div>
        <div className={styles.btnBox}>
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
          <button className={styles.btn} onClick={() => setEdit(todo)}>
            edit
          </button>
          <button className={styles.btn} onClick={() => removeTodo(todo.id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      {edit.id ? (
        <EditTodo todo={todo} onEdit={onEdit} setEdit={setEdit} />
      ) : (
        renderTodo()
      )}
    </div>
  );
};

export default Todo;
