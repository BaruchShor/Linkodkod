import { useNavigate } from "react-router";
import "../style/ConnectPage.css";
import { useEffect } from "react";

export default function LogInPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await fetch("http://localhost:3500/auth/validate", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.valid) {
          localStorage.setItem("userId", data.user);
          navigate("/postpage");
        } else {
          localStorage.removeItem("token");
        }
      } catch {
        localStorage.removeItem("token");
      }
    };
    checkToken();
  }, []);
  return (
    <>
      <article id="connectPage">
        <h1>Sign or log in</h1>
        <section id="connForm">
          <button
            className="connBtn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </button>
          <button
            className="connBtn"
            type="submit"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign in
          </button>
        </section>
      </article>
    </>
  );
}
