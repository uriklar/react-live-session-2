import React from "react";
import Todo from "./todo";

import { inject, observer } from "mobx-react";

@inject("todoStore")
@observer
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todoStore.visibleTodos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.todoStore.toggleTodo(todo.id)}
          />
        ))}
      </ul>
    );
  }
}
export default TodoList;
