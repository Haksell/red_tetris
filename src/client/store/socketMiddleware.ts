// ============================================================================
// SOCKET MIDDLEWARE — bridges socket.io events to Redux actions
// ============================================================================
//
// PDF V.2.3: "Asynchronous: Redux is synchronous by default; use redux-thunk
// or redux-promise for async workflows."
//
// This middleware:
// - Intercepts specific Redux actions (e.g., "socket/connect", "socket/emit")
// - Manages the socket.io client connection
// - Dispatches gameSlice actions when server events arrive
//
// Alternative: you can handle this entirely in the useSocket hook.
// The middleware approach keeps socket logic out of components.
//
// TODO:
// - On "socket/connect" action: create socket connection, register listeners
// - On incoming GAME_STATE event: dispatch updateGameState()
// - On incoming PENALTY_LINES: dispatch addPenaltyLines()
// - On incoming GAME_OVER: dispatch setGameOver()
// - On "socket/emit" action: socket.emit(event, data)
