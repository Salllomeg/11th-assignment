import React from 'react';
import { useTaskContext } from '../context/store/TaskContext';
import Trash from '../assets/Trash.png';

const List: React.FC = () => {
  const { tasks, removeTask } = useTaskContext();

  function handleRemoveTask(task: string): void {
    removeTask(task);
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span>{task}</span>
          <button 
            className="remove-button" 
            onClick={() => handleRemoveTask(task)}
          >
            <img src={Trash} alt="Remove Task" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;