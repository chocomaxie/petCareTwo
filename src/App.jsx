import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Firstpage from './Firstpage';
import Shelter from './components/Shelter';
import Home from './components/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Firstpage />} />
        <Route path='shelter' element={<Shelter />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
