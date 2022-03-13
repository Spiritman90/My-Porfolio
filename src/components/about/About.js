import "./about.css";
import Femi from "../../img/femi.jpeg";
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='a' id='about'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={Femi} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <hr />
        <p className='a-sub'>
          I am a Frontend developer based in Lagos, Nigeria 🇳🇬. Focused on
          creating interactive digital experiences on the web.
        </p>
        <p className='a-desc'>
          I enjoy working closely with design teams to faithfully translate
          their designs right down to the last pixel. Daily, you'll find me
          using modern frontend technologies that brings the creative process to
          life just as designers intended them to be.
        </p>
        <div className='a-award'>
          <div className='a-award-texts'>
            <h4
              className='a-award-title'
              style={{ color: darkMode && "white" }}
            >
              STACK
            </h4>
            <hr
              className='underline
            '
            />
            <p className='a-award-desc'>
              I’m familiar with technologies such as HTML, CSS, JavaScript,
              React, React-Redux, SCSS and TailwindCSS... <br />{" "}
              <a
                href='https://github.com/Spiritman90'
                target='_blank'
                rel='noreferrer'
                style={{ color: darkMode && "#59b256" }}
              >
                {" "}
                <br />
                SEE MY GITHUB... <FaGithub />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
