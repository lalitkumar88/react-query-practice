import React, { useState, useEffect } from "react";

const PostsTraditional = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const BASE_URL = "https://jsonplaceholder.typicode.com";

  const fetchInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      const data = await response.json(); // Correctly parse the JSON data
      setPosts(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>Error has occurred...</div>;
  }

  return (
    <>
      <h1>test line</h1> 
      <div className="post-list">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    </>
  );
};

export default PostsTraditional;
