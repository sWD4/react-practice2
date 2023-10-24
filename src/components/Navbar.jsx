import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='main'>
      <div className="left">
        <h1 className='logo_text'>Navbar</h1>
      </div>
      <div className="right">
        <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/about'}><li>About</li></Link>
          <Link to={'/contact'}><li>Contact</li></Link>
          <Link to={'/blog'}><li>Blog</li></Link>
        </ul>
      </div>
    </div>
  );
}

// function AnotherComponent() {
//   return( 
//   <div>Another Component</div>
//   );
// }

export default Navbar;
