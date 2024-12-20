import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types for the context
interface TaskContextType {
  tasks: string[];
  addTask: (task: string) => void;
  removeTask: (task: string) => void;
}

// Create the context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Create a provider component
export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  const removeTask = (task: string) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
