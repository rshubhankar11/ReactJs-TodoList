import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Todo = (props) => {
  return (
    <div>
      <Card className='text-center my-3'>
        <Card.Header>{props.todoItem.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.todoItem.desc}</Card.Text>
          <Button
            variant='outline-danger'
            onClick={() => {
              props.onDelete(props.todoItem);
            }}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Todo;
