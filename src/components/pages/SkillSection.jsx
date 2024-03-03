import 'bootstrap/dist/css/bootstrap.css'
import { TbBrandNodejs } from "react-icons/tb";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
const SkillSection = () => {
  return (
    <section id="skill">
      <div className='main'>
        <div className='skill shadow'>
        <div className='skill-ttl'>
        <h1><span>S</span>kill</h1>
        </div>
        <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><ImHtmlFive/> HTML</li>
          <li className="list-group-item"><IoLogoCss3/> CSS</li>
          <li className="list-group-item"><RiJavascriptFill/> JavaScript</li>
          <li className="list-group-item"><BiLogoTypescript/> Typescript</li>
          <li className="list-group-item"><FaBootstrap/> Bootstrap</li>
          <li className="list-group-item"><FaReact/> Reat.JS</li>
        </ul>
        <div className="card-footer fs-5 fw-bold text-center ttl-bg">
          FRONT-END
        </div>
      </div>
      {/* Backend*/}
      <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-"><SiPhp/> PHP</li>
        <li className="list-group-item"><SiXampp/> Xampp</li>
        <li className="list-group-item"><TbBrandNodejs/> Node.JS</li>
        <li className="list-group-item">--</li>
        <li className="list-group-item">--</li>
        <li className="list-group-item">--</li>
      </ul>
      <div className="card-footer fs-5 fw-bold text-center ttl-bg">
        BACK-END
      </div>
    </div>
    {/* Other Languages*/}
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-"><SiVite/> Vite</li>
        <li className="list-group-item"><TbBrandNextjs/> Next.JS</li>
        <li className="list-group-item"><BiLogoTailwindCss/> Tailwind</li>
        <li className="list-group-item">--</li>
        <li className="list-group-item">--</li>
        <li className="list-group-item">--</li>
      </ul>
      <div className="card-footer fs-5 fw-bold text-center ttl-bg">
        OTHER
      </div>
    </div>
    <div className='skill-ttl-end'>
        <h5>still in progress and ready to learn...</h5>
        </div>
      </div>
        </div>
      </section>
  )
}

export default SkillSection