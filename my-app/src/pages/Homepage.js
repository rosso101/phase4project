import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch recent blog posts from the backend
    api.get('/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Recent Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
