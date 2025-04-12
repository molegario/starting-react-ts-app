// import React from "react";

import { FC, MouseEvent } from "react";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

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
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onClick={getOnClickTodo(todo.id)} />
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
