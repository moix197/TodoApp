import React from "react";
//uncomment the bottom import to open the details in a different page
//import { Link } from "@reach/router";

class SingleTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedDescription: false
    };
  }

  handleEraseButton = event => {
    event.preventDefault();
    this.props.removeTodo(this.props.id);
  };

  toggleOpenedDescription = () => {
    this.setState({
      openedDescription: !this.state.openedDescription
    });
  };

  render() {
    return (
      //uncomment the bottom Link tags to open the details in a different page
      //<Link to={`/details/${this.props.id}`}>
      <div
        className={`displayColumn ${this.state.openedDescription &&
          "activeDescription"}`}
        onClick={this.toggleOpenedDescription}
      >
        <div className="outerSingleTodo">
          <span>
            {!this.state.openedDescription
              ? `See 
              Details`
              : `Close 
              Details`}
          </span>
          <div>{this.props.name}</div>
          <div>{this.props.time}</div>
          <div>{this.props.date}</div>
          <div>{this.props.importance}</div>
          <button onClick={this.handleEraseButton}>Remove</button>
        </div>
        <div className="outerTodoDescription">
          <div>{this.props.description}</div>
        </div>
      </div>

      //</Link>
    );
  }
}

export default SingleTodo;
