import React from "react";
import SingleTodo from "./SingleTodo";
import AddTodo from "./AddTodo";

class TodoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedDateAsc: false,
      orderedNameAsc: false,
      orderedTimeAsc: false
    };
  }

  checkAsc(a, b) {
    if (a > b) {
      return -1;
    }
    return 0;
  }

  checkDesc(a, b) {
    if (a < b) {
      return -1;
    }
    return 0;
  }

  sortByDate = () => {
    let orientToCheck = this.state.orderedDateAsc
      ? this.checkAsc
      : this.checkDesc;

    this.props.sortBy(function(a, b) {
      return orientToCheck(a.time, b.time);
    });

    this.setState({
      orderedDateAsc: !this.state.orderedDateAsc
    });
  };

  sortByName = () => {
    let orientToCheck = this.state.orderedNameAsc
      ? this.checkAsc
      : this.checkDesc;

    this.props.sortBy(function(a, b) {
      return orientToCheck(a.name, b.name);
    });

    this.setState({
      orderedNameAsc: !this.state.orderedNameAsc
    });
  };

  sortByTime = () => {
    let orientToCheck = this.state.orderedTimeAsc
      ? this.checkAsc
      : this.checkDesc;

    this.props.sortBy(function(a, b) {
      return orientToCheck(a.name, b.name);
    });

    this.setState({
      orderedTimeAsc: !this.state.orderedTimeAsc
    });
  };

  sortByImportance = () => {
    let orientToCheck = this.state.orderedTimeAsc
      ? this.checkAsc
      : this.checkDesc;

    this.props.sortBy(function(a, b) {
      return orientToCheck(a.importance, b.importance);
    });

    this.setState({
      orderedTimeAsc: !this.state.orderedTimeAsc
    });
  };

  render() {
    let todoHead;

    if (this.props.todos.length === 0) {
      todoHead = (
        <div className="outerSingleTodo outerSingleTodoHeader text-uppercase">
          <div>There's no to dos</div>
        </div>
      );
    } else {
      todoHead = (
        <div className="outerSingleTodo outerSingleTodoHeader text-uppercase font-bolded">
          <div onClick={this.sortByName}>name</div>
          <div onClick={this.sortByTime}>time</div>
          <div onClick={this.sortByDate}>date</div>
          <div onClick={this.sortByImportance}>importance</div>
        </div>
      );
    }

    return (
      <div className="displayColumn">
        <div>
          <AddTodo addNewTodo={this.props.addNewTodo} />
        </div>
        <div className="text-uppercase">
          <h2>To do list</h2>
          <p>&nbsp;</p>
        </div>
        <div className="displayColumn todosTable">
          {todoHead}
          {this.props.todos.map(singleTodoItem => {
            return (
              <SingleTodo
                key={singleTodoItem.id}
                id={singleTodoItem.id}
                name={singleTodoItem.name}
                time={singleTodoItem.time}
                date={singleTodoItem.date}
                importance={singleTodoItem.importance}
                description={singleTodoItem.description}
                removeTodo={this.props.removeTodo}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoSection;
