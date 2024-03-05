import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/pages/Navbar'
import HomeSection from './components/pages/HomeSection'
import SkillSection from './components/pages/SkillSection'
import ContactSection from './components/pages/ContactSection'
import './App.css'
function App() {
  return (
    <>
    <Navbar/>
    <HomeSection />
    <SkillSection/>
    <ContactSection/> 
    </>
  )
}



export default App
