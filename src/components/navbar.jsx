import 'bootstrap/dist/css/bootstrap.css'
import {IoMdMenu} from 'react-icons/io'
import style from './navbar.module.css'
import { useState } from 'react'

const navbar = () => {
  const [isShow, setShow] = useState(false);


  return (
    <>
    <div className={style.body}>
    <nav className='border border-primary bg-dark'>
      <div className='container-fluid m-0 p-0 d-flex justify-content-between'>
      {/* left */}
        <div className={style.left}>
          <ul>
            <li><div className='d-lg-none'><IoMdMenu/></div></li>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Contacts</li>
          </ul>
        </div>
      {/* right */}
      <div className={style.right}><button className={style.button}>click</button></div>
      </div>
    </nav>
    </div>
    </>
  )
}

export default navbar