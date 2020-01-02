import React from "react";
import ToDo from "./ToDo";
import ToDoListForm from "./ToDoListForm";
import './ToDoList.css'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { toDoItem: "take out the rubbish" },
        { toDoItem: "clean the dishes" }
      ]
    };
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todo) {
      console.log('add todo')
      let newToDo = {...todo}
    this.setState(st => ({
        todos: [...st.todos, newToDo]
    }))
  }

  render() {
    const todos = this.state.todos.map(m => <ToDo item={m.toDoItem} />);

    return (
      <div className="ToDoList">
        <h1>ToDo List</h1>
        <h4>A Simple React ToDo List App</h4>
        <ol className="ToDoList-List">{todos}</ol>
        <ToDoListForm 
        addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default ToDoList;
