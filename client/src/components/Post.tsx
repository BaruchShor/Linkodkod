import IPost from "../interfaces/IPost";
import "../style/Post.css";

export default function Post({
  profile,
  postText,
  creationTime,
  likes,
}: IPost) {
  return (
    <>
      <article id="post">
        <section id="postHeader">
          <img id="profileImg" src={profile.img} alt="writerImg" />
          <section id="profileDetails">
            <div id="AdvertiserName">{profile.name}</div>
            <div id="advertiserDescription">{profile.description}</div>
            <div id="publicationTime">{creationTime}</div>
          </section>
        </section>
        <section id="postBody">
          <p id="postText">{postText}</p>
          <div id="postImages"></div>
        </section>
        <section id="postFoter">
          <div id="likes">{likes}</div>
        </section>
      </article>
    </>
  );
}
