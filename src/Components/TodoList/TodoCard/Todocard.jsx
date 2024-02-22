// import React from "react";
import { useRef } from "react";
import "./TodoCard.css";
// import { useRef } from "react";
const Todocard = (prop) => {
  let { todo, todoData } = prop;
  let { id, todoName, completionStatus,edited } = todo;
  // let editButtonRef = useRef(0);
  // let completeButtonRef = useRef(0);

  

  function editTodo() {
    let updatedTodo = prompt("Enter Updated Todo");
    
    if(updatedTodo){
      let newTodoData = todoData.map((todoEle) => {
        // console.log(todoEle, "000000");
        // console.log(todoEle.id, id);
        if (todoEle.id === id) {
          return { ...todoEle, todoName: updatedTodo ,edited:true};
        } else {
          return todoEle;
        }
      });
      console.log(newTodoData);
      localStorage.setItem("data", JSON.stringify(newTodoData))
    }
  }

  // console.log(todo,"well")
  function deleteTodo() {
    console.log("first");
    let newTodoData = todoData.filter((todoEle) => {
      console.log(todoEle, "000000");
      console.log(todoEle.id, id);
      if (todoEle.id === id) {
        if (todoEle.completionStatus === false) {
          var r = confirm("Not completed TODO,Still want to Delete!");
          if (r == true) {
            console.log(true);
            return false;
          } else {
            console.log(false);
            return true;
          }
        } else {
          return false;
        }
      } else {
        return true;
      }
    });
    console.log(newTodoData);
    localStorage.setItem("data", JSON.stringify(newTodoData));
  }
  function completeTodo() {
    let newTodoData = todoData.map((todoEle) => {
      console.log(todoEle, "000000");
      console.log(todoEle.id, id);
      if (todoEle.id === id) {
        return { ...todoEle, completionStatus: true };
      } else {
        return todoEle;
      }
    });
    console.log(newTodoData);
    localStorage.setItem("data", JSON.stringify(newTodoData));
  }

  return ( 
    <div
      className="TodoCard-main"
      style={{ backgroundColor: completionStatus ? "green" : "antiquewhite" }}>
      <div className="todoName">{todoName}<p id="edited" style={{color:" #242424",}}>{edited?"(edited)":""}</p></div>
      <button id="edit-button" onClick={editTodo} disabled={completionStatus} >
        Edit
      </button>
      <button id="complete-button" onClick={completeTodo} disabled={completionStatus}>
        Completed
      </button>
      <button id="delete-button" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
};

export default Todocard;
