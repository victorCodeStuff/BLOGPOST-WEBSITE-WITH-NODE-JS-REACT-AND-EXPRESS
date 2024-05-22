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
      <div className="inputfield newUserField">
        <form onSubmit={newUser} >
          <h1>
            NEW USER
          </h1>
    
          <input placeholder="USER NAME" className="createuserform"  id="name" type="text"></input>
       
          <input placeholder="PASSWORD" className="createuserform"    id="password" type="text"></input>
          <button type="submit">
            <p>
            CREATE
            </p>
          </button>
        </form>
      </div>
    </>
  );
}

export default Createuser;
