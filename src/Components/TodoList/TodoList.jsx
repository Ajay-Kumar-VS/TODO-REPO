// import React from 'react'

// import { todo } from "node:test"
// import { useContext } from "react"
// import { todoContext } from "../../ContextApi/Context"
// import { useId } from "react"
import { useEffect, useState } from "react";
import Todocard from "./TodoCard/Todocard";
import "./TodoList.css";
const TodoList = () => {
  let [todoData, setTodoData] = useState([]);

  useEffect(() => {
    todoData = Array.of(JSON.parse(localStorage.getItem("data")))[0];
    // console.log(todoData,"hell")
    setTodoData(todoData);
  });
  function AllCompleted() {
    let newTodoData = todoData.map((todoEle) => {
      // console.log(todoEle, "000000");
      // console.log(todoEle.id, id);

      return { ...todoEle, completionStatus: true };
    });
    console.log(newTodoData);
    localStorage.setItem("data", JSON.stringify(newTodoData));
  }
  function deleteAll() {
    confirm("Do you want to delete all TODO")

    localStorage.setItem("data", JSON.stringify([]));
  }
  return (
    <div>
      <div className="list">
        {todoData.map((todo, index) => {
          return <Todocard key={index} todo={todo} todoData={todoData} />;
        })}
      </div>
      {todoData.length?<div>
        <button id="delete-button" onClick={deleteAll}>
          Delete All
        </button>
        <button id="delete-button" onClick={AllCompleted}>
          All Completed
        </button>
      </div>:<h3>NO TASKS</h3>}
    </div>
  );
};

export default TodoList;
