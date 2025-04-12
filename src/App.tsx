// import React from 'react';
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Todos, { type Todo } from './components/Todos';
import AddTodo from './components/AddToto';

function App() {

  const savedTodos = localStorage.getItem('todos');
  const parsedTodos: Todo[] | null = savedTodos ? JSON.parse(savedTodos) : null;

  const [todos, setTodos] = useState<Todo[]>(parsedTodos ?? [
    {
      id: '1',
      title: 'Learn React',
      completed: false,
    },
    {
      id: '2',
      title: 'Learn TypeScript',
      completed: true,
    },
    {
      id: '3',
      title: 'Build a Todo App',
      completed: false,
    },
  ]);

  function onAddTodo (title: string) {
    const newTodo: Todo = {
      id: Math.random().toString(36).slice(2),
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  }

  function onToggleTodo (id: string) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  return (
    <>
      <div>
        <Todos todos={todos} onToggleTodo={onToggleTodo} />
        <AddTodo onAddTodo={onAddTodo} />
      </div>
    </>
  );
}

export default App;
