export type GameMode = "single" | "ai" | "multiplayer" | "team";

export type BingoCell = {
  number: number;
  marked: boolean;
};

export type BingoGrid = BingoCell[][];

export type Player = {
  id: string;
  username: string;
  grid: BingoGrid;
};

export type CompletedLine = {
  type: "row" | "col" | "diagonal";
  index: number;
};

export type GameState = {
  mode: GameMode;
  players: Player[];
  currentTurn: string | null;
  drawnNumbers: number[];
  completedLines: Record<string, CompletedLine[]>;
  winner: string | null;
  roomId: string | null;
};
