import React from 'react'
import {Link as RouterLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import img from "./img.jpeg"
import "./Navbar.css";

const Navbar = () => {
const navigate = useNavigate()
    let link = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Gallary",
            path: "/gallary",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Form",
            path: "/form",
        }
    ]
  return (
    <div className="Navbar"> 

    <div className='logo' style={{cursor: "pointer" }} onClick={() =>{navigate("/")}}>
    
            <img src={img} alt=''/>
          </div>
    
    
    
         <nav>
    
          <RouterLink  className="link" to="/">"Home"</RouterLink>
           <RouterLink  className="link" to="/gallary">"Gallary"</RouterLink>
           <RouterLink  className="link" to="/about">"About"</RouterLink>
           <RouterLink  className="link" to="/contact">"Contact"</RouterLink>
      
      
         </nav>
    
      
           </div>
  )
}

export default Navbar