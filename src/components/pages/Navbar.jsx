import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { RiMenu4Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import Me from '../images/dong.png'

const Navbar = () => {
  // const [isShow, setShow] = useState(false);
  // const ShowNav = () => {
  //   setShow(!isShow);
  // };
  
  //toggle btn background dark
  const [isChecked, setIsChecked] = useState(true);
  const myFunction = () => {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "dark" ? "light" : "dark";
    setIsChecked(!isChecked);
  };
  /* For title */
  const handleClick = (title) => {
    document.title = title;
  };
  
  /* para ma copy yung link ng site */
  const copyLinkToClipboard = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL)
      .then(() => {
        alert('Carl: Link copied to clipboard!, thank you for sharing.');
      })
      .catch((error) => {
        console.error('Failed to copy link: ', error);
      });
  };

  /* End of para ma-copy yung link ng site */
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
                  <a href="#home" onClick={() => handleClick('Home')}>
                    <FaHome className="icons" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skill" onClick={() => handleClick('Skills')}>
                    <GiSkills className="icons" />
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => handleClick('Contacts')}>
                    <BsFillTelephoneFill className="icons" />
                    Contacts
                  </a>
                </li>
              </ul>
            {/* for show navbar wala lang to */}
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
                <div className="header p-2">
                  <div className="offcanvas-title" id="offcanvasScrollingLabel">
                  <div></div>            
                  </div>
                  <div className="sidebar-img">
                    <img src={Me} />
                    </div>
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
                    <hr/>
                    <li>
                      <a href="#skill">
                        <GiSkills className="icons" />
                        Skills
                      </a>
                    </li>
                    <hr/>
                    <li>
                      <a href="#contact">
                        <BsFillTelephoneFill className="icons" />
                        Contacts
                      </a>
                    </li>
                    <hr/>
                  </ul>
                </div>
                <hr/>
                <div className="sidebar-footer">
                <div className="" onClick={copyLinkToClipboard}>
                <FaShareAlt/>
                </div>
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
              <h1></h1>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
