import React, { useState, useEffect } from "react";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando publicaciones...</p>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center mt-5" role="alert">
        ❌ {error}
      </div>
    );

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
          <div className="card-footer">
            <small>ID: {post.id}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
