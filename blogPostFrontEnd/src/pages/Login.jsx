import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

function Login() {


  const [userLogged,setUserLogged] = useState(false)
  const navigate = useNavigate();

 

  function logUser(event){
    event.preventDefault()
    const loginUserName = event.target.elements.loginUserName.value;
    const loginUserPassword = event.target.elements.loginUserPassword.value;
    console.log("Your name: " + loginUserName + "\nYour password: " + loginUserPassword)
    const logReq = {
    name: loginUserName,
    password: loginUserPassword 
    }
  
   
   axios.post("http://localhost:3000/login", logReq)
   .then(response =>{
    console.log(response.data)
    const userStatus = response.data.userStatus
    setUserLogged(userStatus)
    console.log("this is the status of login:",userLogged)
    if(userStatus === true){
      navigate("/dashboard")
      
    }
    if (response.data.userToken){
      localStorage.setItem("user", JSON.stringify(response.data))
         console.log(response.data.userToken)
         let token = response.data.userToken
         localStorage.setItem("Token","Bearer " + token)
         axios.defaults.headers.common['Authorization'] = loginUserName + token;
    
     return response.data
  }
  return response.data
})
}
 
  return <>
  <div id="inputfield">
  
  <form onSubmit={logUser} >
   <label>YOUR NAME</label>
    <input htmlFor="loginUserName" id="loginUserName" className="createuserform" type="text">

    </input>
    <label>YOUR PASSWORD</label>
       <input htmlFor="loginUserPassword" id="loginUserPassword" className="createuserform" type="text">

    </input>
    <button type="submit">
   
      <p>Login</p> 
  
    </button>
  </form>
</div>
</>
}

export default Login;