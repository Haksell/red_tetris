// ============================================================================
// GAME MANAGER — manages multiple concurrent Game instances
// ============================================================================
//
// PDF V.2.1: "Multiple concurrent games are supported."
//
// Responsibilities:
// - Maintain a Map<roomName, Game> of active games
// - Create a new Game when a player joins a room that doesn't exist
// - Remove empty games when all players leave
// - Route socket events to the correct Game instance
//
// TODO:
// - class GameManager { games: Map<string, Game> }
// - joinRoom(socket, room, playerName): Game
// - leaveRoom(socketId): void
// - getGame(room): Game | undefined
