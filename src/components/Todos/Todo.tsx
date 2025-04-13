import { FC, MouseEvent } from "react";
import Todo from "../../models/todo";
import classes from "./Todo.module.css";

interface TodoItemProps {
  todo: Todo;
  onCompletedClick: (evt: MouseEvent<HTMLInputElement>) => void;
  onRemoveClick: (evt: MouseEvent<HTMLButtonElement>) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  todo,
  onCompletedClick,
  onRemoveClick,
}) => {

  function confirmRemove (evt: MouseEvent<HTMLButtonElement>) {
    const confirmed = window.confirm("Are you sure you want to remove this todo?");
    if (confirmed) {
      onRemoveClick(evt);
    }
  }

  return (
    <li className={classes.todoRow}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={onCompletedClick}
        />
        {todo.title}
      </div>
      <button onClick={confirmRemove}>X</button>
    </li>
  );
};

export default TodoItem;
