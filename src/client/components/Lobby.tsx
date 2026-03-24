// ============================================================================
// LOBBY COMPONENT — room + player name form
// ============================================================================
//
// Used on the home page. Players enter room name and their name,
// then get routed to /<room>/<player>.
//
// PDF V.2.1: "Players join games via a URL like:
// http://<server_name_or_ip>:<port>/<room>/<player_name>"
//
// TODO:
// - Two input fields: room name, player name
// - Submit button -> router.push(`/${room}/${playerName}`)
// - Validation: both fields required, no special chars in URL
