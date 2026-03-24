// ============================================================================
// GAME CLASS (server-side, OOP)
// ============================================================================
//
// PDF IV: "The server-side code must follow an object-oriented approach using
// prototypes. At minimum, you should define classes for Player, Piece, and Game."
//
// This is the core class. One Game instance = one room.
//
// Responsibilities:
//
// PIECE SEQUENCE:
//   PDF V.2: "Each player in the same game must receive the same pieces
//   in the same positions and coordinates — even if at different times."
//   => Generate a shared random sequence of TetriminoTypes.
//   => Each Player tracks their own index into this sequence.
//   => Extend the sequence on demand when a player needs more pieces.
//
// ROOM/LOBBY:
//   PDF V.2.1: "The first player to join becomes the host."
//   PDF V.2.1: "Once started, no new players can join until the next round."
//   PDF V.2.1: "Multiple concurrent games are supported." (handled by GameManager)
//   PDF V.2.1: "A game can be played with one player."
//
// GAME LOOP:
//   PDF V.1: "The game ends when a new piece can no longer enter the field."
//   PDF V.1: "Games end when one player remains." (multiplayer)
//   PDF V.1: "Completing a line causes it to disappear."
//
// PENALTIES:
//   PDF V.1: "When a player clears lines, opponents receive n - 1
//   indestructible penalty lines at the bottom of their fields."
//
// HOST TRANSFER:
//   PDF V.2.1: "If the current host leaves the game, one of the remaining
//   players will take this role."
//
// TODO:
// - class Game { roomName, players: Map<socketId, Player>, pieceSequence, status }
// - addPlayer(socket, name): void
// - removePlayer(socketId): void
// - start(): void (only host can call)
// - getNextPiece(player: Player): Piece
// - handleLineClears(player: Player, linesCleared: number): void
// - checkGameOver(): void
// - transferHost(): void
