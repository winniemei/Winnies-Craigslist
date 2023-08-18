import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HELLO</h1>
      <Routes>
        <Route path='register'></Route>
        <Route path='login'></Route>
        <Route path='posts'></Route>
      </Routes>
    </>
  )
}


