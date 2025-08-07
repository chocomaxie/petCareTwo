import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import FirstPage  from '/src/components/FirstPage'
import Shelter  from '/src/components/Shelter'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='shelter' element={<Shelter />} />
      </Routes>
    </>
  )
}

export default App
