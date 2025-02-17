import Home from "./views/Home/Home";
import Header from "./components/Header/Header";
import TodosProvider from "./TodosContext.jsx";
import { ToastContainer } from "react-toastify";
import "./App.scss";

export default function App() {

  return (
    <>
      <main>
        <ToastContainer autoClose={3000} />
        <TodosProvider>
          <Header appName="To-Do List" />
          <Home />
        </TodosProvider>
      </main>
    </>
  );
}
