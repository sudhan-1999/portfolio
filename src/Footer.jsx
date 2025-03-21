import React from "react";

function Footer() {
  return (
    <footer className="footer  text-white text-center py-4">
      <div className="container">
        <h5>Let's Build Something Amazing Together!</h5>
        <p>
          I’m always open to new opportunities and collaborations. Whether you
          need a stunning UI, a dynamic web application, or just want to
          discuss tech, feel free to reach out!
        </p>
        <div className="contact-info">
          <p>📩 Email: jayasudhanwebdev@gmail.com</p>
          <p>📞 Phone: +91 6383556892</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jayasudhan-a-9593b4217/" className="text-white mx-2">
            Linkedin
          </a>
          <a href="https://github.com/" target="_blank" className="text-white mx-2">
            GitHub
          </a>
        </div>
        <hr className="my-3 border-light" />
        <p className="mb-0">© 2025 A. Jayasudhan. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
