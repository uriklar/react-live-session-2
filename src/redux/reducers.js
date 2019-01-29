import * as types from "./action-types";

let nextTodoId = 0;

const todos = (
  state = [
    { text: "Learn React", completed: true, id: 1 },
    { text: "Learn Redux", completed: false, id: 2 },
    { text: "Learn Mobx", completed: false, id: 3 }
  ],
  action
) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: nextTodoId++,
          text: action.text,
          completed: false
        }
      ];
    case types.TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
