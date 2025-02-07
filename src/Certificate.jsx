import React, { useEffect } from "react";
import Certificate2 from "./image/GuviCertification_891d727624iv1w820o_4.png";
import Certificate3 from "./image/GuviCertification_0m6a2817c221V2qzo8_5.png";
import Certificate4 from "./image/GuviCertification_0P267Cl8Q221o6n818_5.png";
import Certificate5 from "./image/GuviCertification_22rHJy08KB2141a876_4.png";
import Certificate6 from "./image/GuviCertification_818tTJVn21u6072M25_4.png";
import Certificate7 from "./image/GuviCertification_a0V6W7828IC2TA211l_4.png";
import Certificate1 from "./image/GuviCertification_H28709w1L1868F26V2_5.png";
import Certificate8 from "./image/GuviCertification_o18g81R2726BTLz0c2_4.png";
import Certificate9 from "./image/GuviCertification_l801SF26hb2E812z71_5.png";

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
  
    const certificates = [Certificate1, Certificate2, Certificate3, Certificate4, Certificate5, Certificate6, Certificate7, Certificate8, Certificate9]; 
    
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
