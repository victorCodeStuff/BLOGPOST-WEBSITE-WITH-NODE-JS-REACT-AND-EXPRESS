import { useEffect, useState } from "react";
import axios from "axios";
import "../components/components.css"
function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        //Update state with fetched data
        setPosts(response.data); 
      } catch (error) {
        //display an error message to the user
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // Call the async function to perform the fetch
  }, []);

  return (
    <>
      <div className="postsPage">
        {posts.map((item) => (
          <div className="postContainer" key={item.postId}>
            <h2 className="postTitle"> {item.postTitle}</h2>
            <p style={{
            wordBreak: "break-all"
            }} className="postContent">{item.postText}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Posts;
