import "../../style/Header.css";
import imageLogo from "../../LinkodkodLogos/LinkodkodLogo.png";

export default function Header() {
  return (
    <>
      <header id="header">
        <section id="nainHeader">
          <img id="LinkodkodLogo" src={imageLogo} alt="Linkodkod logo" />
          <h1 id="">Welcome to Linkodkod</h1>
          <div></div>
        </section>
      </header>
    </>
  );
}
