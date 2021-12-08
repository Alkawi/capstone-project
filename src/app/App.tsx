import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddConcerts from './Pages/AddConcerts'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UserProfile from './Pages/UserProfile'
import logo from '../images/logo.gif'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <img src={logo} width="100%" />
      <Routes>
        <Route path="/">
          <Route path=":username" element={<Dashboard />} />
          <Route path=":username/addConcert" element={<AddConcerts />} />
          <Route path=":username/profile" element={<UserProfile />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
