import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      time: "",
      date: "",
      importance: "",
      description: "",
      addingNewTodo: false
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validateForm = (...aryToValidate) => {
    let validated = true;

    for (let i of aryToValidate) {
      if (validated === true && i === "") {
        validated = false;
      }
    }

    return validated;
  };

  handleAddNewTodoSubmit = event => {
    event.preventDefault();

    let isValidated = this.validateForm(
      this.state.name,
      this.state.time,
      this.state.date,
      this.state.importance,
      this.state.description
    );

    if (!isValidated) {
      alert("Please fill all the fields");
      return;
    }

    this.props.addNewTodo(
      this.state.name,
      this.state.time,
      this.state.date,
      this.state.importance,
      this.state.description
    );
    //this.toggleAddingNewTodo
    this.clearTodoForm();
  };

  clearTodoForm = () => {
    this.setState({
      name: "",
      time: "",
      date: "",
      importance: "",
      description: ""
    });
  };

  toggleAddingNewTodo = () => {
    this.setState({
      addingNewTodo: !this.state.addingNewTodo
    });
  };

  render() {
    if (!this.state.addingNewTodo) {
      return (
        <div className="paddingSm">
          <button onClick={this.toggleAddingNewTodo}>Add a new to do</button>
        </div>
      );
    }

    return (
      <div className="paddingSm">
        <form onSubmit={this.handleAddNewTodoSubmit}>
          <div className="outerForm">
            <div className="formGroup">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  onChange={this.handleInputChange}
                  name="name"
                  value={this.state.name}
                  placeholder="To do name"
                />
              </div>
              <div>
                <label htmlFor="importance">Importance</label>
                <select
                  onChange={this.handleInputChange}
                  name="importance"
                  value={this.state.importance}
                  placeholder="Your To do importante goes here"
                >
                  <option />
                  <option value="minor">Minor</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <p>&nbsp;</p>
            <div className="formGroup">
              <div>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  onChange={this.handleInputChange}
                  name="date"
                  value={this.state.date}
                  placeholder="Your To do date goes here"
                />
              </div>
              <div>
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  onChange={this.handleInputChange}
                  name="time"
                  value={this.state.time}
                  placeholder="Your To do time goes here"
                />
              </div>
            </div>
            <p>&nbsp;</p>
            <label htmlFor="description">Description</label>
            <textarea
              onChange={this.handleInputChange}
              name="description"
              value={this.state.description}
              placeholder="Your To do description goes here"
            />
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
