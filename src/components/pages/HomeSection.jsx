import Me from "../images/dong.png";
import Typewriter from "./Typewriters";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
const HomeSection = () => {
  return (
    <>
      <section id="home">
        <div className="main">
          <div className="home shadow">
          {/* Text left */}
            <div className="txt-left">
              <div className="txt-left-child">
                <h1>Hi, I am</h1>
                <h1>
                  <span className="see">C</span>arl <span>A</span>rocha
                </h1>
                <div className="txt-ab">
                  <Typewriter />
                  <p>Working as Web Development Front-End.</p>
                  <div className="btn-home">
                    <button
                      className="btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Greetings
                    </button>
                    <a href="https://github.com/Dodong2">
                    <button className="btn">
                        <FaGithub />
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Image right */}
            <div className="img-right">
              <img src={Me} />
            </div>
          </div>
        </div>
      </section>

      {/*Modal for greetings */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
            <img src={Me} />
            <h2>👋</h2>
            </div>
            <div className="modal-body">
              <p>Greetings, My name is Carl Stephen Arocha. I`m currently studying
              second year of BSIT. As a web developer, I possess a
              beginner-level skill set, which I have detailed below. As I am
              keen on expanding my portfolio, I am open to collaborating on
              projects that align with my skill set. Please find my skills
              outlined below. Thank you for your consideration.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-center">
            <a href="https://web.facebook.com/carlstephen.cazenas/">
            <button className="btn btn-dark"><FaFacebook/></button>
            </a>
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
