import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import Todo from "./models/todo";

function App() {
  const savedTodos = localStorage.getItem("todos");
  const parsedTodos: Todo[] | null = savedTodos ? JSON.parse(savedTodos) : null;

  const [todos, setTodos] = useState<Todo[]>(
    parsedTodos ?? [
      new Todo("Learn React"),
      new Todo("Learn TypeScript"),
      new Todo("Build a Todo App"),
    ]
  );

  function onAddTodo(title: string) {
    const newTodo = new Todo(title);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  }

  function onToggleTodo(id: string) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  function onRemoveTodo(id: string) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  return (
    <main>
      <Todos
        todos={todos}
        onToggleTodo={onToggleTodo}
        onRemoveTodo={onRemoveTodo}
      />
      <AddTodo onAddTodo={onAddTodo} />
    </main>
  );
}

export default App;
