import { useContext, useState } from "react";

import "./navbar.scss";



function NavBar(){ 
 const [open, setOpen] = useState(false);


    return( 
         <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>SaiEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      
    </nav>
    )
}

export default NavBar