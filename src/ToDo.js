import React from "react";
import "./ToDo.css";

class ToDo extends React.Component {
  // we need to keep track of what is showing - the todo item or the edit todo form
  // so we need some state
  constructor(props) {
    super(props);
    this.state = { isEditingTodo: false, toDoItem: this.props.item };
    this.toggleToDoEdit = this.toggleToDoEdit.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  toggleToDoEdit() {
    this.setState({ isEditingTodo: !this.state.isEditingTodo });
  }

  handleUpdateChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateItem(this.props.id, this.state.toDoItem);
    this.setState({ isEditingTodo: false });
  }

  render() {
    let returnResult;
    if (this.state.isEditingTodo) {
      returnResult = (
        <div className="Edit-Form">
          <form onSubmit={this.handleUpdate}>
            <label htmlFor="toDoItem">Edit</label>
            <input
              name="toDoItem"
              id="toDoItem"
              type="text"
              required
              onChange={this.handleUpdateChange}
              value={this.state.toDoItem}
            />
            <button>Update ToDo</button>
          </form>
        </div>
      );
    } else {
      returnResult = (
        <div className="ToDo">
          <li
            className={this.props.isDone ? "ToDo Completed" : "Todo Incomplete"}
            onMouseDown={this.props.toggleToDo}
          >
            {this.props.item}
          </li>
          <div className="ToDo Buttons">
            <button onClick={this.props.remove} className="fas fa-trash-alt"></button>
            <button onClick={this.toggleToDoEdit} className="fas fa-pen"></button>
          </div>
        </div>
      );
    }
    return returnResult;
  }
}

export default ToDo;

// className={this.props.done ? "ToDo-done" : "ToDo-normal"}
