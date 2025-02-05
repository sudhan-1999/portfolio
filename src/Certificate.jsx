import React, { useEffect } from "react";
import Certificate1 from "./image/GuviCertification_0m6a2817c221V2qzo8_5.png";
import Certificate2 from "./image/GuviCertification_0m6a2817c221V2qzo8_5.png";

function Certificate() {
  useEffect(() => {
    const skills = document.querySelectorAll(".certificate-item");
  
    const handleScroll = () => {
      skills.forEach((skill) => {
        const rect = skill.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          skill.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
    const certificates = [Certificate1, Certificate1, Certificate1, Certificate1, Certificate1, Certificate1, Certificate1, Certificate1, Certificate1]; // Array of 9 certificates
    
  return (
    <div className="skills certificate-container" id="mycertificate">
      <div className="forcertificate">
        <p className="certificates">Certificates</p>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 certificate-item">
          {certificates.map((certificate, index) => (
            <div key={index} className="col" id='certificate'>
              <div className="card h-100 border-0">
                <img
                  src={certificate}
                  className="card-img-top"
                  alt={`Certificate ${index + 1}`}
                  style={{
                    width: "100%",        
                    height: "100%",       
                    objectFit: "cover",  /* Ensures full width & height */
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificate;
