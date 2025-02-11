import "./App.scss";
import Home from "./views/Home/Home";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <main>
        <Header appName="To-Do List with React" />
        <Home />
      </main>
    </>
  )
}
