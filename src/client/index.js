import React from 'react'
import Tetris from './components/Tetris'
import { createRoot } from 'react-dom/client'

const App = () => {
  return <Tetris />
}

const rootElement = document.getElementById('tetris')
const root = createRoot(rootElement)
root.render(<App />)
