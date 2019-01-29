import { observable, action, computed } from "mobx";

let nextTodoId = 0;

export default class TodoStore {
  @observable
  todos = [
    { text: "Learn React", completed: true, id: 1 },
    { text: "Learn Redux", completed: false, id: 2 },
    { text: "Learn Mobx", completed: false, id: 3 }
  ];

  constructor(filterStore) {
    this.filterStore = filterStore;
  }

  @action
  addTodo = text => {
    this.todos.push({
      id: nextTodoId++,
      text,
      completed: false
    });
  };

  @action
  toggleTodo = id => {
    const todo = this.todos.find(todo => todo.id === id);

    todo.completed = !todo.completed;
  };

  @computed
  get visibleTodos() {
    if (this.filterStore.activeFilter === "SHOW_COMPLETED") {
      return this.todos.filter(todo => todo.completed);
    }

    return this.todos;
  }
}
