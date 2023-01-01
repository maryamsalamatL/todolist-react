import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
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
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>My Todo List</h1>
        <span>2023</span>
      </div>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplete={completeHandler} />
    </div>
  );
};

export default TodoApp;
