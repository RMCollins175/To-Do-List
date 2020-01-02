import React from "react";
import "./ToDo.css";

class ToDo extends React.Component {
  render() {
    return (
      <div className="ToDo">
        <li className="List">
          {this.props.item}
          <button onClick={this.props.remove}>X</button>
        </li>
      </div>
    );
  }
}

export default ToDo;
