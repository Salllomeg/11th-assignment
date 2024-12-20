import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import { TaskProvider } from './context/store/TaskContext';
import './app.css';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div>
        <Header />
        <Input />
        <List />
      </div>
    </TaskProvider>
  );
};

export default App;
