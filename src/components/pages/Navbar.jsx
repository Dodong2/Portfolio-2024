import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [isShow, setShow] = useState(false);
  const ShowNav = () => {
    setShow(!isShow);
  };
  //toggle btn background dark
  const [isChecked, setIsChecked] = useState(true);
  const myFunction = () => {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "dark" ? "light" : "dark";
    setIsChecked(!isChecked);
  };

  return (
    <>
      <header>
        <nav className="shadow m-0 p-0">
          <div className="container-fluid d-flex justify-content-between">
            {/* left */}
            <div className="left">
              <div
                type="button"
                className={`d-lg-none align-self-center`}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                <RiMenu4Fill className="menu" />
              </div>
              {/*<div className={`d-lg-none align-self-center`} onClick={ShowNav}><RiMenu4Fill className={style.menu}/></div>*/}
              <ul className={`d-sm-none d-lg-flex d-none`}>
                <li>
                  <a href="#home">
                    <FaHome className="icons" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skill">
                    <GiSkills className="icons" />
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <BsFillTelephoneFill className="icons" />
                    Contacts
                  </a>
                </li>
              </ul>

              {/*<div className={`d-sm-block d-lg-none ${isShow ? 'open' : ''}`}>
            /ito yung sa ul na kapag nakashow yung closed btn at line hr kasama makikita sa sidebar/
            {isShow && (<div className={`d-lg-none align-self-center ${style.sidebar}`}> <IoCloseSharp onClick={ShowNav} className={style.menu}/> <hr className={style.menu}/> 
            <ul>
            <li><a href='#home'><FaHome className={style.icons}/>Home</a></li>
                <li><a href='#skill'><GiSkills className={style.icons}/>Skills</a></li>
                <li><a href='#contact'><BsFillTelephoneFill className={style.icons}/>contacts</a></li>
            </ul>
            </div>)}
                
  </div>*/}
              <div
                className={`offcanvas offcanvas-start ${["width"]}`}
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex="-1"
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                    Testing pa ito
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <hr className="menu" />
                <div className="offcanvas-body p-0 m-0">
                  <ul>
                    <li>
                      <a href="#home">
                        <FaHome className="icons" />
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#skill">
                        <GiSkills className="icons" />
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href="#contact">
                        <BsFillTelephoneFill className="icons" />
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="right">
              {/* Toggle btn */}
              <div className="form-check form-switch mx-1 col align-self-center">
                <input
                  className="form-check-input p-2"
                  type="checkbox"
                  role="switch"
                  id="SwitchCheck"
                  checked={isChecked}
                  onChange={myFunction}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
