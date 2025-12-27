"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"

export default function Page() {
  const [task, setTask] = useState("");
  const [priorities, setPriorities] = useState("");
  const [todos, setTodos] = useState([]);  // ✅ empty array, not [""]

  const addTodos = (e) => {
    e.preventDefault(); // ✅ stop page refresh
    if (!task || !priorities) return;

    const newTodo = {
      id: Date.now(), // ✅ unique ID
      task,
      priority: priorities,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
    setPriorities("");
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo // ✅ fixed condition
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // ✅ fixed return
  };

  return (
    <div className="container mt-4 p-2">
      <h3>TO-DO list</h3>

      <form onSubmit={addTodos}>
        <div className="row">
          <div className="col-7">
            <input
              type="text"
              className="form-control"
              placeholder="Your Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Priority"
              value={priorities}
              onChange={(e) => setPriorities(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary mb-3">
              Add todo
            </button>
          </div>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Done</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td>
              <td>{todo.task}</td>
              <td>{todo.priority}</td>
              <td>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleDone(todo.id)}
                />
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  ❌ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
