import React from "react";
import {Link} from 'react-router-dom'

function Header (){
    return(
        <div className="navbar">
        
         <Link className="links" to='/'>Home</Link>
         <Link className="links" to='Input' target='-blank'>Input</Link>
         <Link className="links" to='Counter'>Counter</Link>
         <Link className="links" to='Calculator'>Calculator</Link>
         <Link className="links" to='Regforms'>Regforms</Link>
         <Link className="links" to='Todo'>Todo</Link>
         <Link className="links" to='LikeDislike'>LikeDislike</Link>
        </div>
    )
}
export default Header;