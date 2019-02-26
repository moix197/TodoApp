import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import TodoSection from "./TodoSection";
import TodoDetails from "./TodoDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTodo: null,
      todos: []
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    let localStorageTodos = JSON.parse(localStorage.getItem("todos"));

    this.setState({
      todos: localStorageTodos
    });
  };

  addNewTodo = (name, time, date, importance, description) => {
    let newItem = {
      id: this.state.todos[this.state.todos.length - 1]
        ? this.state.todos[this.state.todos.length - 1].id + 1
        : 1,
      name,
      time,
      date,
      importance,
      description
    };

    this.setState({
      todos: [...this.state.todos, newItem]
    });

    this.saveStateToLocalStorage();
  };

  removeTodo = itemId => {
    let newTodo = this.state.todos.filter(singleItem => {
      return singleItem.id !== itemId && singleItem;
    });

    this.setState({
      todos: newTodo
    });

    this.saveStateToLocalStorage();
  };

  saveStateToLocalStorage = () => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }, 1);
  };

  sortBy = sortFunc => {
    let newTodos = [...this.state.todos];

    newTodos.sort((a, b) => {
      return sortFunc(a, b);
    });

    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header text-uppercase paddingSm">
          <Link to="/ ">
            <h1>To do app</h1>
          </Link>
        </header>
        <Router>
          <TodoSection
            path="/"
            todos={this.state.todos}
            addNewTodo={this.addNewTodo}
            removeTodo={this.removeTodo}
            sortBy={this.sortBy}
          />
          {
            //Uncomment the line on bottom if you want to show the details
            //in a different page
            <TodoDetails path="/details/:id" todos={this.state.todos} />
          }
        </Router>
      </div>
    );
  }
}

export default App;
