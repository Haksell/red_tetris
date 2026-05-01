# red_tetris

## immediate todo

- tetrominos spawn in rows 21 and 22, or just 21 for the I tetromino
- implement wall kicks (akira for I) https://tetris.fandom.com/wiki/Super_Rotation_System#Wall_kicks

## stack

- language: typescript
- frontend: react
- css framework: tailwind
- backend: node.js
- communication: http/socket.io
- testing: vitest | jest

## mandatory

- implement tetris:
  - [ ] each field is 10 columns wide and 20 rows tall
  - [ ] game ends when a new piece can no longer enter the field
  - [ ] completing a line causes it to disappear
  - [ ] use original tetromino shapes
- movement:
  - [ ] left/right: move horizontally
  - [ ] up: rotate piece
  - [ ] down: soft drop
  - [ ] spacebar: hard drop
- multiplayer:
  - [ ] each player receives the same sequence of pieces
  - [ ] when a player clears lines, opponents receive n-1 indestructible lines at the bottom of their fields
  - [ ] players can see their opponent names
  - [ ] players can see a "spectrum" view of their fields, showing the height of each column's highest block
  - [ ] no scoring system, the last remaining player is the winner
  - [ ] games end when one player remains
- matchmaking:
  - [ ] players join games via an URL like: `http://<server_name_or_ip>:<port>/<room>/<player_name>.`
  - [ ] the first player to join becomes the host and controls when to start or restart the game
  - [ ] if the current host leaves the game, one of the remaining players will take this role
  - [ ] once started, no new players can join until the next round
  - [ ] multiple concurrent games are supported
- the server:
  - [ ] runs an asynchronous loop handling events via socket.io
  - [ ] must serve `index.html`, `bundle.js` and static assets with http
- the client:
  - [x] is a browser-based single-page application
  - [x] loads `index.html` which includes a reference to `bundle.js` containing the full application
  - [x] no further html files are exchanged: all rendering and logic is managed client-side
  - [x] uses appropriate routers such as `BrowserRouter` or ~~`MemoryRouter`~~ for url handling
  - [ ] supports both solo and multiplayer modes

## bonus

- [ ] add a scoring system with persistence (for solo gameplay)
- [ ] local two-player mode
- [ ] introduce new game modes
- [ ] mobile support
- [ ] deploy on the web
- ...

## push check

- required classes:
  - `Player`
  - `Piece`
  - `Game`
- forbidden concepts:
  - `jQuery`
  - `this` (except for custom subclasses of `Error`)
  - `<table>` (use grid or flexbox)
  - `<canvas>` (wtf im trying to make a game)
  - `<svg>`
- unit tests must cover at least:
  - 70% of statements
  - 70% of functions
  - 70% of lines
  - 50% of branches
- `.env` not pushed

## problems with subject (make an intra ticket)

- `<canvas>` not allowed
- `build.js` without hash makes caching harder
- boilerplate completely out of date and does not compile

