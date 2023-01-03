import React, { useState, useContext, useReducer } from "react";

const TodoContext = React.createContext();
const TodoContextDispatcher = React.createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoContextDispatcher.Provider value={setTodos}>
        {children}
      </TodoContextDispatcher.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
export const useTodos = () => useContext(TodoContext);
export const useTodosActions = () => {
  const todos = useContext(TodoContext);
  const setTodos = useContext(TodoContextDispatcher);
  const addTodoHandler = (inputValue) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
      isImportant: false,
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
  const importantHandler = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    const todo = { ...todos[index] };
    todo.isImportant = !todo.isImportant;
    const updatedTodos = [...todos];
    updatedTodos[index] = todo;
    setTodos(updatedTodos);
  };
  const filterHandler = (type) => {
    const allTodos = [...todos];
    switch (type) {
      case "all": {
        return setTodos(todos);
      }
      case "completed": {
        const filteredTodos = allTodos.filter((todo) => todo.isCompleted);
        return setTodos(filteredTodos);
      }
      case "unCompleted": {
        const filteredTodos = allTodos.filter((todo) => !todo.isCompleted);
        return setTodos(filteredTodos);
      }
      case "important": {
        const filteredTodos = allTodos.filter((todo) => todo.isImportant);
        return setTodos(filteredTodos);
      }
    }
  };
  return {
    filterHandler,
    editHandler,
    removeHandler,
    completeHandler,
    addTodoHandler,
    importantHandler,
  };
};
