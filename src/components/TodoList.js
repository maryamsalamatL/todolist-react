import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <div>add some todos</div>;

    return todos.map((todo) => {
      return <Todo todo={todo} key={todo.id} />;
    });
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
