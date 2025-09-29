import React from "react";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 py-5">
      <header className="text-center mb-5">
        <h1>🌸 Publicaciones</h1>
        <p>Una lista delicada y dinámica de JSONPlaceholder</p>
        <hr />
      </header>
      <PostsList />
    </div>
  );
}

export default App;
