import { useEffect, useState } from "react";

function AboutSection() {
  const [isvisible, setIsvisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsvisible(true), 300;
    });
  }, []);
  return (
    <div>
      <div className={`aboutcomp ${isvisible ? "visible" : ""}`} id="aboutcomp">
        <div className="card-header">About Me</div>
        <div className="card-body" id="aboutme">
          {" "}
           I’m a Full Stack Developer with a strong foundation in HTML,
          CSS, JavaScript, Bootstrap, SQL, MongoDB, Node.js, Express.js,
          ReactJS. I’m passionate about using these skills to develop
          innovative web applications that are user-friendly. I’m always eager
          to learn more about web development. I enjoy the
          challenge of coding and solving real-world problems. Currently, I’m
          looking for opportunities to join a team that values innovation and
          shares my enthusiasm for technology.
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
