import React from "react";
import Todo from "./Todo";
import Card from "react-bootstrap/Card";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div>
      <div className="container my-3" style={myStyle}>
        <h3 className="text-center my-3">Todos List</h3>
        {props.todos.length === 0 ? (
          <Card className="text-center">
            <Card.Body>No Todos to display</Card.Body>
          </Card>
        ) : (
          props.todos.map((todo) => (
            <Todo todoItem={todo} key={todo.id} onDelete={props.onDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default Todos;
