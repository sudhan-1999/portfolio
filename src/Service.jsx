import React, { useEffect } from "react";

function Service() {
  useEffect(() => {
    const skills = document.querySelectorAll(".servicesec");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.3 }
    );

    skills.forEach((skill) => observer.observe(skill));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container service-container" id="myservice">
      <div className="forservice">
        <p className="service">My Services</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 cards">
        <div className="col servicesec">
          <div className="card" style={{ width: "18rem", height: "19rem" }}>
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                I build high-performance, scalable, and secure web applications
                using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                Whether it's a dynamic website, an e-commerce platform, or a
                custom web solution, I ensure seamless functionality, optimized
                performance, and an intuitive user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="col servicesec">
          <div className="card" style={{ width: "18rem", height: "19rem" }}>
            <div className="card-body">
              <h5 className="card-title">UI Development</h5>
              <p className="card-text">
                I create visually stunning and user-friendly interfaces that
                enhance user experience. With a keen eye for design and
                expertise in HTML, CSS, JavaScript, and Figma, I craft
                responsive and interactive UI components that align with modern
                trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
