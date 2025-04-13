import { createContext, FC, PropsWithChildren, useState } from "react";
import Todo from "../models/todo";

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: (title: string) => {},
  toggleTodo: (id: string) => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const savedTodos = localStorage.getItem("todos");
  const parsedTodos: Todo[] | null = savedTodos ? JSON.parse(savedTodos) : null;

  const [todos, setTodos] = useState<Todo[]>([
    ...(parsedTodos ?? [
      new Todo("Learn React"),
      new Todo("Learn TypeScript"),
      new Todo("Build a Todo App"),
    ]),
  ]);

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
  
  const todosCtx: TodoContextType = {
    todos,
    addTodo: onAddTodo,
    toggleTodo: onToggleTodo,
    removeTodo: onRemoveTodo,
  };

  return (
    <TodoContext.Provider value={todosCtx}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

