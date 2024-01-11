import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios"

const initialdata = {
image: "",
name: "",
series: "",
size: "",
artist: "",
technique: "",
}


const Admin = () => {
  const [admin, setAdmin] = useState(initialdata)
  console.log(admin);

  const handleChange = (e) => {
    setAdmin({...admin, [e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=> {
    
  const requestOptions = {
   method: "POST",
   headers: {"Content-Type":"application/json"},
   body: JSON.stringify(admin),
  };
  fetch("http://localhost:3030/mypost", requestOptions)
  .then((response)=> response.json())
  .then((data)=> console.log(data));
  alert("post successfully")
  setAdmin(initialdata)
}

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Admin </h1>
      <label style={labelStyle}>Image<input style={inputStyle} type= "text"  name = "image" onChange= {handleChange}/></label>
      <br />
      <label style={labelStyle}>Name<input style={inputStyle}  type= "text"  name = "name" onChange= {handleChange}/></label>
      <br />
      <label style={labelStyle}>Series <input style={inputStyle}  type= "text"  name = "series" onChange= {handleChange}/></label>
      <br />
      <label style={labelStyle}>Size<input style={inputStyle} type= "text"  name = "size" onChange= {handleChange}/></label>
      <br />
      <label style={labelStyle}>Artist<input style={inputStyle} type= "text"  name = "artist"  onChange= {handleChange}/></label>
      <br />
      <label style={labelStyle}>Technique <input style={inputStyle} type= "text"  name = "technique" onChange= {handleChange} /></label>
      <br />
      <button style={buttonStyle} onClick = {handleSubmit}>Submit</button>
    </div>
  );
}

const containerStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
};

const headerStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  marginBottom: '10px',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Admin;
