import styles from "./EditTodo.module.css";
import { useState } from "react";
import FormComponent from "../common/FormComponent";
const EditTodo = ({ todo, onEdit, setEdit }) => {
  const [inputValue, setInputValue] = useState(todo.text);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("enter todo");
      return;
    }
    onEdit(todo.id, inputValue);
    setEdit({ id: null, isCompleted: false, text: "" });
  };
  return (
    <FormComponent
      styles={styles}
      inputValue={inputValue}
      submitHandler={submitHandler}
      changeHandler={changeHandler}
      text="edit"
    />
  );
};

export default EditTodo;
