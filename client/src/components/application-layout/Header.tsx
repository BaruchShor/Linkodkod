import "../../style/Header.css";
import imageLogo from "../../LinkodkodLogos/LinkodkodLogo.png";
import NavBar from "../NavBar";

export default function Header() {
  return (
    <>
      <header id="header">
        <NavBar />
        <section id="nainHeader">
          <img id="LinkodkodLogo" src={imageLogo} alt="Linkodkod logo" />
          <h1 id="">Welcome to Linkodkod</h1>
          <div></div>
        </section>
      </header>
    </>
  );
}
