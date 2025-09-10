import "../style/Post.css";
import likeLogo from "../LinkodkodLogos/like.png";

export default function Post({
  post: { postText, creationTime, postImg, likes },
  profile: { name, description, img },
}) {
  return (
    <>
      <article id="post">
        <section id="postHeader">
          <img id="profileImg" src={img} alt="writerImg" />
          <section id="profileDetails">
            <div id="AdvertiserName">{name}</div>
            <div id="advertiserDescription">{description}</div>
            <div id="publicationTime">{creationTime}</div>
          </section>
        </section>
        <section id="postBody">
          <p id="postText">{postText}</p>
          <div>
            <img id="postImages" src={postImg} alt="post img" />
          </div>
        </section>
        <section id="postFoter">
          <div id="likes">{likes}</div>
          <img id="likeLogo" src={likeLogo} alt="like logo" />
        </section>
      </article>
    </>
  );
}
