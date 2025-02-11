import Filter from "../../components/Filter/Filter";
import TodosList from "../../components/Todo/TodosList";

export default function Home() {
  return (
    <>
        <div className="container">
            <Filter />
        
            <TodosList />
        </div>
    </>
  )
}
