import { useTodos } from "../../TodosContext";
import notificationService from "../../utils/notificationService";
import "./Todo.scss";

export default function Todo({ todo }) {
    const store = useTodos();

    function handleDelete() {
        notificationService.warning("To-do deleted successfully!");
        store.dispatch({
            type: "deleted",
            id: todo.id,
        });
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
                        onClick={() => {
                            const newIsDone = !todo.isDone;
                            store.dispatch({
                                type: "toggledIsDone",
                                id: todo.id,
                            });
                            notificationService.info(
                                newIsDone ? "Marked as Done" : "Marked as To-Do"
                            );
                        }}                        
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
