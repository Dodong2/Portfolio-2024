import Me from "../images/dong.png";
import Typewriter from './Typewriters'
import { FaGithub } from "react-icons/fa";

const HomeSection = () => {
  return (
    <section id="home">
        <div className="main">
          <div className="home shadow">
            <div className="txt-left">
            <div className="txt-left-child">
              <h1>Hi, I am</h1>
              <h1><span className="see">C</span>arl <span>A</span>rocha</h1>
              <div className="txt-ab">
              <Typewriter/>
              <p>Working as Web Development Front-End.</p>
              <div className="btn-home">
              <button className="btn">Greetings</button>
              <button className="btn"><FaGithub/></button>
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
  )
}

export default HomeSection
