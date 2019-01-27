import { observable, action } from "mobx";

export default class TodoStore {
  @observable todos = [];

  @action
  addTodo(text) {
    this.todos.push({
      id: this.todos.length,
      text: text,
      completed: false
    });
  }

  @action
  toggleTodo(id) {
    const todo = this.todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
  }
}
