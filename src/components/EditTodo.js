import styles from "./EditTodo.module.css";
import { useRef, useEffect, useState } from "react";

const EditTodo = ({ todo, onEdit, setEdit }) => {
  const [inputValue, setInputValue] = useState(todo.text);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    onEdit(todo.id, inputValue);
    setEdit({ id: null, isCompleted: false, text: "" });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          type="text"
          value={inputValue}
          className={styles.input}
          onChange={changeHandler}
          ref={inputRef}
        ></input>
        <button type="submit" className={styles.btn}>
          edit
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
