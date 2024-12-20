import React, { useState } from 'react';
import { useTaskContext } from '../context/store/TaskContext';


const Input: React.FC = () => {
  const [task, setTask] = useState('');
  const { addTask } = useTaskContext();

  const handleAdd = () => {
    addTask(task);
    setTask('');
  };

  return (
    <div className="input-container" >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd} >
        Add task
      </button>
    </div>
  );
};


export default Input;
