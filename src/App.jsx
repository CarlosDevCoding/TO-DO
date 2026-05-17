import { useState, useEffect } from "react";

import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {

  fetchTasks();

}, []);

const fetchTasks = async () => {

  try {

    const response = await fetch("http://localhost:5000/tasks");

    const data = await response.json();

    setTasks(data);

  } catch (error) {

    console.log(error);

  }
};

  const handleKeyDown = async (e) => {

    if (e.key === "Enter" && task.trim() !== "") {

      try {

        const response = await fetch("http://localhost:5000/tasks", {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            text: task,
          }),

        });

        const savedTask = await response.json();

        setTasks([...tasks, savedTask]);

        setTask("");

      } catch (error) {

        console.log(error);

      }
    }
  };

 const deleteTask = async (idToDelete) => {

  try {

    await fetch(`http://localhost:5000/tasks/${idToDelete}`, {

      method: "DELETE",

    });

    setTasks(tasks.filter((task) => task._id !== idToDelete));

  } catch (error) {

    console.log(error);

  }
};

  return (

    <>

      <div className="app">

        <h1>Välkommen till min TO-DO app.</h1>

        <p>
          Byggd 100% för hand av en människa.
          <br />
          Vad vill du anteckna idag?
        </p>

        <h2>Anteckningar</h2>

        <input
          type="text"
          placeholder="Skriv en uppgift...."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className="task-list">

          {tasks.map((t) => (

            <div key={t._id} className="task-item">

              {t.text}

              <button
                className="delete-btn"
                onClick={() => deleteTask(t._id)}
              >
                Delete
              </button>

            </div>

          ))}

        </div>

        <br />
        <br />

        <textarea
          placeholder="Tillfällig anteckning..."
        />

      </div>

    </>

  );
}

export default App;