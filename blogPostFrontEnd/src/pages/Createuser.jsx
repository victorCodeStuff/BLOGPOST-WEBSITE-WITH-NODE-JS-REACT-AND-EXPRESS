import axios from "axios"

function Createuser() {
  
  function newUser(event) {
    event.preventDefault();
  
    const name = event.target.elements.name.value;
    const password = event.target.elements.password.value;
    const userData = {
      name,
      password,
    };
    console.log(name + password)
    axios.post("http://localhost:3000/createUser", userData)
      
  }


  return (  <>
      <div id="inputfield">
        <form onSubmit={newUser} >
          <label>USER NAME</label>
          <input className="createuserform"  id="name" type="text"></input>
          <label>PASSWORD</label>
          <input className="createuserform"    id="password" type="text"></input>
          <button type="submit">
            CREATE
          </button>
        </form>
      </div>
    </>
  );
}

export default Createuser;
