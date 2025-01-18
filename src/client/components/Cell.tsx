import React from 'react'
import { TETROMINOS } from '../helpers/tetrominos'

function Cell({ type }) {
  const cellColor = `rgba(${TETROMINOS[type].color}, 0.8)`

  // If type = 0, it's an empty cell -> use a darker border
  // If not, use a white border
  const borderClass = type === 0 ? 'border-gray-700' : 'border-white'

  return (
    <div
      className={`w-auto border ${borderClass}`}
      style={{ backgroundColor: cellColor }}
    >
      {/* For debugging: {type} */}
    </div>
  )
}

export default React.memo(Cell)
