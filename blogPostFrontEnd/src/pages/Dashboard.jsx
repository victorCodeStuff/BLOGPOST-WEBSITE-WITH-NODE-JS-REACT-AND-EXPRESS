
import "./pagesStyling.css"

import { useNavigate } from "react-router-dom"

function DashBoard() {

const navigate = useNavigate()

let userData = JSON.parse(localStorage.getItem('user'))
   // const token = localStorage.getItem('token')

  function removeUser (){
   localStorage.removeItem("Token")
   localStorage.removeItem("user")
  
   navigate("/")
  }
     

  
return (<>
  <div id='dashboardContainer'>
    <div>
      <div id='userNameDash'>
          Your username is:{JSON.stringify(userData.userName)}
      </div>
         
      <div id='userPassword'>
      Your password is:{JSON.stringify(userData.userPassword)}
      </div>
    <button onClick={removeUser}>
      Logout
    </button>
   
    </div>
  </div>
  </>

  )
}

export default DashBoard;