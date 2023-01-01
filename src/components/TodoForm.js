import { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodoHandler }) => {
  const [inputValue, setInputValue] = useState("");
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("enter todo");
      return;
    }
    addTodoHandler(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        type="text"
        value={inputValue}
        onChange={changeHandler}
        className={styles.input}
      ></input>
      <button type="submit" className={styles.btn}>
        add
      </button>
    </form>
  );
};

export default TodoForm;
