import axios from "axios"
import "./pagesStyling.css"

function Createpost() {
 function CreateNewPost (event){
  event.preventDefault()
  const postTitle = event.target.elements.postTitle.value;
  const postContent = event.target.elements.textAreaPost.value;
  const postReq = {
    title : postTitle,
    content : postContent
  }
  console.log(postTitle , postContent)
  if (postTitle.length && postContent.length >= 1){
    axios.post("http://localhost:3000/createpost",postReq)
  }
  if (postTitle.length === 0){
    console.log("You need to add a title to your post")
  }
  if (postContent.length === 0){
    console.log("You need to add content to your post")
  }
}
 return <>
  <div className="inputfield">
  
    <form onSubmit={CreateNewPost}>
     <label>TITLE FOR YOUR POST</label>
      <input id="postTitle" type="text">

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