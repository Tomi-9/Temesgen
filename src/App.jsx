import './App.css'
import './styles/Global.css'
import NavBar from './Components/Nav.jsx'
import Intro from './Components/Intro.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Credits from './Components/Credits.jsx'
import 'rsuite/dist/rsuite.min.css';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <div id="content">
        <Intro />
        <About />
        <Projects />
        <Credits />
      </div>
      </div>

  )
}

export default App
