import { Typewriter } from 'react-simple-typewriter';
import '../styles/Intro.css'

const words = [
    { text: "Hi I'm ", className: "intro-greeting" },
    { text: "Temesgen", className: "intro-name" },
];

const techRole = [
    { text: "Software Developer", className: "tech" }
]

/* 
 
*/
function Intro() {

    return (
        <div id="intro">
            <h3 className="intro-title">
                {words.map((word, index) => (
                    <span key={index} className={word.className}>
                        <Typewriter
                            words={[word.text]}
                            loop={1}
                            typeSpeed={120}
                            delaySpeed={1000}
                        />
                        {" "}
                    </span>
                ))}
            </h3>
            <h4>
                {techRole.map((tech, index) => (
                    <span key={index} className={tech.className}>
                        <Typewriter
                            words={[tech.text]}
                            loop={1}
                            cursor
                            cursorStyle=" |"
                            typeSpeed={130}
                            delaySpeed={1000}
                        />
                    </span>
                ))}
            </h4>
        </div>
    );
}

export default Intro;