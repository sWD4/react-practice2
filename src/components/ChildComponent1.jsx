//first way to receive props
// import React from 'react'

// function ChildComponent1(props) {
//   return (
//     <>
//     <h1>my name is {props.name}</h1>
//     </>
//   )
// }

// export default ChildComponent1
import React from 'react'

function ChildComponent1({name}) {
  return (
    <div>
        <h1>my name is {name}</h1>
    </div>
  )
}

export default ChildComponent1