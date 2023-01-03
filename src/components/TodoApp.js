import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import SideBar from "./sidebar/SideBar";
import Header from "./header/Header";
import TodoProvider from "./provider/TodoProvider";
import { useState } from "react";
import styles from "./TodoApp.module.css";
const TodoApp = () => {
  return (
    <TodoProvider>
      <div className={styles.container}>
        <Header />
        <SideBar />
        <div className={styles.body}>
          <div className={styles.title}>
            <h1>My Todo List</h1>
            <span>2023</span>
          </div>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
