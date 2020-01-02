import React from "react";
import "./ToDo.css";

class ToDo extends React.Component {


  render() {

    return (
      <div className="ToDo">
        <div>
          <li className={this.props.isDone ? "ToDo-Done" : "ToDo-NotDone"} onClick={this.props.toggleToDo}>
            {this.props.item}
            <button onClick={this.props.remove}>X</button>
          </li>
        </div>
      </div>
    );
  }
}

export default ToDo;


// className={this.props.done ? "ToDo-done" : "ToDo-normal"}