import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
function App() {
  const [isChecked, setIsChecked] = useState(true);

 const myFunction = () => {
  var element = document.body;
        element.dataset.bsTheme =
          element.dataset.bsTheme == "dark" ? "light" : "dark";
          setIsChecked(!isChecked);
      }

  return (
    <>
    <Navbar/>
    <div className="form-check form-switch mx-4">
      <input
        className="form-check-input p-2"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked={isChecked}
        onChange={myFunction}
      />
    </div>
    </>
  )
}

export default App
