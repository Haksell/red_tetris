// ============================================================================
// useSocket HOOK — manages socket.io connection lifecycle
// ============================================================================
//
// PDF V.2: "Communication uses HTTP and socket.io for bidirectional events."
//
// Responsibilities:
// - Connect to socket.io server on mount
// - Emit JOIN_ROOM with { room, playerName }
// - Dispatch Redux actions on incoming events (GAME_STATE, PENALTY, etc.)
// - Disconnect on unmount / page leave
// - Expose an `emit` function for sending moves
//
// PDF IV: "Client-side code must be written without using the `this` keyword."
// => Use functional patterns only.
//
// TODO:
// - const useSocket = (room: string, playerName: string) => { ... }
// - useEffect for connect/disconnect lifecycle
// - Return { emit, connected }
