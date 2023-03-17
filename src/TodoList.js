import React, { Component } from "react";
import "./index.css";
import List from "./List";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todoItem: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => this.setState({ items: todos }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [],
      todoItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });
  };

  handleDelete = (event) => {
    event.preventDefault();
    this.setState({
      items: [],
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Todo App</h1>
        <form className="inputField" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add your new todo"
            value={this.state.todoItem}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
        <button className="btn-delete" onClick={this.handleDelete}>
          Clear All
        </button>
      </div>
    );
  }
}

export default TodoList;
