import "./App.css";
import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoContextProvider from "./store/todo-context";

function App() {
  return (
    <TodoContextProvider>
      <main>
        <Todos />
        <AddTodo />
      </main>
    </TodoContextProvider>
  );
}

export default App;
