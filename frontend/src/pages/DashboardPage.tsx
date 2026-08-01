import type { GameMode } from "../types";
import "./DashboardPage.css";

const GAME_MODES: { mode: GameMode; label: string; desc: string }[] = [
  { mode: "single", label: "Single vs Single", desc: "Play with a friend on the same device" },
  { mode: "ai", label: "Single vs AI", desc: "Challenge the computer" },
  { mode: "multiplayer", label: "Multiplayer", desc: "Play online with friends" },
  { mode: "team", label: "Team (Pass & Play)", desc: "Two players, one device" },
];

export default function DashboardPage() {
  const handleSelect = (mode: GameMode) => {
    // TODO: Navigate to game room with mode
    console.log("Selected mode:", mode);
  };

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">
          B<span className="dashboard__title--accent">I</span>N
          <span className="dashboard__title--accent">G</span>O
        </h1>
        <p className="dashboard__guest">Guest Player</p>
      </header>

      <div className="dashboard__modes">
        {GAME_MODES.map(({ mode, label, desc }) => (
          <button
            key={mode}
            className="dashboard__mode"
            onClick={() => handleSelect(mode)}
          >
            <span className="dashboard__mode-label">{label}</span>
            <span className="dashboard__mode-desc">{desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
