import { observable, action } from "mobx";

export default class FilterStore {
  @observable
  activeFilter = "";

  constructor(initialState) {
    this.activeFilter = initialState;
  }

  @action
  setFilter = filter => (this.activeFilter = filter);
}
