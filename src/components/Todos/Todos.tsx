import { FC, MouseEvent } from "react";
import Todo from "../../models/todo";
import TodoItem from "./Todo";

interface TodosProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

const Todos: FC<TodosProps> = ({ todos, onToggleTodo, onRemoveTodo }) => {
  function getOnClickTodo(id: string) {
    return (evt: MouseEvent<HTMLInputElement>) => {
      evt.stopPropagation();
      onToggleTodo(id);
    };
  }

  function getOnRemoveTodo(id: string) {
    return (evt: MouseEvent<HTMLButtonElement>) => {
      evt.stopPropagation();
      onRemoveTodo(id);
    };
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompletedClick={getOnClickTodo(todo.id)}
          onRemoveClick={getOnRemoveTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
