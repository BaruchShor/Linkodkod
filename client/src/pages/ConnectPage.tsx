import { useNavigate } from "react-router";
import "../style/ConnectPage.css";

export default function LogInPage() {
  const navigate = useNavigate();
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
