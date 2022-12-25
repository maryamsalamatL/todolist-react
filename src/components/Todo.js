const Todo = ({ todo }) => {
  return (
    <div>
      <div>{todo.text}</div>
      <div>
        <button>edit</button>
        <button>complete</button>
      </div>
    </div>
  );
};

export default Todo;
