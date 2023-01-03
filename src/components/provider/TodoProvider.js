import React, { useState, useContext, useReducer } from "react";

const TodoContext = React.createContext();
const FilterTodoContext = React.createContext();
const TodoContextDispatcher = React.createContext();
const FilterTodoContextDispatcher = React.createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoContextDispatcher.Provider value={setTodos}>
        <FilterTodoContext.Provider value={filterTodos}>
          <FilterTodoContextDispatcher.Provider value={setFilterTodos}>
            {children}
          </FilterTodoContextDispatcher.Provider>
        </FilterTodoContext.Provider>
      </TodoContextDispatcher.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
export const useTodos = () => useContext(TodoContext);
export const useFilterTodos = () => useContext(FilterTodoContext);

export const useTodosActions = () => {
  const todos = useContext(TodoContext);
  const setTodos = useContext(TodoContextDispatcher);
  const filterTodos = useContext(FilterTodoContext);
  const setFilterTodos = useContext(FilterTodoContextDispatcher);
  const addTodoHandler = (inputValue) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
      isImportant: false,
      text: inputValue,
    };
    setFilterTodos([...filterTodos, newTodo]);
    setTodos([...todos, newTodo]);
  };
  const completeHandler = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    const todo = { ...todos[index] };
    todo.isCompleted = !todo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = todo;
    setFilterTodos(updatedTodos);
    setTodos(updatedTodos);
  };
  const removeHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id != id);
    setFilterTodos(filteredTodos);
    setTodos(filteredTodos);
  };
  const editHandler = (id, inputValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const todo = { ...todos[index] };
    todo.text = inputValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = todo;
    setFilterTodos(updatedTodos);
    setTodos(updatedTodos);
  };
  const importantHandler = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    const todo = { ...todos[index] };
    todo.isImportant = !todo.isImportant;
    const updatedTodos = [...todos];
    updatedTodos[index] = todo;
    setFilterTodos(updatedTodos);
    setTodos(updatedTodos);
  };
  const filterHandler = (type, e) => {
    switch (type) {
      case "all": {
        return setTodos(filterTodos);
      }
      case "completed": {
        const filteredTodos = filterTodos.filter((todo) => todo.isCompleted);
        return setTodos(filteredTodos);
      }
      case "unCompleted": {
        const filteredTodos = filterTodos.filter((todo) => !todo.isCompleted);
        return setTodos(filteredTodos);
      }
      case "important": {
        const filteredTodos = filterTodos.filter((todo) => todo.isImportant);
        return setTodos(filteredTodos);
      }
      case "search": {
        const value = e.target.value;
        const filteredTodos = filterTodos.filter((todo) =>
          todo.text.toLowerCase().includes(value.toLowerCase())
        );
        setTodos(filteredTodos);
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
