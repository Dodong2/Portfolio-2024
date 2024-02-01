import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'



const DarkBtn = () => {

    const [isDark, setDark] = useState(false)

    const BtnToggle = () => {
        setDark(previsDark => !previsDark)
    }

  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
    <button className="" onClick={BtnToggle}>Change light</button>
    </div>
  )
}

export default DarkBtn