import React, { useState, useEffect } from 'react';
import './css/Posts.css';

function Posts() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/posts/")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setPosts(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, [])
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
  return (
    <div>
       <ul>
      {posts.map(post => (
        <li key={post.id}>
        {post.title} {post.description}
        </li>
    ))}
  </ul>
    </div>
   
  );
}
}

export default Posts;