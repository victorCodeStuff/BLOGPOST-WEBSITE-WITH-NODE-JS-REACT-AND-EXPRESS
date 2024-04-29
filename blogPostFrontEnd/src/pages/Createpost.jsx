import "./pagesStyling.css"

function Createpost() {
 return <>
  <div id="inputfield">
  
    <form >
     <label>TITLE FOR YOUR POST</label>
      <input id="createpostform" type="text">

      </input>
      <label>CONTENT OF YOUR POST</label>
      <textarea id="textAreaPost">
        
      </textarea>
      <button>
      POST!
    </button>
    </form>
  </div>
  </> 
 
}

export default Createpost;