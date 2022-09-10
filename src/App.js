import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  let [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title);
    let id;
    if (todos.length === 0) {
      id = 0;
    } else {
      id = todos[todos.length - 1].id + 1;
    }
    const newTodo = {
      id: id,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path='/addTodo'
            element={<AddTodo addTodo={addTodo} />}></Route>
          <Route
            exact
            path='/todos'
            element={<Todos todos={todos} onDelete={onDelete} />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
