import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Posts from './components/Posts'
import NavBar from './components/Navbar'
import CreatePost from './components/CreatePost'


export default function App() {
  const [token, setToken] = useState("")
  return (
    <div>
      <h1>Winnie's Craigslist</h1>
      <Routes>
        <Route path='/register' element={<Register token={token} setToken={setToken}/>}/>
        <Route path='/login' element={<Login token={token} setToken={setToken}/>}/>
        <Route path='/posts' element={<Posts token={token} setToken={setToken}/>}/>
        <Route path='/createPost' element={<CreatePost token={token} setToken={setToken}/>}/>
      </Routes>
      <NavBar />
      </div>
  )
}


