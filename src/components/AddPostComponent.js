import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

const BASE_API_URL = `https://jsonplaceholder.typicode.com`;

function AddPostComponent({ show, modal, posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  const addPosts = async (title, body, id) => {
    try {
      let response = await axios.post(`${BASE_API_URL}/posts`, {
        title: title,
        body: body,
      });
      setPosts([response.data, ...posts]);
      setTitle("");
      setBody("");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={modal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Tambahkan postingan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Judul</Form.Label>
              <Form.Control type="text" value={title} onChange={(event) => setTitle(event.target.value)} autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Isi Postingan</Form.Label>
              <Form.Control as="textarea" rows={3} value={body} onChange={(event) => setBody(event.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modal}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Tambah
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPostComponent;
