import { useState } from "react";
import { useNavigate } from "react-router";
import "../style/NewPost.css";

export default function NewPost() {
  const navigate = useNavigate();
  const [postText, setPostText] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log(localStorage.getItem("token"));
    const formData = new FormData(e.target);
    formData.get(postText);
    formData.get(file);
    console.log(localStorage.getItem("token"));
    try {
      const response = await fetch("http://localhost:3500/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
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
    <article id="newPost">
      <form id="newPostForm" onSubmit={handleSubmit}>
        <textarea className="newPostInpot" id="postText"></textarea>

        <label htmlFor="file">
          Add your imag
          <input className="newPostInpot" type="file" />
        </label>

        <button id="sendBtn" type="submit">
          Send
        </button>
      </form>
    </article>
  );
}
