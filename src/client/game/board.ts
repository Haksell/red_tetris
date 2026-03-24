// ============================================================================
// BOARD LOGIC — pure functions, NO `this`
// ============================================================================
//
// PDF IV: "The game logic handling the board and pieces must be implemented
// using pure functions."
// PDF IV: "Client-side code must be written without using the `this` keyword."
//
// All functions here are PURE: same input => same output, no side effects.
//
// TODO:
//
// createBoard(): Board
//   - Returns an empty 20x10 grid (all cells = 0)
//
// placePiece(board: Board, piece: PieceData): Board
//   - Returns a NEW board with the piece locked in place
//   - Does NOT mutate the original board
//
// clearLines(board: Board): { board: Board; linesCleared: number }
//   - PDF V.1: "Completing a line causes it to disappear, extending the game."
//   - Remove full rows, shift everything above down
//   - Return new board + number of lines cleared
//
// addPenaltyLines(board: Board, count: number): Board
//   - PDF V.1: "opponents receive n - 1 indestructible penalty lines
//     at the bottom of their fields."
//   - Push `count` gray/indestructible rows at the bottom
//   - Shift existing rows up (rows that overflow the top are lost)
//
// mergePieceOntoBoard(board: Board, piece: PieceData): Board
//   - For DISPLAY only: overlay the falling piece onto the board
//   - Used by the Board component to show the piece in position
