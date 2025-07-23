import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.scss"
import photo from "../../photo/logo1.png" 

function NavBar() {
  const [open, setOpen] = useState(false);
  // const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
      
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
    <div className="center">
        <a href="/" className="logo">
          <img src={photo} alt="" />
          
        </a>
    </div>
      <div className="right">
        {/* {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpeg"} alt="" />
            <span>{currentUser.username || "Helsa"}</span>
          </div>
        ) : ( */}
          {
          (

          <>

            <a href="/login">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <GiHamburgerMenu style={{ width: '50px', height: '50px' }} onClick={() => setOpen((prev) => !prev)}/>
        
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
