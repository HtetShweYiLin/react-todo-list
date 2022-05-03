import "bootstrap/dist/css/bootstrap.min.css"; 
import React from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App;
