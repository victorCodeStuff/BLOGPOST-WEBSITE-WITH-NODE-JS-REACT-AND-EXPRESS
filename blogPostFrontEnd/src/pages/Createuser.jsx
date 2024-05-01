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
    if ( password.length && name.length >= 1){
      console.log(name + password)
      axios.post("http://localhost:3000/createUser", userData)  
    }

  if (name.length === 0 ){
    console.log("You need to add a Name to create a user")
  }
  if (password.length === 0 ){
    console.log("You need to add a Password to create a user")
  }
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
