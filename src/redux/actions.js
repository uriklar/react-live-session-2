import * as types from "./action-types";

export const addTodo = text => ({
  type: types.ADD_TODO,
  text
});

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
});
