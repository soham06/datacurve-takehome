import { useState } from 'react'
import './App.css'
import CodeEditor from './codeEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CodeEditor></CodeEditor>
  )
}

export default App
