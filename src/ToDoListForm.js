import React from "react";
import uuid from 'react-uuid'
import './ToDoListForm.css'

class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDoItem: "" };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
      this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault() //prevent page from refreshing
    const newToDo = {...this.state, id: uuid(), done: false}
    this.props.addTodo(newToDo)
    this.setState({ toDoItem: "" }) // reset the forms
  }

  render() {
    return (
      <div className="ToDoListForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="toDoItem">ToDo</label>
          <input
            name="toDoItem"
            id="toDoItem"
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.toDoItem}
          />
          <button className="fas fa-plus"></button>
        </form>
      </div>
    );
  }
}

export default ToDoListForm;
