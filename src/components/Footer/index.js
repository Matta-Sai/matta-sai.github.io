import { BsFacebook ,BsInstagram,BsLinkedin,BsGithub  } from "react-icons/bs";
import "./index.css"

const Footer = () => (
    <div className = "footer-container">
        <button className="footer-item">
        <a href = "https://www.facebook.com/Saii111/" rel = "noreferrer" target="_blank">
            <BsFacebook className = "footer-icon"  size = "30"/>
            </a>
            Facebook
        </button>
        <button className="footer-item">
            <a href = "https://www.instagram.com/saiii.png/" rel = "noreferrer" target="_blank">
            <BsInstagram className = "footer-icon"  size = "30"/>
            </a>
            Instagram
        </button>
        <button className="footer-item">
            <a href = "https://www.linkedin.com/in/sai-matta-051932205/" rel = "noreferrer" target="_blank">
            <BsLinkedin className = "footer-icon"  size = "30"/>
            </a>
            Linkedin
        </button>
        <button className="footer-item">
            <a href = "https://github.com/Matta-Sai/" rel = "noreferrer" target="_blank">
            <BsGithub className = "footer-icon"  size = "30"/>
            </a>
            Github
        </button>
    </div>
)

export default Footer;