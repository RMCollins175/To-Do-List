import React from "react";
import ToDo from './ToDo'

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <h4>A Simple React ToDo List App</h4>
        <ToDo />
      </div>
    );
  }
}

export default ToDoList;
