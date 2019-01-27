import React from "react";
import { connect } from "react-redux";

import Todo from "./todo";
import { toggleTodo as _toggleTodo } from "../redux/actions";

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default connect(
  null,
  { toggleTodo: _toggleTodo }
)(TodoList);
