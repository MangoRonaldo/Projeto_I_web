import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Company from './Components/Pages/Company'
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Navbar from "./Components/Layout/Navbar"
import Container from './Components/Layout/Container'
import Footer from "./Components/Layout/Footer"


function App() {
 return(
  <BrowserRouter>
  <Navbar/>
 <Container customClass="min-height">
 <Routes> 
<Route exact path='/' element={<Home />} />
<Route path='/company' element={<Company/>}/>
<Route path='contact' element={<Contact/>}/>
</Routes>
</Container>
 
 <Footer/>
  </BrowserRouter>
 )
  
}

export default App
