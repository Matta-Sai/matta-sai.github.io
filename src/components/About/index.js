import Header from "../Header"
import DatabasesCert from '../../assets/databases-cert.jpg' 
import CliCert from '../../assets/git&cli-cert.png' 
import JsCert from '../../assets/javascript-cert.png' 
import NodeJs from '../../assets/nodejs-cert.png' 
import PythonCert from '../../assets/python-cert.png' 
import "./index.css"

const About = () => (
    <div className = "about-container"> 
    <Header />
    <div className="about-content-container">
        <h1 className = "about-heading">About Me</h1>
        <p className="about-desc">Hello! I'm Sai, Currently Working As IT Support Assistant with 3 years of experience in providing technical support and troubleshooting. 
            My journey in the tech world has been both challenging and rewarding, allowing me to develop a strong foundation in IT support.
            <br/>
            I Have Completed my Bachelore of Arts in Gitam University, Vishakapatnam.
            <br/>
            I Expanded My skill set by diving into Full stack development by NxtWave CCBP,
            In my role as an IT Support Assistant, I've honed my problem-solving skills, learned to communicate effectively with users, 
            and developed a keen eye for detail. Now, as I learn Python, HTML, CSS ,Bootstap ,SQL ,JavaScript, and various frameworks 
            like,Node.Js , ExpressJs & React Js,
            I'm eager to build dynamic and responsive web applications.
            When I'm not immersed in coding or assisting users, I enjoy exploring new technologies, 
            reading tech blogs, and participating in coding challenges. I'm always on the lookout for opportunities to learn and grow, 
            and I'm excited about the future possibilities in the tech industry.</p>
    </div>
    <div className="certificates-container">
        <h2>Certificates</h2>
        <div className = "certificate-content">
            <button className="certificate">
            <a href = "https://certificates.ccbp.in/intensive/introduction-to-databases?id=GLWCKIXQDQ" rel = "noreferrer" target="_blank">
                <img className ="certificate-logo" src = {DatabasesCert} alt = "certificate" />
            </a>
                <p className = "cert-name">Databases Certification By Nxt</p>
            </button>
            <button className="certificate">
                <a href = "https://certificates.ccbp.in/intensive/developer-foundations?id=LDKPECPLAB" rel = "noreferrer" target="_blank">
                    <img className ="certificate-logo" src = {CliCert} alt = "certificate" />
                </a>
                <p className = "cert-name">CLI & GIT Certification By Nxt</p>
            </button>
            <button className="certificate">
            <a href = "https://certificates.ccbp.in/intensive/javascript-essentials?id=DFFKCSKOIW" rel = "noreferrer" target="_blank">
                <img className ="certificate-logo" src = {JsCert} alt = "certificate" />
            </a>
            <p className = "cert-name">Javascript Certification By Nxt</p>
            </button>
            <button className="certificate">
            <a href = "https://certificates.ccbp.in/intensive/node-js?id=KKYIYWCPQP" rel = "noreferrer" target="_blank">
                <img className ="certificate-logo" src = {NodeJs} alt = "certificate" />
            </a>
            <p className = "cert-name">NodeJs Certification By Nxt</p>
            </button>
            <button className="certificate">
            <a href = "https://certificates.ccbp.in/intensive/programming-foundations?id=QTJLJKYPQT" rel = "noreferrer" target="_blank">
                <img className ="certificate-logo" src = {PythonCert} alt = "certificate" />
            </a>
            <p className = "cert-name">Python Certification By Nxt</p>
            </button>
        </div>
    </div>
    </div>
)

export default About