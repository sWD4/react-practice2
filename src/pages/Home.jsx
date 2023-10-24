import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const heading = {
    backgroundColor:"red",
    color:"white"
  }
  return (
    <div>
      {/* inline css */}
        {/* <h1 style={{backgroundColor:"red", color:"white"}}>this is Home page</h1> */}
      {/* internal css */}
        {/* <h1 style={heading}> this is home page</h1> */}
      
         
        <button onClick={()=>navigate("/about")}>go to About page</button>
    </div>
  )
}

export default Home