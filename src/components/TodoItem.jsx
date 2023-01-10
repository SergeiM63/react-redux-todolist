import React from 'react';

export const TodoItem = ({id, text, completed, toggleTodoComplete, removeTodo}) => {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={completed}
        onChange={() => toggleTodoComplete(id)}  
      />
      <span>{text}</span>
      <span
        onClick={() => removeTodo(id)}
        className="delete"
      >
        &times;
      </span>
    </li>
  );
}
