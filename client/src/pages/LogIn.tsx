import { useState } from "react";
import "../style/LogIn.css";
export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>("");

  const handleSubmit = (e: { prventDefault: () => void }) => {
    e.prventDefault();
    setError(null);
    try {
      console.log("Hi");
    } catch (error) {}
  };
  return (
    <>
      <article id="loginPage">
        <form id="loginForm">
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
    </>
  );
}
