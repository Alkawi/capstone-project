import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add">
          <main>Add</main>
        </Route>
        <Route path="/">
          <main>Home</main>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
