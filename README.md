❌ React Tic-Tac-Toe ⭕

A sleek, functional Tic-Tac-Toe game built with React and Vite. This project demonstrates state management using hooks, effect synchronization, and conditional rendering.

🎮 Features
Dynamic Game State: Real-time tracking of player turns (X and O).
Win/Draw Logic: Automatically detects winning patterns across rows, columns, and diagonals, or identifies a draw if the board is full.
Persistent Status: A dynamic header that updates to show the next player, the winner, or a draw message.
Game Reset: A "Restart" feature that clears the board and resets the game state.
Custom Styling: Dark-themed UI with a responsive grid and a Google Font integration ("Poppins").

🛠️ Technical Details:

State Management:

The game logic utilizes React's core hooks:
useState: Manages the board array (squares), current turn (isXTurn), and the status message (record).
useEffect: Monitors changes in the board to calculate the game status immediately after a move.

Component Architecture:

Game Component: The main container holding all logic and the grid layout.
Square Component: A reusable functional sub-component that renders individual buttons for the grid.

📂 Project Structure:

Game.jsx: Contains the game logic, winning algorithm, and the Square component.
style.css: Custom CSS containing the flexbox layout, dark-mode colors (#223541), and button styling.

🎨 Styling Preview:

Background: Dark Slate (#223541)
Text Color: Red (for X/O) and White (for headers)
Reset Button: Greenyellow with rounded corners

🚀 Installation & Setup:

1. Clone the project:

```
git clone <https://github.com/HamzaHassanMir/TIC-TAC-TOE-GAME-USING-REACT>
```

2. Install dependencies:

```
npm install
```

3. Launch the development server:

```
npm run dev
```
<img width="1920" height="718" alt="Preview (2)" src="https://github.com/user-attachments/assets/229535e5-cdfb-4c21-ae5a-a7a92f7a94ae" />
<img width="1920" height="715" alt="Preview (1)" src="https://github.com/user-attachments/assets/f80bfcdc-cd4a-44e9-93e5-8bc7ca1389c3" />
<img width="1920" height="715" alt="Preview (3)" src="https://github.com/user-attachments/assets/bc08e743-13ff-4a98-ac72-8c83d2aeefc0" />
