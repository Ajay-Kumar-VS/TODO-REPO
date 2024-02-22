// import React from 'react'
import './AddTodo.css'
import { v4 as uuidv4 } from 'uuid';
import {  useState } from "react";
// import { todoContext } from "../../ContextApi/Context";

const AddTodo = () => {
  // const [todoDetails,setTodoDetails]=useState({})
  const [inputboxData, setInputBoxData] = useState("");
  let todoId=uuidv4()
  console.log(todoId)
  let todoData;
  // console.log(localStorage.getItem("data"),"hell")

  if (localStorage.getItem("data") === null) {
    // console.log('inside')
    todoData = [];
    localStorage.setItem("data", JSON.stringify(todoData));
  } else {
    todoData = JSON.parse(localStorage.getItem("data"));
    // console.log(todoData,"memo")
  }

  function addTodo(e) {
    e.preventDefault();
    if(inputboxData===""){
      alert("enter the Todo")
      return
    }
    let todoDetailsObj={
      id:todoId,
      todoName:inputboxData,
      completionStatus:false,
      edited:false

    }
    todoData.push(todoDetailsObj);

    // console.log(todoData)
    localStorage.setItem("data", JSON.stringify(todoData));
    setInputBoxData("")
  }

  return (
    <>
      <div className="main-AddTodo">
        <div className="addTodo">
        <div className="input-container">
            <input id='inputBox'
              type="text"
              placeholder="Enter TODO"
              value={inputboxData}
              onChange={(e) => {
                setInputBoxData(e.target.value);
              }}
            />
            {/* <input type="text" placeholder="Enter TODO"/> */}
          </div>
          <button
            className="Add-button"
            onClick={(e) => {
              addTodo(e);
            }}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
