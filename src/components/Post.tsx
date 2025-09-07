import "../style/Post.css";

export default function Post() {
  return (
    <>
      <article id="post">
        <section id="postHeader">
          <img src="" alt="writerImg" />
          <div id="Advertiser name"></div>
          <div id="advertiserDescription"></div>
          <div id="publicationTime"></div>
        </section>
        <section id="postBody">
          <p></p>
          <div id="postImages"></div>
        </section>
        <section id="postFoter">
          <div id="likes"></div>
        </section>
      </article>
    </>
  );
}
