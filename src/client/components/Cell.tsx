import React from 'react'
import { TETROMINOS } from '../helpers/tetrominos'

interface CellProps {
  type: number
}

const Cell: React.FC<CellProps> = ({ type }) => {
  const cellColor = `rgba(${TETROMINOS[type].color}, 0.8)`
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
