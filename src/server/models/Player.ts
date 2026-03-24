// ============================================================================
// PLAYER CLASS (server-side, OOP)
// ============================================================================
//
// PDF IV: "The server-side code must follow an object-oriented approach using
// prototypes. At minimum, you should define classes for Player, Piece, and Game."
//
// Responsibilities:
// - Store player identity: name, socketId, isHost, alive status
// - Store player's board state (10x20 grid)
// - Track current piece index in the shared sequence
// - Compute and expose spectrum for opponents
//
// PDF V.1: "Players can see their opponents' names and a 'spectrum' view
// of their fields. The spectrum shows the height of each column's highest block.
// This view updates in real-time."
//
// PDF V.1: "When a player clears lines, opponents receive n - 1
// indestructible penalty lines at the bottom of their fields."
//
// PDF V.1: "There is no scoring system; the last remaining player is the winner."
//
// PDF V.2.1: "The first player to join becomes the host and controls when to
// start or restart the game. If the current host leaves the game, one of the
// remaining players will take this role."
//
// TODO:
// - class Player { name, socketId, board, currentPieceIndex, isHost, alive }
// - lockPiece(piece: Piece): { linesCleared: number }
// - addPenaltyLines(count: number): void
// - getSpectrum(): number[]
// - isDead(): boolean (check if top row is occupied)
