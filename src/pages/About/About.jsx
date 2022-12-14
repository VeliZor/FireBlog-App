import { AboutCon, AboutDiv, GitIcon, LinkIcon } from "./About-styled";

function About() {
  return (
    <div>
      <AboutCon>
        <img src="images/coding.svg" alt="" />
        <h2>About Full-stack Web Developer WeAreBored</h2>
        <AboutDiv>
          <h3>I'm Bored.</h3>
          <p>I'm currently learning full-stack development languages.</p>
          <p>
            I've already known JS, ReactJS, React Native, Node MYSQL,Python.
          </p>
          <div>
            <LinkIcon />
            <GitIcon />
          </div>
        </AboutDiv>
      </AboutCon>
    </div>
  );
}

export default About;
