import { FC, useContext } from "react";
import TodoItem from "./Todo";
import { TodoContext } from "../../store/todo-context";

const Todos: FC = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default Todos;
