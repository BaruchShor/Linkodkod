import "../style/PostPage.css";
import posts from "../../../server/postsDB.json";
import Post from "../components/Post";

export default function PostPage() {
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
