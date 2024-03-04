import Me from "../images/dong.png";
import Typewriter from "./Typewriters";
import Typewriters1 from "./Typewriters1";
import { FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const HomeSection = () => {
  return (
    <>
      <section id="home">
        <div className="main">
          <div className="home shadow">
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
                    <button className="btn">
                      <a href="https://github.com/Dodong2"><FaGithub /></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-right">
              <img src={Me} />
            </div>
          </div>
        </div>
      </section>

      {/*Modal*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                hi
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <Typewriters1/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal">
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
