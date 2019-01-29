import React from "react";
import { inject } from "mobx-react";

@inject("filterStore")
class ActiveFilter extends React.Component {
  render() {
    return <div>{this.props.filterStore.activeFilter}</div>;
  }
}

export default ActiveFilter;
