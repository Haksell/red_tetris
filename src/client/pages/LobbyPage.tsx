// ============================================================================
// LOBBY PAGE — room + player name entry
// ============================================================================
//
// PDF V.2.1: "Players join games via a URL like:
// http://<server_name_or_ip>:<port>/<room>/<player_name>"
//
// This page shows a form where the player enters:
// - Room name (game room to join/create)
// - Player name (their display name)
//
// On submit, navigate to /<room>/<playerName> using react-router.
//
// TODO:
// - Two input fields: room name, player name
// - Submit button -> useNavigate()(`/${room}/${playerName}`)
// - Validation: both fields required, no special chars in URL
// - Tailwind styling (grid or flexbox, NO tables)
