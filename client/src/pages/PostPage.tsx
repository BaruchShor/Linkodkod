import "../style/PostPage.css";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import IPost from "../interfaces/IPost";
import IProfile from "../interfaces/IProfile";

export default function PostPage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [profiles, setProfiles] = useState<IProfile[]>([]);

  useEffect(() => {
    const getAllData = async (path: string, func) => {
      try {
        const respons = await fetch(path, {
          method: "GET",
        });
        const result = await respons.json();
        console.log(result);
        func(result);
      } catch (err) {}
    };
    getAllData("http://localhost:3500/posts", setPosts);
    getAllData("http://localhost:3500/profiles", setProfiles);
  }, []);

  return (
    <>
      <article id="postPage">
        {posts.map((post) => {
          const user = profiles.filter((man) => man.password === post.authorId);
          return (
            <>
              <Post post={post} profile={user[0]} />
            </>
          );
        })}
      </article>
    </>
  );
}
