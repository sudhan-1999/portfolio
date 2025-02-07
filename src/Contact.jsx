import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const skills = document.querySelectorAll(".forform");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    skills.forEach((skill) => observer.observe(skill));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="forform container" id="forform">
      <form className="contact-form">
        <div className="row">
          <div className="col-md-6">
            <input type="text" className="form-control input-box" placeholder="Enter Your Name" />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control input-box" placeholder="Enter Your Mail Id" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <input type="text" className="form-control input-box" placeholder="Enter Your Mobile Number" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control input-box" placeholder="Enter Subject Of The Mail" />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <textarea className="form-control textarea-box" placeholder="Enter Your Message Here..."></textarea>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
