// ============================================================================
// COLLISION DETECTION — pure functions, NO `this`
// ============================================================================
//
// PDF IV: "The game logic handling the board and pieces must be implemented
// using pure functions."
//
// TODO:
//
// isValidPosition(board: Board, piece: PieceData): boolean
//   - Check if the piece at its current position overlaps with:
//     - Existing locked cells on the board
//     - Board boundaries (left, right, bottom walls)
//   - Used to validate moves before applying them
//
// canMove(board: Board, piece: PieceData, direction: "left"|"right"|"down"): boolean
//   - Shortcut: offset the piece position and call isValidPosition
//
// canRotate(board: Board, piece: PieceData): boolean
//   - Check if rotating the piece would result in a valid position
//
// PDF V.1.1: "Once a piece touches the pile (existing pieces), it becomes
// immobile only on the next frame — allowing last-moment adjustments."
// => The game loop should give a 1-frame grace period before locking.
