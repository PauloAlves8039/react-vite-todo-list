import Filter from "../../components/Filter/Filter";
import TodosList from "../../components/Todo/TodosList";
import ModalWindow from "../../components/Modal/ModalWindow.jsx";
import AddTodoModal from "../../components/Modal/AddTodoModal.jsx";
import { useTodos } from "../../TodosContext.jsx";

export default function Home() {
  const store = useTodos();

  return (
    <>
        {
          store.modalIsActive && 
          <ModalWindow>
            <AddTodoModal />
          </ModalWindow>
        }

        <div className="container">
            <Filter />
        
            <TodosList />
        </div>
    </>
  );
}
