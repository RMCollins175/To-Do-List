import React from "react";
import "./ToDo.css";

class ToDo extends React.Component {


  render() {

    return (
      <div className="ToDo">
        <div className={this.props.done ? "ToDo-done" : "ToDo-normal"} onClick={this.props.strikeThrough}>
          <li className="List">
            {this.props.item}
            <button onClick={this.props.remove}>X</button>
          </li>
        </div>
      </div>
    );
  }
}

export default ToDo;
