import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("")
  const[task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <> 
    
         <div className="app">
          <h1>Välkommen till min TO-DO app.</h1>
            
             <p>Byggd 100% för hand av en människa. 
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
      {tasks.map((t, index) => (
        <div key={index} className="task-item">
          {t}
        </div>
      ))}
      </div>
      <br /> <br />
       <textarea
            
              
             placeholder="Tillfällig anteckning... "
              
            />
          
      </div>  
          
    </>
  )
}

export default App
