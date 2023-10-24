import React from 'react'
import MyContext from './myContext'
function MyState(props) {
    // console.log(props)
    const state = {
        name: "shubham Sharma",
        age:"21"
    }
  
         
    
  return (
    <MyContext.Provider value={state}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState