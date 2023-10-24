import React, { useContext } from 'react'
import myContext from '../context/data/myContext'

function ComponentOne() {
    const context = useContext(myContext)
    console.log(context)
    const {name, age} = context
  return (
    <div>
        Name = {name}, 
        age = {age},
       
    </div>
  )
}

export default ComponentOne