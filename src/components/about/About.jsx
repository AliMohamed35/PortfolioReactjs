import "./about.css";
import about from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

export default function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About me</h2>

      <div className="about_container grid">
        <figure>
          <img src={about} alt="" className="about_img" />
        </figure>

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I&apos;m Ali, Front-End developer from Egypt, Cairo. I have rich
              experience in web design, building and customization.
            </p>
            <a href="" className="btn">
              Download C.V.
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skill_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Graphic designer</h3>
                <span className="skills_number">60%</span>
              </div>

              <div className="skills_bar">
                <span className="skill_percentage graphic_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Freelancer</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skill_percentage free_lancer"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}
