import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the selected blog post from the backend
    api.get(`/posts/${postId}`).then((response) => {
      setPost(response.data);
    });
  }, [postId]);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          {/* Add comments section here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PostPage;
