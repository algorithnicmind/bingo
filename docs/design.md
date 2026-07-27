# UI/UX Design Specifications - Bingo Web App

## 1. Aesthetic Direction
- **Theme**: Premium Dark Mode.
- **Vibe**: Cyberpunk / Neon / Glassmorphism.
- **Primary Goal**: Prevent screen glare in dark classrooms while looking visually striking and modern.

## 2. Color Palette
- **Background**: Very dark grey/blue (e.g., `#0F172A` or `#121212`).
- **Surface/Cards**: Slightly lighter translucent grey with background blur (Glassmorphism effect).
- **Primary Accent (Neon)**: Electric Cyan (`#00E5FF`) for selections and buttons.
- **Secondary Accent**: Cyberpunk Pink (`#FF007F`) for opponent actions or errors.
- **Text**: Off-white (`#F8FAFC`) for primary text, muted grey (`#94A3B8`) for secondary text.

## 3. Typography
- **Primary Font**: `Inter` or `Roboto` (Clean, modern sans-serif).
- **Numbers (Bingo Grid)**: `Outfit` or `Poppins` (Bold, highly legible for quick scanning).

## 4. Key UI Components
- **The Grid (5x5)**:
  - Responsive CSS Grid.
  - Number tiles should look like slightly raised tactile buttons.
  - **Interaction**: When clicked, the tile slightly depresses, the number fades slightly, and an "X" or glowing ring appears over it.
- **B-I-N-G-O Indicator**:
  - Five letters at the top of the screen.
  - By default, they are dimmed. As the player completes lines, they light up one by one in a bright neon color.

## 5. Animations & Micro-interactions
- **Hover/Tap**: Gentle scale-down effect (`transform: scale(0.95)`).
- **Line Completion**: A glowing line strikes through the row/column/diagonal.
- **Victory**: A satisfying burst of digital confetti or a pulsing glow effect across the entire screen.
