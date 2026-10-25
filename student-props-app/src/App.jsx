<<<<<<< HEAD

import { useState } from "react";
import "./App.css";

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // To-do list state
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Increase counter
  function increaseCount() {
    setCount((previousCount) => previousCount + 1);
  }

  // Decrease counter
  function decreaseCount() {
    setCount((previousCount) => previousCount - 1);
  }

  // Reset counter
  function resetCount() {
    setCount(0);
  }

  // Add a new task
  function addTask(event) {
    event.preventDefault();

    if (taskInput.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
    setTaskInput("");
  }

  // Mark task as completed or incomplete
  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Delete a task
  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <div className="app">
      <header>
        <h1>React State App</h1>
        <p>Counter & To-Do List using useState</p>
      </header>

      <main className="container">
        {/* Counter Section */}
        <section className="card">
          <h2>Counter Application</h2>

          <div className="count">{count}</div>

          <div className="button-group">
            <button onClick={decreaseCount}>- Decrease</button>
            <button onClick={resetCount} className="reset">
              Reset
            </button>
            <button onClick={increaseCount}>+ Increase</button>
          </div>
        </section>

        {/* To-Do List Section */}
        <section className="card">
          <h2>My To-Do List</h2>

          <form onSubmit={addTask} className="task-form">
            <input
              type="text"
              placeholder="Enter a new task..."
              value={taskInput}
              onChange={(event) => setTaskInput(event.target.value)}
            />

            <button type="submit">Add Task</button>
          </form>

          <p className="task-count">
            Total tasks: {tasks.length} | Completed:{" "}
            {tasks.filter((task) => task.completed).length}
          </p>

          {tasks.length === 0 ? (
            <p className="empty">No tasks yet. Add your first task!</p>
          ) : (
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id} className="task-item">
                  <label className={task.completed ? "completed" : ""}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                    {task.text}
                  </label>

                  <button
                    className="delete"
                    onClick={() => deleteTask(task.id)}
                    aria-label={`Delete ${task.text}`}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer>
        <p>Built with React Functional Components and useState</p>
=======
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const students = [
    {
      id: 1,
      name: "Rahul Kumar",
      rollNo: "101",
      course: "B.Tech CSE",
      semester: "5th",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Singh",
      rollNo: "102",
      course: "B.Tech IT",
      semester: "3rd",
      status: "Active",
    },
    {
      id: 3,
      name: "Amit Sharma",
      rollNo: "103",
      course: "B.Tech CSE",
      semester: "5th",
      status: "Active",
    },
  ];

  return (
    <div>
      <Header
        title="Student Management System"
        subtitle="Student Profiles using React Props"
      />

      <main className="container">
        <h2>Our Students</h2>
        <StudentList students={students} />
      </main>

      <footer>
        <p>Built with React Functional Components</p>
>>>>>>> 329f81d2c526b6b50897aa306050cfc23907c7fb
      </footer>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 329f81d2c526b6b50897aa306050cfc23907c7fb
