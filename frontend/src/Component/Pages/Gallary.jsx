import React from 'react'
import "./Gallary.css"
import {useState, useEffect} from "react";
import PersonIcon from '@mui/icons-material/Person';
import TitleIcon from '@mui/icons-material/Title';
import ColorLensIcon from '@mui/icons-material/ColorLens'

const Gallary = () => {
    const [state, setState]  = useState([])

    useEffect (() => {
        fetchData()
    }, [])
    const fetchData = async() => {
        const res = await fetch("http://localhost:3030/gallary")
        const data = await res.json();
        console.log(data);
        setState(data);
    }


  return (
    <div className="conatiner">

      <div className="upperImg">
      {/* <img src="https://www.kindpng.com/picc/m/652-6523798_gallery-blk-calligraphy-hd-png-download.png" alt="" /> */}

      <h1>🖼️Welcome to my gallery page!🎨</h1>

       <h4>Here you can browse through a collection of my work, including paintings, drawings art. I am constantly creating new pieces, so be sure to check back often.
        I hope you enjoy my work!</h4>
      </div>

      <div className="display-card">
        {state.map((e) => (
          <div key={e._id} className="card">
            <img
              src={e.image} 
             
              width="350px"
              height="350px"
            />
            <div className="details">
              <h2>
                <PersonIcon className="icon" />
                Name: {e.name}
              </h2>
              <hr />
              <div className="detail2">
                <h3>
                  <ColorLensIcon className="icon" />
                  Technique: {e.technique}
                </h3>
                <h3>
                  <TitleIcon className="icon" />
                  Artist: {e.artist}
                </h3>

               
              </div>
            </div>
            <button className="showmore">
              Show More
            </button>
          </div>
        ))}
      </div>
      
    </div>
  )
   
  }
export default Gallary