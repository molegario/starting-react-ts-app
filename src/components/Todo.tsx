import { FC, MouseEvent } from "react";
import Todo from "../models/todo";

interface TodoItemProps {
  todo: Todo;
  onClick: (evt: MouseEvent<HTMLInputElement>) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  todo,
  onClick,
}) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onClick={onClick} />
      {todo.title}
    </li>
  );
};

export default TodoItem;