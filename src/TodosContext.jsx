import { createContext, useReducer, useContext, useState, useEffect } from "react";
export const TodosContext = createContext("");
 
const initialTodos = (() => {
    try {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
        console.error("Error loading to-dos from localStorage:", error);
        return [];
    }
})();


export default function TodosProvider({children}) {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    const [modalIsActive, setModalIsActive] = useState(false);
    const [filterBy, setFilterBy] = useState("");

    function filteredTodos() {
        switch (filterBy) {
            case "todo":
                return todos.filter(todo => !todo.isDone);
            case "done":
                return todos.filter(todo => todo.isDone);
            default:
                return todos;
        }
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);
    
    return (
        <>
            <main>
                <TodosContext.Provider 
                    value={
                        { 
                            todos, 
                            dispatch,
                            modalIsActive,
                            setModalIsActive,
                            filterBy,
                            setFilterBy,
                            filteredTodos 
                        }
                }>
                    {children}
                </TodosContext.Provider>
            </main>
        </>
    );
}

export function useTodos() {
    return useContext(TodosContext);
}

function todosReducer(todos, action) {
    switch (action.type) {
        case "deleted": {
            return todos.filter(todo => todo.id !== action.id);
        }

        case "added": {
            let newTodo = action.newTodo;
            newTodo.id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1: 1;
            return [...todos, action.newTodo];
        }

        case "toggledIsDone": {
            return (todos.map(todo => {
                if (todo.id === action.id) {
                    todo.isDone = !todo.isDone;
                    return todo;
                } else {
                    return todo;
                }
            }
            ));
        }
    }

}
