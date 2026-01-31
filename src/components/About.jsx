import '../styles/About.css'

const techStack = [
    "JavaScript ES6+",
    "React.js",
    "Python",
    "html / css"
];

const one = (
    <p>
        I'm a <b>Software Developer</b>.
        I am currently Freelancing and building projects.
    </p>
);

function About() {

    return (
        <div id="about">
            <div className="section-header">
                <span className="section-title">\ About me</span>
            </div>
            <div className="about-content">
              
            <div className="about-description">
             {one}
             {"Here are some technologies I have been using:"}
             <ul className="tech-stack">
             {techStack.map((stack, index) => 
                <li key={index}>
                    {stack}
                </li>
             )}
             </ul>
            </div>
             </div>
        </div>
    );
}

export default About;