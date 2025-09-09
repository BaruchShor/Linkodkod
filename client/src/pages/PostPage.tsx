import "../style/PostPage.css";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import IPost from "../interfaces/IPost";

export default function PostPage() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const respons = await fetch("http://localhost:3500/posts", {
          method: "GET",
        });
        const result = await respons.json();
        setPosts(result);
      } catch (err) {}
    };
    getAllPosts();
  }, []);

  return (
    <>
      <article id="postPage">
        {posts.map((post) => {
          return (
            <>
              <Post {...post} />
            </>
          );
        })}
      </article>
    </>
  );
}
