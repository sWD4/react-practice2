import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
  return (
    <>
    <div>this is About page</div>
    <button onClick={()=>navigate('/')}>go to home page</button>
    </>
  )
}

export default About