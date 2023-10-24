import React from 'react'

function ChildComponent2({greet}) {
  return (
    <div>
        <h1>Child Component 2</h1>
        <button onClick={greet}>click</button>
    </div>
  )
}

export default ChildComponent2