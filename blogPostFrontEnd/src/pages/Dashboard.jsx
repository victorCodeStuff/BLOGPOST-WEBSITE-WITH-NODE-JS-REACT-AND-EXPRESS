
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

      <h1>
        USER INFO
      </h1>
      <div id='userNameDash'>
        <p>
          Your username is:{(userData.userName)}
        </p>
      </div>
         
      <div id='userPassword'>
        <p>
      Your password is:{(userData.userPassword)}
        </p>   
    </div>
    <button onClick={removeUser}>
      <p>
      LOGOUT
      </p>
    </button>

  </div>
  </>

  )
}

export default DashBoard;