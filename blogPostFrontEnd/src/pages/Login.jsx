import axios from 'axios'
import {  useState } from 'react';
function Login() {

  const [userLogged,setUserLogged] = useState(false)

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
    console.log( response.data)
    
    const finalId = response.data
    if (response.data.sucess){
      console.log("Login sucessfull")
    }
    else if(finalId < "1"){
      setUserLogged(false)
      console.log(userLogged)
    }
    
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
    {userLogged ? (
      <p>Logout</p> // Content when active
    ) : (
      <p>The element is not active.</p> // Content when not active
    )}
    </button>
  </form>
</div>
</>
}

export default Login;