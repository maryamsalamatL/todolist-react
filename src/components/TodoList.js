import Todo from "./Todo";
import styles from "./TodoList.module.css";
import { useState } from "react";

const TodoList = ({ todos, onComplete, removeTodo, onEdit }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <div>add some todos</div>;

    return todos.map((todo) => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          styles={styles}
          onComplete={onComplete}
          removeTodo={removeTodo}
          onEdit={onEdit}
        />
      );
    });
  };

  return <div className={styles.container}>{renderTodos()}</div>;
};

export default TodoList;
