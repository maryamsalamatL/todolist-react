import Todo from "./Todo";
import styles from "./TodoList.module.css";
const TodoList = ({ todos, onComplete }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <div>add some todos</div>;

    return todos.map((todo) => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          styles={styles}
          onComplete={onComplete}
        />
      );
    });
  };

  return <div className={styles.container}>{renderTodos()}</div>;
};

export default TodoList;
