import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodo as _addTodo } from "../redux/actions";

function AddTodo({ addTodo }) {
  const [input, setInput] = useState("");
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(input);
          setInput("");
        }}
      >
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default connect(
  null,
  {
    addTodo: _addTodo
  }
)(AddTodo);
