import axios from 'axios'
function Login() {
  function logUser(event){
    event.preventDefault()
    const loginUserName = event.target.elements.loginUserName.value;
    const loginUserPassword = event.target.elements.loginUserPassword.value;
    console.log(loginUserName + " cdfdfdf " + loginUserPassword)
   const logReq = {
    name: loginUserName,
    password: loginUserPassword 
   }
   console.log(logReq.password)
    axios.post("http://localhost:3000/login", logReq).then(response =>{
      console.log("Response from server:", response.data)
     
      if (response.data == true){
        console.log("Its working, i guess")

      }
    })
  
  
  }
  
  return <>
  <div id="inputfield">
  
  <form onSubmit={logUser} >
   <label>YOUR NAME</label>
    <input id="loginUserName" className="createuserform" type="text">

    </input>
    <label>YOUR PASSWORD</label>
       <input id="loginUserPassword" className="createuserform" type="text">

    </input>
    <button type="submit">
      lOGIN
    </button>
  </form>
</div>
</>
}

export default Login;