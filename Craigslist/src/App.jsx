import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Posts from './components/Posts'
import NavBar from './components/Navbar'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Winnie's Craigslist</h1>
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/posts' element={<Posts />}/>
      </Routes>
      <NavBar />
      </div>
  )
}


