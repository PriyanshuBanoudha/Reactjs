import React, { useState } from "react";

function Form() {
  const [todo, setTodo] = useState("");
  const [alltodo, setAllTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.trim() === "") return;

    setAllTodo([...alltodo, todo]); // add new todo
    setTodo(""); // clear input
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* show todos */}
      <ul>
        {alltodo.map((item, index) => (
          <li key={index}><h1>{item}</h1></li>
        ))}
      </ul>
    </div>
  );
}

export default Form;