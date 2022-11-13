import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import axios from "axios";

const BASE_API_URL = `https://jsonplaceholder.typicode.com`;

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      try {
        let response = await axios.get(`${BASE_API_URL}/posts`);
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  return (
    <div className="app">
      <h1>Daftar Postingan</h1>
      <p>by Kelompok 11</p>
      {posts.map((post) => {
        return (
          <Card className="mb-3">
            <Card.Body key={post.id}>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default App;
