import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactSection = () => {
  /* for copy the context on button */
  const handleClick = () => {
    // Get the text content of the button
    const buttonText = "+639163926198";
    // Create a textarea element to copy the text to the clipboard
    const textarea = document.createElement("textarea");
    textarea.value = buttonText;

    // Make sure textarea is not displayed
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;

    // Append the textarea to the DOM
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand("copy");

    alert("Text copied to clipboard: " + buttonText);
  };

  /* Email.js library */
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_345facs", "template_u1bdmy5", form.current, {
        publicKey: "pcVUpUfKq-HRj0GQI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  /* End Email.js library */
  return (
    <section id="contact">
      <div className="cont-head">
        <h1>
          <span>C</span>ontact
        </h1>
      </div>
      <div className="main">
        <div className="cont">
          {/* Social Contact left side */}
          <div className="social-contact">
            <div className="btn-cont">
              <a href="https://web.facebook.com/carlstephen.cazenas/">
                <button className="btn">
                  <FaFacebook className="cont-icons" />
                  Facebook
                </button>
              </a>
              <a href="https://www.linkedin.com/in/arocha-carl-stephen-b3392b2b3/">
                <button className="btn">
                  <FaLinkedin className="cont-icons" />
                  Linkedin
                </button>
              </a>
              <button className="btn" onClick={handleClick}>
                <MdContactPhone className="cont-icons" />
                +639163926198
              </button>
            </div>
          </div>
          {/* Direct Contact right side */}
          <div className="direct-contact">
            <div className="fill-up-forms">
              <form id="fillup" ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  id="opname"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  id="gmail"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  required
                  name="subject"
                />
                <textarea
                  name="message"
                  rows="5"
                  cols="50"
                  placeholder="Your Message"
                  id="message"
                  required
                ></textarea>
                <button type="submit" value="Send">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="cont-footer">
        <p>© Copyright created by Carl Arocha.</p>
        <p>All rights reserved 2024.</p>
      </div>
    </section>
  );
};

export default ContactSection;
