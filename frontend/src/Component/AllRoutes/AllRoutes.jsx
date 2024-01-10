import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home";
import Gallary from "../Pages/Gallary";
import About from "../Pages/About";
import Form from "../Pages/Form"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/gallary" element = {<Gallary />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/form" element = {<Form />}/>
        
    </Routes>
  )
}

export default AllRoutes