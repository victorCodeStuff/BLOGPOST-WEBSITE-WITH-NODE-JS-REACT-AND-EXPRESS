import { useEffect, useState } from "react";
import axios from "axios";
import "../components/posts.css"
function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setPosts(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
        // display an error message to the user
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
            <p className="postContent">{item.postText}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Posts;
