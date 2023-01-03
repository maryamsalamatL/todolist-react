import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import SideBar from "./sidebar/SideBar";
import Header from "./header/Header";

import { useState } from "react";
import styles from "./TodoApp.module.css";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (inputValue) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
  };
  const completeHandler = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    const todo = { ...todos[index] };
    todo.isCompleted = !todo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = todo;
    setTodos(updatedTodos);
  };
  const removeHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id != id);
    setTodos(filteredTodos);
  };
  const editHandler = (id, inputValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const todo = { ...todos[index] };
    todo.text = inputValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = todo;
    setTodos(updatedTodos);
  };
  return (
    <div className={styles.container}>
      <Header />
      <SideBar />
      <div className={styles.body}>
        <div className={styles.title}>
          <h1>My Todo List</h1>
          <span>2023</span>
        </div>
        <TodoForm addTodoHandler={addTodoHandler} />
        <TodoList
          todos={todos}
          onComplete={completeHandler}
          removeTodo={removeHandler}
          onEdit={editHandler}
        />
      </div>
    </div>
  );
};

export default TodoApp;
