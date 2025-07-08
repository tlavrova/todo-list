import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Todo List</h1>
        <TodoInput addTodo={addTodo} />
        {/* Todo list will be added here later */}
      </div>
    </div>
  );
}

export default App;
