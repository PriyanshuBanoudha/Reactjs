import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3> Todo App</h3>
            </div>

            <div className="card-body">

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a task..."
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTodo()}
                />

                <button
                  className="btn btn-success"
                  onClick={addTodo}
                >
                  Add
                </button>
              </div>

              {todos.length === 0 ? (
                <div className="alert alert-info text-center">
                  No tasks available.
                </div>
              ) : (
                <ul className="list-group">
                  {todos.map((todo) => (
                    <li
                      key={todo.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <input
                          type="checkbox"
                          className="form-check-input me-2"
                          checked={todo.completed}
                          onChange={() => toggleComplete(todo.id)}
                        />

                        <span
                          style={{
                            textDecoration: todo.completed
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {todo.text}
                        </span>
                      </div>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TodoApp;