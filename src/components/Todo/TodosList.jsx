import { useTodos } from "../../TodosContext.jsx";
import Todo from "./Todo.jsx";

export default function TodosList() {
  const store = useTodos();

  return (
    <>
      <div className="todos">

        {store.filteredTodos().length ? store.filteredTodos().map(todo =>
          <Todo
            todo={todo}
            key={todo.id}
          />
        ) : "No to-dos to be shown. Try clearing the filter or add a new to-do."
        }

      </div>
    </>
  );
}
