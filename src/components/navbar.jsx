import 'bootstrap/dist/css/bootstrap.css'
import { RiMenu4Fill} from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import style from './navbar.module.css'
import { useState } from 'react'

const Navbar = () => {
  const [isShow, setShow] = useState(false);
  const ShowNav = () => {
    setShow(!isShow)
  }
  //toggle btn background dark
  const [isChecked, setIsChecked] = useState(true);
  const myFunction = () => {
    var element = document.body;
          element.dataset.bsTheme = 
            element.dataset.bsTheme == "dark" ? "light" : "dark";
            setIsChecked(!isChecked);
            
        }


  return (
    <>
    <header>
    <nav className='shadow m-0 p-0'>
      <div className='container-fluid d-flex justify-content-between'>
      {/* left */}
        <div className={style.left}>
        <div className={`d-lg-none align-self-center`} onClick={ShowNav}><RiMenu4Fill className={style.menu}/></div>
          <ul className={`d-sm-none d-lg-flex d-none`}>
                <li><a href='#home'><FaHome className={style.icons}/>Home</a></li>
                <li><a href='#skill'><GiSkills className={style.icons}/>Skills</a></li>
                <li><a href='#contact'><MdContactPhone className={style.icons}/>contacts</a></li>
          </ul>


            <div className={`d-sm-block d-lg-none ${isShow ? '' : 'd-none'} ${style.sidebar}`}>
            {/* ito yung sa ul na kapag nakashow yung closed btn at line hr kasama makikita sa sidebar */}
            {isShow && (<div className={`d-lg-none align-self-center`}> <IoCloseSharp onClick={ShowNav} className={style.menu}/> <hr className={style.menu}/> 
            <ul>
            <li><a href='#home'><FaHome className={style.icons}/>Home</a></li>
                <li><a href='#skill'><GiSkills className={style.icons}/>Skills</a></li>
                <li><a href='#contact'><MdContactPhone className={style.icons}/>contacts</a></li>
            </ul>
            </div>)}
                
            </div>
        </div>
      {/* right */}
      <div className={style.right}>
      {/* Toggle btn */}
      <div className="form-check form-switch mx-1 col align-self-center">
      <input className="form-check-input p-2"
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
  )
}

export default Navbar