import { useState } from "react";
import { useNavigate } from "react-router";
import "../style/NewPost.css";

export default function NewPost() {
  const navigate = useNavigate();
  const [postText, setPostText] = useState("");
  const [file, setSelectedFile] = useState("");

  //   const handleFileChange = (event) => {
  //     setSelectedFile(event.target.files[0]);
  //   };
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target);
    formData.append("postText", postText);
    formData.append("postImg", file);
    try {
      const response = await fetch("http://localhost:3500/posts", {
        method: "POST",
        //body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postText: postText,
          creationTime: "07/09/2025",
          likes: 6,
          authorId: 123,
          id: 12,
          postImg: "http://localhost:3500/postsImages/menachemsPostImg.png",
        }),
      });

      if (response.status === 200) {
        navigate("/postpage");
      } else {
        const errorMessage = await response.json();
        setError(errorMessage);
      }
    } catch (err) {
      if (err instanceof Error) {
        navigate("/postspage");
        setError(err.message);
      }
    }
  };
  return (
    <article id="newPost">
      <form id="newPostForm" onSubmit={handleSubmit}>
        <textarea
          className="newPostInpot"
          id="postText"
          onChange={(e) => {
            setPostText(e.target.value);
          }}
        ></textarea>

        <label htmlFor="file">
          Add your imag
          <input
            className="newPostInpot"
            type="file"
            accept="image/*"
            onChange={(e) => {
              setSelectedFile(e.target.value);
            }}
            required
          />
        </label>

        <button id="sendBtn" type="submit">
          Send
        </button>
      </form>
    </article>
  );
}
