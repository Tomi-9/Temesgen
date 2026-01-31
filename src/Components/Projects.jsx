import '../Styles/Projects.css'
import { Typewriter } from 'react-simple-typewriter';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const soon = [
    { text: "Projects In Progress...", className: "project" }
]

function Projects() {
    return (
        <div id="projects">
            {soon.map(s => (
                <span className={s.className}>
                    <Typewriter
                        words={[s.text]}
                        loop={1}
                        cursor
                        cursorStyle=" |"
                        typeSpeed={130}
                        delaySpeed={1000}
                    />
                </span>
            ))}
        </div>
    );

}

export default Projects;

