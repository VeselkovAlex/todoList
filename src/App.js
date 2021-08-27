import React, { useState } from "react";
import InputTodo from "./InputTodo/InputTodo";
import MapTodo from "./MapTodo/MapTodo";
import s from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className={s.container}>
      <InputTodo todos={todos} setTodos={setTodos} />
      <MapTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
