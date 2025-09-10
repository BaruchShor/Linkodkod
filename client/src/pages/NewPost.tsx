export default function NewPost() {
  return (
    <article id="newPost">
      <form id="newPostForm">
        <textarea id="postText"></textarea>

        <label htmlFor="">
          <input type="file" />
        </label>

        <button type="submit">Send</button>
      </form>
    </article>
  );
}
