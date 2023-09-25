import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar /> 
    <Routes>
    <Route path='/' element={<TodoList />} />
    <Route path='/add' element={<AddTodo />} />
</Routes>
    </>
    
  );
};

export default App;