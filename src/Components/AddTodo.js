import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and Description are madatory");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3 className="text-center">Add Todo</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Title</Form.Label>
          <Form.Control
            id="title"
            value={title}
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
            placeholder="Title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Description</Form.Label>
          <Form.Control
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
          />
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
};

export default AddTodo;
