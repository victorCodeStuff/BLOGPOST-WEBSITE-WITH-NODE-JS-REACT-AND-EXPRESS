import { useEffect, useState } from "react";
import "../components/posts.css"
function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:3000/posts", {
          method: "GET",
        })
          .then((response) => response.json() 
          )
          .then((jsonData) => setPosts(jsonData));
       
        // Log the actual data here
      
      } catch (error) {
        console.error("Error fetching data:", error);
      
      }
      
    };

    fetchData(); // Call the async function to perform the fetch
  });

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
