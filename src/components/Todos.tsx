// import React from "react";

import { FC } from "react";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

interface TodosProps {
  todos: Todo[];
}

const Todos: FC<TodosProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly />
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
