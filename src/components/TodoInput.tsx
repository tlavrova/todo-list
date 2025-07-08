import React, { useState } from 'react';
import './TodoInput.css';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add a new todo"
        aria-label="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
