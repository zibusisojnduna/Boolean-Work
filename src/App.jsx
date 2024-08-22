import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Layout from './pages/layout'
import NoPage from './pages/NoPage'
import TrafficLight from './pages/TrafficLight'
import Exercises from './pages/Exercises'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './componenets/card'
import ContactUs from './pages/ContactUs'
import MoviesPage from './pages/Movies'
import MoreInfo from './pages/movieView'
import movies from './assets/movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='TrafficLight' element={<TrafficLight/>}/>
        <Route path='Exercises' element={<Exercises/>}/>
        <Route path='Movies' element={<MoviesPage/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
        <Route path='movieView' element={<MoreInfo/>}/>
        <Route path='NoPage' element={<NoPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
