import { useTodos } from "../../TodosContext.jsx";
import Todo from "./Todo.jsx";

export default function TodosList() {
  const store = useTodos();

  return (
    <>
      <div className="todos">

        {store.todos.map(todo =>
          <Todo
            todo={todo}
            key={todo.id}
          />
        )}
      </div>
    </>
  );
}
