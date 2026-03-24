// ============================================================================
// SOCKET EVENT NAMES — single source of truth for event names
// ============================================================================
//
// Used by both server handlers and client socketMiddleware.
// Keep in sync with the client's usage.

export const EVENTS = {
  // Client -> Server
  JOIN_ROOM: "join_room",
  START_GAME: "start_game",
  PLAYER_MOVE: "player_move", // left, right, rotate, soft_drop, hard_drop
  LEAVE_ROOM: "leave_room",

  // Server -> Client
  GAME_STATE: "game_state",
  PIECE_DROPPED: "piece_dropped",
  NEXT_PIECES: "next_pieces",
  PENALTY_LINES: "penalty_lines",
  OPPONENT_UPDATE: "opponent_update",
  GAME_OVER: "game_over",
  GAME_WON: "game_won",
  ERROR: "error",
} as const;
