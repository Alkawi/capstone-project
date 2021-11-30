import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddConcerts from './Pages/AddConcerts'
import Dashboard from './Pages/Dashboard'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addConcert" element={<AddConcerts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
