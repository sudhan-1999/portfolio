import axios from "axios";
import React, { useEffect, useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // Store validation errors

  const formData = { name, email, phone, subject, message };

  useEffect(() => {
    const skills = document.querySelectorAll(".forform");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.seen) {
            entry.target.classList.add("visible");
            entry.target.dataset.seen = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    skills.forEach((skill) => observer.observe(skill));

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";

    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone must be 10 digits";

    if (!subject.trim()) newErrors.subject = "Subject is required";
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!validateForm()) return; // Stop submission if errors exist

    try {
      const response = await axios.post("http://localhost:3000/", formData);
      console.log("Response:", response.data);

      // Clear form after successful submission
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setErrors({}); // Clear errors
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="forform container" id="forform">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control input-box"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control input-box"
              placeholder="Enter Your Mail Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control input-box"
              placeholder="Enter Your Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control input-box"
              placeholder="Enter Subject Of The Mail"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {errors.subject && <small className="text-danger">{errors.subject}</small>}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <textarea
              className="form-control textarea-box"
              placeholder="Enter Your Message Here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <small className="text-danger">{errors.message}</small>}
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn submit-btn" onSubmit={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
