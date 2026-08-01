export interface UserStats {
  games_played: number;
  wins: number;
  losses: number;
}

export interface User {
  id: string;
  username: string;
  stats: UserStats;
  created_at: string;
}

export interface AuthPayload {
  username: string;
  password: string;
}

export interface AuthResponse {
  status: "success" | "error";
  token?: string;
  user?: User;
  message?: string;
}
