import React from 'react'
import Tetris from './components/Tetris'
import { createRoot } from 'react-dom/client'
import './index.css'

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Tetris />
    </div>
  )
}

const rootElement = document.getElementById('tetris')
const root = createRoot(rootElement)
root.render(<App />)
