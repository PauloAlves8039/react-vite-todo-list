import Home from "./views/Home/Home";
import Header from "./components/Header/Header";
import { TodosContext } from "./TodosContext.jsx";
import todosReducer from "./TodosReducer.jsx";
import { useState } from "react";
import { useReducer } from "react";

import "./App.scss";

const initialTodos = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <>
      <main>
        <TodosContext.Provider value={{todos, dispatch}}> 
          <Header appName="To-Do List with React" />
          <Home />
          </TodosContext.Provider>
      </main>
    </>
  )
}
