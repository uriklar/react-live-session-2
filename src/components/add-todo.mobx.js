import React, { useState, Component } from "react";
import { inject } from "mobx-react";

@inject("todoStore")
class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.todoStore.addTodo(this.state.input);
            this.setInput("");
          }}
        >
          <input
            value={this.state.input}
            onChange={e => this.setInput(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

  setInput = text => {
    this.setState({ input: text });
  };
}

export default AddTodo;
