import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddConcerts from './Pages/AddConcerts'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="addConcert" element={<AddConcerts />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
