import React from "react";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            My Todo List
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/addTodo">
            Add Todo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
