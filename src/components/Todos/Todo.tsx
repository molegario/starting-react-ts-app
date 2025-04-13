import { FC, MouseEvent, useContext } from "react";
import Todo from "../../models/todo";
import classes from "./Todo.module.css";
import { TodoContext } from "../../store/todo-context";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: FC<TodoItemProps> = ({
  todo,
}) => {

  const {
    toggleTodo: onCompletedClick,
    removeTodo: onRemoveClick,
  } = useContext(TodoContext);

  function confirmRemove (evt: MouseEvent<HTMLButtonElement>) {
    evt.stopPropagation(); // Prevent the click event from bubbling up
    const confirmed = window.confirm("Are you sure you want to remove this todo?");
    if (confirmed) {
      onRemoveClick(todo.id);
    }
  }

  return (
    <li className={classes.todoRow}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={() => onCompletedClick(todo.id)}
        />
        {todo.title}
      </div>
      <button onClick={confirmRemove}>X</button>
    </li>
  );
};

export default TodoItem;
