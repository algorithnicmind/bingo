# Database Schema (MongoDB)

Since the project is small, the database schema is kept minimal. We will use two primary collections.

## 1. `users` Collection
Stores user credentials and overall lifetime statistics.

```json
{
  "_id": "ObjectId('...')",
  "username": "player1",
  "password_hash": "$2b$12$somehashedpasswordstring",
  "stats": {
    "games_played": 25,
    "wins": 12,
    "losses": 13
  },
  "created_at": "2023-10-25T10:00:00Z"
}
```

## 2. `matches` Collection (Optional)
Useful if you want to track match history for a leaderboard or past games review.

```json
{
  "_id": "ObjectId('...')",
  "room_id": "ABCD",
  "players": ["ObjectId('user1_id')", "ObjectId('user2_id')"],
  "winner": "ObjectId('user1_id')",
  "duration_seconds": 124,
  "played_at": "2023-10-25T10:15:00Z"
}
```
