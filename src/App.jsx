import './App.css'
import './styles/Global.css'
import NavBar from './components/Nav.jsx'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Credits from './components/Credits.jsx'
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
