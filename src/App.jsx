import { useState } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState(" ");

  const inputValue = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== " ") {
      setTask([...task, taskInput]);
      setTaskInput(" ");
    }
  };

  const deleteTask = (index) => {
    const currentTasks = task.filter((_, i) => i !== index);
    setTask(currentTasks);
  };

  return (
    <>
      <div>
        <input
          className="w-64 h-12 px-4 py-2 rounded-md bg-slate-50 text-black"
          type="text"
          placeholder="Enter Task"
          id="inputBar"
          onChange={inputValue}
        ></input>

        <button onClick={addTask} className="ml-6 bg-red-500">
          Add
        </button>
      </div>
      <div id="taskList" className="taskList flex justify-cente">
        <ul>
          {task.map((task, index) => (
            <li key={index} className="text-left mt-8">
              {task}
              <button
                onClick={() => deleteTask(index)}
                className="ml-2 text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
