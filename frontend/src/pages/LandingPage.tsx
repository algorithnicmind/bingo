import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AuthPayload } from "../types";
import "./LandingPage.css";

type AuthMode = "login" | "signup";

export default function LandingPage() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [form, setForm] = useState<AuthPayload>({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.username.trim() || !form.password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    // TODO: Connect to backend API
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 500);
  };

  const handleGuest = () => {
    navigate("/dashboard");
  };

  return (
    <div className="landing">
      <div className="landing__card">
        <h1 className="landing__title">
          B<span className="landing__title--accent">I</span>N
          <span className="landing__title--accent">G</span>O
        </h1>
        <p className="landing__subtitle">The classic game, reimagined</p>

        <div className="landing__tabs">
          <button
            className={`landing__tab ${mode === "login" ? "landing__tab--active" : ""}`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={`landing__tab ${mode === "signup" ? "landing__tab--active" : ""}`}
            onClick={() => setMode("signup")}
          >
            Signup
          </button>
        </div>

        <form className="landing__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="landing__input"
            autoComplete="username"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="landing__input"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
          />

          {error && <p className="landing__error">{error}</p>}

          <button
            type="submit"
            className="landing__btn landing__btn--primary"
            disabled={loading}
          >
            {loading ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="landing__divider">
          <span>or</span>
        </div>

        <button className="landing__btn landing__btn--guest" onClick={handleGuest}>
          Play as Guest
        </button>
      </div>
    </div>
  );
}
