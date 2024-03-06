import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
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

  return (
    <section id="contact">
      <div className="cont-head">
        <h1>Contact</h1>
      </div>
      <div className="main">
        <div className="cont">
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
          <div className="direct-contact">
            <form>
              <input
                type="text"
                placeholder="Enter your email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
              <button type="submit" value="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
