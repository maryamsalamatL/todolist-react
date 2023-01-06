import React, { useState, useContext, useReducer } from "react";
import _ from "lodash";

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
      date: new Date().toISOString(),
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
  const filterHandler = (selectedValue) => {
    if (selectedValue === "all") {
      setTodos(filterTodos);
      return filterTodos;
    } else if (selectedValue === "important") {
      const filteredTodos = filterTodos.filter((todo) => todo.isImportant);
      setTodos(filteredTodos);
      return filteredTodos;
    } else if (selectedValue === "completed") {
      const filteredTodos = filterTodos.filter((todo) => todo.isCompleted);
      setTodos(filteredTodos);
      return filteredTodos;
    } else if (selectedValue === "unCompleted") {
      const filteredTodos = filterTodos.filter((todo) => !todo.isCompleted);
      setTodos(filteredTodos);
      return filteredTodos;
    }
  };
  const searchHandler = (e, selectedValue) => {
    const filteredTodos = filterHandler(selectedValue);
    const value = e.target.value;
    const updatedTodos = filteredTodos.filter((todo) =>
      todo.text.toLowerCase().includes(value.toLowerCase())
    );
    setTodos(updatedTodos);
  };
  const sortHandler = (value, filterValue) => {
    const filteredTodos = filterHandler(filterValue);
    if (value === "oldest") {
      setTodos(_.orderBy(filteredTodos, ["date"], ["asc"]));
    } else {
      setTodos(_.orderBy(filteredTodos, ["date"], ["desc"]));
    }
  };
  return {
    editHandler,
    removeHandler,
    completeHandler,
    addTodoHandler,
    importantHandler,
    filterHandler,
    searchHandler,
    sortHandler,
  };
};
