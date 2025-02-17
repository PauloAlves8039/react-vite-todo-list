import { useTodos } from "../../TodosContext";
import "./Todo.scss";

export default function Todo({ todo }) {
    const store = useTodos();

    function handleDelete() {
        if (confirm("Are you sure you want to delete the to-do?")) {
            store.dispatch({
                type: "deleted",
                id: todo.id
            });
        }
    }
    
    return (
        <>
            <div className={`todo ${todo.isDone ? "done" : ""}`}>
                <button onClick={handleDelete} className="erase">
                    x erase
                </button>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                <div className="task-check">
                    <input
                        onClick={() => store.dispatch({
                            type: "toggledIsDone",
                            id: todo.id
                        })}
                        type="checkbox"
                        defaultChecked={todo.isDone}
                    />
                    <label>
                        {!todo.isDone ? "To-Do" : "Done"}
                    </label>
                </div>
            </div>
        </>
    );
}
