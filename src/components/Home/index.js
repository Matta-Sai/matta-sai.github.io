import {Component} from "react"
import About from "../About"
import Footer from "../Footer"
import ParticlesComponent from "../ParticlesComponent"
import Projects from '../Projects'
import ContactForm from "../ContactForm"
import Resume from "../../assets/Matta-Sai-Resume-20241230.pdf"
import { BsFacebook ,BsInstagram,BsLinkedin,BsGithub  } from "react-icons/bs";
import "./index.css"


// const professionsList = [
//     "Full Stack Devoloper","Photographer", "Tech Enthusiast ", "IT Support Ast", 
// ]

class Home extends Component {
    state = {
        randomProfession : "Aspiring React Developer"
    }

    // componentDidMount() {
    //     this.startInterval()
    // }

    // componentWillUnmount() {
    //     clearInterval(this.intervalId)
    // }

    // startInterval = () => {
    //     const intervalId = setInterval(this.randomizeProfession, 3000)
    //     console.log(intervalId)
    // }

    // randomizeProfession = () => {
    //     const randomNumber = Math.floor(Math.random() * (professionsList.length))
    //     this.setState({randomProfession : professionsList[randomNumber]})
    // }

    render() {
        const {randomProfession} = this.state 
        return(
            <>
            <div className = "home-container">
            <ParticlesComponent />   
            <div className = "home-content-container">
                <div className = "name-container">
                    <h1 className = "name" >Im, Sai</h1>
                    <p className ="profession-sub">I'm an <span className= "profession">{randomProfession}</span></p>
                </div>
                <div className = "links-container">
                    <button className="link-item">
                        <a href = "https://www.facebook.com/Saii111/" rel = "noreferrer" target="_blank">
                        <BsFacebook className = "link-icon"  size = "30"/>
                        </a>
                    </button>
                    <button className="link-item">
                        <a href = "https://www.instagram.com/saiii.png/" rel = "noreferrer" target="_blank">
                        <BsInstagram className = "link-icon"  size = "30"/>
                        </a>
                    </button>
                    <button className="link-item">
                        <a href = "https://www.linkedin.com/in/sai-matta-051932205/" rel = "noreferrer" target="_blank">
                        <BsLinkedin className = "link-icon"  size = "30"/>
                        </a>
                    </button>
                    <button className="link-item">
                        <a href = "https://github.com/Matta-Sai/" rel = "noreferrer" target="_blank">
                        <BsGithub className = "link-icon"  size = "30"/>
                        </a>
                    </button>
                </div>
                <a href={Resume} download="Matta-Sai-Resume-20241230">
                <button className = "resume-button" type = "button">Download Resume</button>
                </a>
            </div>
            </div>
            <About />
            <Projects />
            <ContactForm /> 
            <Footer />
            </>
        )
    }
}

export default Home