import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import TodoList from "./todo-list.redux";
import AddTodo from "./add-todo.redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
