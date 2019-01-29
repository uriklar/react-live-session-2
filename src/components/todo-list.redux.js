import React from "react";
import Todo from "./todo";

import { connect } from "react-redux";

import { toggleTodo as _toggleTodo } from "../redux/actions";

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { toggleTodo: _toggleTodo }
)(TodoList);
