import { FC, MouseEvent } from "react";
import Todo from "../models/todo";
import TodoItem from "./Todo";

interface TodosProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
}

const Todos: FC<TodosProps> = ({ todos, onToggleTodo }) => {
  
  function getOnClickTodo (id: string) {
    return (evt: MouseEvent<HTMLInputElement>) => {
      evt.stopPropagation();
      onToggleTodo(id);
    };
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClick={getOnClickTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
