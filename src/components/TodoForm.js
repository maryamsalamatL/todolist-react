import { useState } from "react";

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
    <form onSubmit={submitHandler}>
      <input type="text" value={inputValue} onChange={changeHandler}></input>
      <button type="submit">add</button>
    </form>
  );
};

export default TodoForm;
