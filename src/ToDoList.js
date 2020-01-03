import React from "react";
import ToDo from "./ToDo";
import ToDoListForm from "./ToDoListForm";
import "./ToDoList.css";
import uuid from "react-uuid";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ toDoItem: "take out the rubbish", id: uuid(), done: false }]
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  addTodo(todo) {
    let newToDo = { ...todo };
    this.setState(st => ({
      todos: [...st.todos, newToDo]
    }));
  }

  remove(id) {
    console.log("removing");
    this.setState(st => ({
      todos: st.todos.filter(todo => todo.id !== id)
    }));
  }

  updateItem(id, updatedItem) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, toDoItem: updatedItem };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: (todo.done = !todo.done) };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <ToDo
        item={todo.toDoItem}
        key={todo.id}
        id={todo.id}
        remove={() => this.remove(todo.id)}
        updateItem={this.updateItem}
        toggleToDo={() => this.toggleCompletion(todo.id)}
        isDone={todo.done}
      />
    ));

    return (
      <div className="ToDoList">
        <h1>
            ToDo List<span>A Simple React ToDo List App</span>
        </h1>
        <ol>{todos}</ol>
        <ToDoListForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default ToDoList;
