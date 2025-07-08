import React from 'react';
import './TodoItem.css';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  toggleComplete,
  deleteTodo
}) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-text">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
          aria-label={`Mark ${text} as ${completed ? 'incomplete' : 'complete'}`}
        />
        <span>{text}</span>
      </div>
      <button
        className="delete-btn"
        onClick={() => deleteTodo(id)}
        aria-label={`Delete ${text}`}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
