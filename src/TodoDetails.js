import React from "react";

class TodoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: "",
      time: "",
      date: "",
      importance: "",
      description: ""
    };
  }

  componentDidMount() {
    this.props.todos.map(
      ({ id, name, time, date, importance, description }) => {
        if (id == this.props.id) {
          this.setState({
            loading: false,
            name,
            time,
            date,
            importance,
            description
          });
        }
      }
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }
    return (
      <div>
        <h5>{this.state.name}</h5>
        <div>
          <p>{this.state.time}</p>
          <p>{this.state.date}</p>
        </div>
        <span>{this.state.importance}</span>
        <div>
          <p>{this.state.description}</p>
        </div>
      </div>
    );
  }
}

export default TodoDetails;
