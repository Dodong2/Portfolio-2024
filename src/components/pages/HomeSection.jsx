import Me from "../images/dong.png";
import Typewriter from './Typewriters'

const HomeSection = () => {
  return (
    <section id="home">
        <div className="main">
          <div className="home">
            <div className="txt-left">
            <div className="txt-left-child">
              <h1>Hi, I am</h1>
              <h1>Carl Arocha</h1>
              <Typewriter/>
              <p>Working as Web Development Front-End.</p>
              <button className="btn">Greetings</button>
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
