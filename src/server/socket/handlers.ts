// ============================================================================
// SOCKET EVENT HANDLERS
// ============================================================================
//
// PDF V.2.2: "The server manages the game logic and communication. Identify
// and define clearly the responsibilities shared between clients and the server,
// and specify the network protocol."
//
// This file wires incoming socket events to GameManager methods.
//
// Handler responsibilities:
//
// JOIN_ROOM:
//   - PDF V.2.1: "Players join games via a URL like /<room>/<player_name>"
//   - Validate room/playerName, call gameManager.joinRoom(socket, room, playerName)
//   - PDF V.2.1: "The first player to join becomes the host and controls
//     when to start or restart the game."
//
// START_GAME:
//   - Only the host can trigger this
//   - PDF V.2.1: "Once started, no new players can join until the next round."
//   - Generate the piece sequence for this game
//   - PDF V.2: "Each player in the same game must receive the same pieces
//     in the same positions and coordinates — even if at different times."
//
// PLAYER_MOVE:
//   - PDF V.1.1: Left/Right = move horizontal, Up = rotate,
//     Down = soft drop, Spacebar = hard drop
//   - Validate move on server, broadcast updated state
//
// DISCONNECT:
//   - Remove player from game
//   - PDF V.2.1: "If the current host leaves the game, one of the remaining
//     players will take this role."
//   - PDF V.1: "Games end when one player remains."
//
// TODO:
// - export function registerHandlers(socket: Socket, gameManager: GameManager)
// - socket.on(EVENTS.JOIN_ROOM, ...)
// - socket.on(EVENTS.START_GAME, ...)
// - socket.on(EVENTS.PLAYER_MOVE, ...)
// - socket.on("disconnect", ...)
