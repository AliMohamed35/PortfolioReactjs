import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

export default function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <figure>
          <img src={Me} alt="" className="home_img" />
        </figure>
        <h1 className="home_name">Ali Mohamed</h1>
        <span className="home_education">I&apos;m a Front-End developer</span>

        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
}
