import React from "react";
import { Provider } from "mobx-react";
import TodoStore from "../mobx/todo-store";
import FilterStore from "../mobx/filter-store";

import TodoList from "./todo-list.mobx";
import AddTodo from "./add-todo.mobx";
import ActiveFilter from "./active-filter.mobx";

const filterStore = new FilterStore("SHOW_COMPLETED");
const todoStore = new TodoStore(filterStore);

function App() {
  return (
    <Provider todoStore={todoStore} filterStore={filterStore}>
      <div className="App">
        <ActiveFilter />
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
