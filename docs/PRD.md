# Product Requirements Document (PRD) - Bingo Web App

## 1. Overview
The goal of this project is to create a digital, web-based version of the classic 5x5 Bingo game. The app is primarily designed for students to play casually in class without needing paper and pen. It aims to digitize the manual experience while adding new game modes to enhance playability.

## 2. Target Audience
- Students playing on their mobile phones.
- Users looking for a quick, casual, and interactive game.

## 3. Core Features & User Flow

### 3.1 Authentication & Landing
- **Landing Page**: A clean, premium entry point.
- **Login / Signup**: Users can create an account to save their game statistics (wins/losses).
- **Free View (Guest Mode)**: Users can bypass login and jump straight into the game.

### 3.2 Dashboard
- Displays the user's profile and stats.
- Presents four distinct game modes for the user to choose from.

### 3.3 Game Modes

1. **Single vs Single (Digital Paper Mode)**
   - **Description**: Replicates the exact experience of playing on paper.
   - **Rules**: Two players play on their own devices.
   - **Syncing**: No backend synchronization. Grids are independent. Players manually communicate and cross out numbers on their own screens.

2. **Single vs AI**
   - **Description**: The user plays against a computer opponent.
   - **Rules**: The user takes a turn, then the AI automatically selects a number.

3. **Multiplayer (Online)**
   - **Description**: Real-time multiplayer over the internet.
   - **Rules**: A user creates a room and shares a code. Another user joins.
   - **Syncing**: When one player marks a number, it automatically crosses out on the opponent's screen.

4. **Team (Pass & Play)**
   - **Description**: Two players share a single mobile device.
   - **Rules**: The screen accommodates two grids (or toggles between them) so both players can take turns on the same phone.

## 4. Gameplay Mechanics
- **The Grid**: A 5x5 matrix filled with numbers from 1 to 25.
- **Grid Generation**: Numbers can be randomly shuffled and placed into the grid. (Future enhancement: Manual placement).
- **Winning Condition**: Completing 5 lines (horizontal, vertical, or diagonal) spells out B-I-N-G-O. First player to complete BINGO wins.

## 5. Non-Functional Requirements
- **Mobile-First**: The UI must be highly optimized for mobile devices (portrait mode).
- **Performance**: Fast load times, especially for the "Free View" mode.
- **Aesthetics**: Premium, engaging design with micro-animations and a dark mode focus to prevent screen glare.
