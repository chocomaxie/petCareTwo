import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import Shelter from './components/Shelter';
import Home from './components/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='shelter' element={<Shelter />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
