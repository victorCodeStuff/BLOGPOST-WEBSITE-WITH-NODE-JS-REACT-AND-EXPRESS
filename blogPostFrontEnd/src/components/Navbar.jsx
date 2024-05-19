import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const controlarRedimensionamento = () => {
      setIsMobile(window.innerWidth < 500);
 
    };

    window.addEventListener("resize", controlarRedimensionamento);

    }, []);

    const transformNav = () => {
      setIsMenuOpen(!isMenuOpen)
    }
 const navStyle={
  flexDirection:  isMobile && isMenuOpen ? "column-reverse": "row",
  height: isMobile && isMenuOpen ? "fit-content" : "" ,
  border: isMobile ? "3px solid white" : "",
  gap: isMobile && isMenuOpen ? "10px":"",
  justifyContent: isMobile ? "right":"center",
  alignItems: isMobile ? "center":"",
 }

 const buttonMobile ={
  alignItems: isMobile && isMenuOpen? "center":"",
  display: isMobile && isMenuOpen ? "flex":"" || isMobile ? "none":"",
  height: isMobile && isMenuOpen ? "100%" : "",
  flexDirection:  isMobile && isMenuOpen ? "column":"",
  margin: isMobile && isMenuOpen? "10px":"",
  width: isMobile && isMenuOpen? "100%":"",
  gap: isMobile && isMenuOpen ? "30px":"",
  padding:isMobile && isMenuOpen ? "30px":"",

}
 const buttonNav = {
  display: isMobile ? "" : "none",
  margin:isMobile && isMenuOpen ? "10px":"10px", 
  
}
const buttonBars = {
  display: isMenuOpen && isMobile ? "none" : "flex"
}

return (<>
<nav style={navStyle }
  id="navbarContainer">
    <button onClick={transformNav} id="mobileNavButton" style={buttonNav}>
    <div style={buttonBars}></div>
    <div style={buttonBars}></div>
    <div style={buttonBars}></div>
    <h3  style={{
      display: isMenuOpen && isMobile? "block":"none",
      color:"white",
      fontSize:"40px"
      
    }}>X</h3>
    </button>
    <ul style={buttonMobile} id="nav">
      <li >
        <Link to="./">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/createpost">
          NEW POST
        </Link>
      </li>
      <li>
        <Link to="/createuser">
          NEW USER
        </Link>
      </li>
      <li>
        <Link to="/login">
         Login
        </Link>
      </li>
    </ul>
  </nav>
  </>);
}

export default NavBar;