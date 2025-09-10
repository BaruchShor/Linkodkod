import { useState } from "react";
import { useNavigate } from "react-router";
import "../style/SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:3500/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          id: userId,
          password: password,
          description: description,
        }),
      });

      if (response.status === 200) {
        navigate("/login");
      } else {
        const errorMessage = await response.json();
        setError(errorMessage);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <article id="signupPage">
      <h2>Sign up page</h2>
      <form id="signForm" onSubmit={handleSubmit}>
        <label className="signLable" htmlFor="userName">
          User name
          <input
            className="signInput"
            type="text"
            id="userName"
            minLength={3}
            maxLength={20}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="signLable" htmlFor="userId">
          User Id
          <input
            className="signInput"
            type="number"
            id="userId"
            minLength={3}
            maxLength={3}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </label>
        <label className="signLable" htmlFor="password">
          Password
          <input
            className="signInput"
            type="password"
            id="password"
            minLength={6}
            maxLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="signLable" htmlFor="description">
          Description
          <input
            className="signInput"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button id="signBtn" type="submit">
          Sign up
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </article>
  );
}
