import {Link , Routes , Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Createpost from "./pages/Createpost"
import Createuser from "./pages/Createuser"
import Login from "./pages/Login"
import DashBoard from "./pages/Dashboard"
import './App.css'
import axios from "axios"
import { useState } from "react"

function App() {
const [userLogged, setUserLogged] = useState(false)

const logReq = {
  name: "loginUserName",
  password: "loginUserPassword "
  }


  axios.post("http://localhost:3000/login", logReq)
  .then(response =>{
   console.log(response.data)
   const userStatus = response.data.userStatus
   setUserLogged(userStatus)
   console.log("this is the status of login:",userLogged)
   if(userStatus === true){
    
     console.log("sdfsdfdfsdfs")
   }
 })


  
return (
  <>
  <BrowserRouter>
  <nav >
    <ul id="nav">
      <li>
        <Link to="./">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/createpost">
          CREATE A NEW POST
        </Link>
      </li>
      <li>
        <Link to="/createuser">
          CREATE A USER
        </Link>
      </li>
      <li>
        <Link to="/login">
         Login
        </Link>
      </li>
    </ul>
  </nav>
  <div id="pagesContainer">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/createpost" element={<Createpost/>}></Route>
      <Route path="/createuser" element={<Createuser/>}></Route>
      <Route path="/login" element={<Login/> }></Route>
     
      <Route path="/dashboard" element={<DashBoard/> }></Route>
    </Routes>
  
  </div>
 
  </BrowserRouter></>    
  )
}

export default App
