# red_tetris

## stack

- language: typescript
- frontend: react
- css framework: tailwind
- backend: node.js
- communication: http/socket.io
- testing: jest?
- functional library options:
  - lodash
  - ramda
  - remeda (looks like the best for typescript)
  - rambda
  - radash
  - fp-ts
  - ts-belt
  - effect-ts
  - or just use modern js/ts features and don't overthink it

## mandatory

- implement tetris
  - [ ] each field is 10 columns widre and 20 rows tall
  - [ ] game ends when a new piece can no longer enter the field
  - [ ] completing a line causes it to disappear
  - [ ] use original tetromino shapes
- multiplayer:
  - [ ] each player receives the same sequence of pieces
  - [ ] when a player clears lines, opponents receive n-1 indestructible lines at the bottom of their fields
  - [ ] players can see their opponent names
  - [ ] players can see a "spectrum" view of their fields, showing the height of each column's highest block
  - [ ] no scoring system, the last remaining player is the winner
- [ ] support both solo and multiplayer modes
- movement:
  - [ ] left/right: move horizontally
  - [ ] up: rotate piece
  - [ ] down: soft drop
  - [ ] spacebar: hard drop
- [ ] players join games via an URL like: `http://<server_name_or_ip>:<port>/<room>/<player_name>.`
- [ ] use appropriate routers such as `BrowserRouter` or `MemoryRouter` for url handling
- [ ] the first player to join becomes the host and controls when to start or restart the game
- [ ] if the current host leaves the game, one of the remaining players will take this role
- [ ] once started, no new players can join until the next round
- [ ] games end when one player remains
- [ ] multiple concurrent games are supported
- the server:
  - [ ] runs an asynchronous loop handling events via socket.io
  - [ ] must serve `index.html`, `bundle.js` and static assets with http
- the client:
  - [ ] is a browser-based single-page application
  - [ ] loads `index.html` which includes a reference to `bundle.js` containing the full application
  - [ ] no further html files are exchanged: all rendering and logic is managed client-side

## bonus

- [ ] add a scoring system
- [ ] persist player scores
- [ ] introduce new game modes
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
