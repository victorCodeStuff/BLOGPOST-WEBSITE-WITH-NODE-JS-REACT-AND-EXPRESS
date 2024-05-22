import axios from 'axios'

import { useNavigate } from "react-router-dom"

function Login() {


  
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
    
    console.log("this is the status of login:",userStatus)
    if(userStatus=== true){
      navigate("/dashboard")
      
    }
    if (response.data.userToken){
      
      //storing the user and the user password in the local storage
      localStorage.setItem("user", JSON.stringify(response.data))
      let token = response.data.userToken
         localStorage.setItem("Token","Bearer " + token)
         axios.defaults.headers.common['Authorization'] = loginUserName + token;
    
     return response.data
  }
  return response.data
})
}
 
  return <>
  <div className="inputfield loginField">
  <h1>
    LOGIN
  </h1>
  <form onSubmit={logUser} >

    <input placeholder='YOUR NAME' htmlFor="loginUserName" id="loginUserName" className="createuserform" type="text">

    </input>
   
       <input placeholder='YOUR PASSWORD' htmlFor="loginUserPassword" id="loginUserPassword" className="createuserform" type="text">

    </input>
    <button className="loginButton" type="submit">
   
      <p>LOGIN</p> 
  
    </button>
  </form>
  
</div>

</>
}

export default Login;