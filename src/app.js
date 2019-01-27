import React from "react";
import { connect } from "react-redux";

import TodoList from "./components/todo-list";
import AddTodo from "./components/add-todo";

const App = ({ todos }) => {
  return (
    <div className="App">
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
