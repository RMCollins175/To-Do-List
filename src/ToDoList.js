import React from "react";
import ToDo from "./ToDo";
import ToDoListForm from "./ToDoListForm";
import './ToDoList.css'
import uuid from 'react-uuid'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { toDoItem: "take out the rubbish", id: uuid()},
        { toDoItem: "clean the dishes", id: uuid() }
      ]
    };
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todo) {
      let newToDo = {...todo}
    this.setState(st => ({
        todos: [...st.todos, newToDo]
    }))
  }

  remove(id) {
    console.log('removing')
    this.setState(st => ({
        todos: st.todos.filter(t => t.id !== id)
    }))

  }

  render() {
    const todos = this.state.todos.map(m => 
    <ToDo 
    item={m.toDoItem}
    id={m.id}
    remove={() => this.remove(m.id)}
    />);

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
