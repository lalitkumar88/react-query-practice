import React from "react";
import { useQuery } from "@tanstack/react-query";
const BASE_URL = "https://jsonplaceholder.typicode.com";

const PostsRQ = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: [""],
    queryFn: () => {
      return fetch(`${BASE_URL}/posts`);
    },
  });

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log(data);
  

  return <div>PostsRQ</div>;
};

export default PostsRQ;
