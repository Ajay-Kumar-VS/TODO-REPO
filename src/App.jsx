
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
// import { todoContext } from "./ContextApi/Context";
import './App.css'

function App() {

  return (
    <>
      <div className="app-main">
        <h1>TODO</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
