import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Layout from './pages/layout'
import NoPage from './pages/NoPage'
import TrafficLight from './pages/TrafficLight'
import Exercises from './pages/Exercises'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='TrafficLight' element={<TrafficLight/>}/>
        <Route path='Exercises' element={<Exercises/>}/>
        <Route path='NoPage' element={<NoPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
