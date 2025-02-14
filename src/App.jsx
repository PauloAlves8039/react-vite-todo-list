import Home from "./views/Home/Home";
import Header from "./components/Header/Header";
import TodosProvider from "./TodosContext.jsx";
import "./App.scss";

export default function App() {

  return (
    <>
      <main>
        <TodosProvider>
          <Header appName="To-Do List with React" />
          <Home />
        </TodosProvider>
      </main>
    </>
  );
}
