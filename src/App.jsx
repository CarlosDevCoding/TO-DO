import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState('')
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
    <input
      type="text"
      placeholder="Skriv en uppgift...."
      value={task}
      onChange={(e) => setTask(e.target.value)}
      onKeyDown={handleKeyDown}
      />
         <div>
          <h1>Välkommen till min TO-DO app.</h1>
            
             <p>Byggd 100% för hand av en människa. 
              <br />
          Vad vill du anteckna idag?
          </p>    
                    <h2>Anteckningar</h2>
          
            <textarea
             value={text}
             onChange={(e) => setText(e.target.value)} 
            />
          </div>
    
    </>
  )
}

export default App
