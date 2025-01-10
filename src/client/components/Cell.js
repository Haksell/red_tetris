import React from 'react'
import styled from 'styled-components'
import { TETROMINOS } from '../helpers/tetrominos'

const StyledCell = styled.div`
  width: auto;
  background: rgba(${(props) => props.color}, 0.8);
  border: ${(props) => (props.type === 0 ? '1px solid #333' : '1px solid #fff')};
`

function Cell({ type }) {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color}>
      {/* For debugging: {type} */}
    </StyledCell>
  )
}

export default React.memo(Cell)
