import { useState } from "react";
import "../style/LogIn.css";
import { useNavigate } from "react-router";

export default function LogIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:3500/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
        credentials: "include",
      });

      if (response.status === 200) {
        const data = await response.json();

        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        navigate("/postpage");
      } else {
        const errorMessage = await response.json();
        setError(errorMessage);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  return (
    <article id="loginPage">
      <form id="loginForm" onSubmit={handleSubmit}>
        <label className="loginLable" htmlFor="username">
          User name
          <input
            type="text"
            id="username"
            className="loginInput"
            minLength={3}
            maxLength={20}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label className="loginLable" htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            className="loginInput"
            minLength={6}
            maxLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button id="loginBtn" type="submit">
          Log in
        </button>
      </form>
    </article>
  );
}
