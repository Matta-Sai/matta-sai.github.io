import {Component} from "react"
import { BsFacebook ,BsInstagram,BsLinkedin,BsGithub  } from "react-icons/bs";
import "./index.css"


const professionsList = [
    "Full Stack Devoloper","Photographer", "Tech Enthusiast ", "IT Support Ast", 
]

class Home extends Component {
    state = {
        randomProfession : "Full Stack Devoloper"
    }

    componentDidMount() {
        this.startInterval()
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    startInterval = () => {
        const intervalId = setInterval(this.randomizeProfession, 3000)
        console.log(intervalId)
    }

    randomizeProfession = () => {
        const randomNumber = Math.floor(Math.random() * (professionsList.length))
        this.setState({randomProfession : professionsList[randomNumber]})
    }

    render() {
        const {randomProfession} = this.state 
        return(
            <div className = "home-container">
            <div className = "home-content-container">
                <div className = "name-container">
                    <h1 className = "name" >Im, Sai</h1>
                    <p className ="profession-sub">I'm a <span className= "profession">{randomProfession}</span></p>
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
            </div>
            </div>
        )
    }
}

export default Home