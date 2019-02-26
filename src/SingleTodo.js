import React from "react";
import { Link } from "@reach/router";

class SingleTodo extends React.Component {
  handleEraseButton = event => {
    event.preventDefault();
    this.props.removeTodo(this.props.id);
  };

  render() {
    return (
      <Link to={`/details/${this.props.id}`}>
        <div className="outerSingleTodo">
          <span>
            See <br />
            Details
          </span>
          <div>{this.props.name}</div>
          <div>{this.props.time}</div>
          <div>{this.props.date}</div>
          <div>{this.props.importance}</div>
          <button onClick={this.handleEraseButton}>Remove</button>
        </div>
      </Link>
    );
  }
}

export default SingleTodo;
