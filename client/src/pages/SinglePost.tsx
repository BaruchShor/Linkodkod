import { useLocation, useNavigate } from "react-router";
import "../style/SinglePost.css";

export default function SinglePost() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const {
    postText,
    creationTime,
    postImg,
    likes,
    name,
    description,
    img,
    likeLogo,
  } = location.state || { menu: [] };

  return (
    <>
      <article id="singlPostPage">
        <button id="backToPosts"
          onClick={() => {
            navigate("/postpage");
          }}
        >
          Close
        </button>
        <section id="singlePost">
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
          <section id="postFooter">
            <div id="likes">{likes}</div>
            <img id="likeLogo" src={likeLogo} alt="like logo" />
          </section>
        </section>
      </article>
    </>
  );
}
