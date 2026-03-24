// ============================================================================
// SHARED TYPES — contract between client and server
// ============================================================================

import { TetriminoType } from "./constants";

// A position on the board
export interface Position {
  x: number;
  y: number;
}

// A piece as sent from server to client
export interface PieceData {
  type: TetriminoType;
  rotation: number; // 0-3
  pos: Position;
}

// PDF V.1: "Players can see their opponents' names and a 'spectrum' view
// of their fields. The spectrum shows the height of each column's highest block."
export type Spectrum = number[]; // Array of 10 column heights

// Player info as seen by opponents
export interface OpponentInfo {
  name: string;
  spectrum: Spectrum;
  alive: boolean;
}

// Board cell: 0 = empty, string = color of locked piece, "penalty" = indestructible
export type Cell = 0 | string;
export type Board = Cell[][];

// PDF V.2.1: "Players join games via a URL like:
// http://<server_name_or_ip>:<port>/<room>/<player_name>"
export interface JoinPayload {
  room: string;
  playerName: string;
}

// --- Socket event payloads ---

export interface GameStatePayload {
  board: Board;
  currentPiece: PieceData;
  nextPiece: PieceData;
  opponents: OpponentInfo[];
  isHost: boolean;
  gameStatus: "waiting" | "playing" | "ended";
  winner?: string;
}

// PDF V.1: "When a player clears lines, opponents receive n - 1
// indestructible penalty lines at the bottom of their fields."
export interface PenaltyPayload {
  lines: number; // n - 1 lines to add
}
