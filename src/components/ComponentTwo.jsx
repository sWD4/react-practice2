import React, { useContext } from 'react'
import myContext from '../context/data/myContext'

function ComponentTwo() {
    const data = useContext(myContext)
    // console.log(data)

  return (
    <div>ComponentTwo
        name: {data.name}, 
        age = {data.age}
    </div>
  )
}

export default ComponentTwo