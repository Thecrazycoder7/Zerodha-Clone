import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Zerodha Clone</h1>
      <p>Your one-stop solution for trading</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </>
  )
}

export default App
