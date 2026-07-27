# System Architecture & Tech Stack - Bingo Web App

## 1. High-Level Architecture
The application will follow a standard client-server architecture with real-time bidirectional communication capabilities. 

- **Client**: A Single Page Application (SPA) providing a fast, app-like experience on mobile browsers.
- **Server**: A lightweight backend responsible for handling multiplayer rooms, user authentication, and game state validation.
- **Database**: A NoSQL database to store user profiles and match history.

## 2. Proposed Technology Stack

### 2.1 Frontend
- **Framework**: React.js (Bootstrapped with Vite for faster builds).
- **Routing**: React Router (for navigating between Login, Dashboard, and Game Rooms).
- **Styling**: Vanilla CSS. 
  - Focus on CSS Grid/Flexbox for the Bingo board.
  - Usage of CSS variables for theming (Dark mode default).
  - Keyframe animations for satisfying micro-interactions (e.g., crossing out a number).
- **State Management**: React Context API or Zustand (for managing game state, current turn, and marked numbers).

### 2.2 Backend
- **Runtime environment**: Python.
- **Web Framework**: Flask (for REST APIs like authentication and fetching stats).
- **Real-Time Engine**: Flask-SocketIO.
  - Essential for the **Multiplayer** mode.
  - Handles Room creation, joining, and broadcasting `number_selected` events to peers with minimal latency.

### 2.3 Database
- **Primary Database**: MongoDB (via Mongoose).
- **Collections**:
  - `Users`: Stores credentials, username, and stats (wins, games played).
  - `Matches` (Optional): Stores logs of online matches for historical data.

## 3. Real-time Multiplayer Workflow (Flask-SocketIO)
1. **Create Room**: Player 1 clicks "Multiplayer" -> "Create Room". Server generates a unique 4-6 character Room ID and Player 1 joins this socket room.
2. **Join Room**: Player 2 clicks "Join Room" and enters the Room ID. Server adds Player 2 to the socket room.
3. **Start Game**: Server broadcasts `game_start` to both players. Clients generate their respective grids.
4. **Gameplay Loop**:
   - Player 1 clicks number `12`.
   - Client sends `mark_number: { room: "ABCD", number: 12 }` to the server.
   - Server broadcasts `number_marked: 12` to everyone in room "ABCD".
   - Both clients update their UI to cross out `12` and evaluate win conditions.
5. **Win Condition**: If a client evaluates a win (B-I-N-G-O achieved), it emits `player_won`. Server broadcasts `game_over` and updates database stats.

## 4. Deployment Strategy (Suggested)
- **Frontend**: Vercel or Netlify (Fast global CDN, seamless integration with GitHub).
- **Backend**: Render or Railway (Free/Cheap tiers available, supports WebSockets easily).
- **Database**: MongoDB Atlas (Free cluster is more than sufficient for this scale).
