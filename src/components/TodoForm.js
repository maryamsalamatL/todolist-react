import { useState } from "react";
import styles from "./TodoForm.module.css";
import FormComponent from "../common/FormComponent";
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
    <FormComponent
      styles={styles}
      inputValue={inputValue}
      submitHandler={submitHandler}
      changeHandler={changeHandler}
      text="add"
    />
  );
};

export default TodoForm;
