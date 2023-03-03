import React, { Component } from "react";
import "./index.css";
import List from "./List";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      items: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
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
      </div>
    );
  }
}

export default TodoList;
