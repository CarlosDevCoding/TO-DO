import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  return (
    <>
    <br></br><div>Välkommen till min TO-DO app. <br></br>Byggd 100% för hand av en människa.<br></br>
          Vad vill du anteckna idag?          <h2>Anteckningar</h2>
          <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </div>
    </div>
            </>
  )
}

export default App
