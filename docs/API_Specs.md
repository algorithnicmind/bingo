# API & WebSocket Specifications

## 1. REST APIs (Flask)

### Authentication
- **`POST /api/register`**
  - **Payload**: `{ "username": "player1", "password": "securepassword" }`
  - **Response**: `{ "status": "success", "user_id": "123", "token": "jwt_token" }`

- **`POST /api/login`**
  - **Payload**: `{ "username": "player1", "password": "securepassword" }`
  - **Response**: `{ "status": "success", "token": "jwt_token", "stats": { "wins": 10, "played": 15 } }`

### Stats
- **`GET /api/stats`** (Requires Auth Token)
  - **Response**: `{ "username": "player1", "wins": 10, "played": 15 }`

---

## 2. WebSocket Events (Flask-SocketIO)

All multiplayer communication happens over WebSockets to ensure real-time updates.

### Client to Server (Emits)
- **`create_room`**: Request to generate a new game room.
- **`join_room`**: `{"room_id": "ABCD"}`. Request to join an existing room.
- **`mark_number`**: `{"room_id": "ABCD", "number": 14}`. Player tapped a number.
- **`player_won`**: `{"room_id": "ABCD"}`. Player claims they achieved Bingo.

### Server to Client (Broadcasts)
- **`room_created`**: `{"room_id": "ABCD"}`. Returns the generated room code.
- **`game_start`**: `{"players": ["player1", "player2"]}`. Emitted when two players are in the room.
- **`number_marked`**: `{"number": 14, "by": "player1"}`. Tells clients to cross out a number.
- **`game_over`**: `{"winner": "player1"}`. Ends the game and displays the victory screen.
