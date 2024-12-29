import {Link} from "react-router-dom"
import { FaConnectdevelop } from "react-icons/fa";
import "./index.css"


const Header = () => (
    <div className = "header-container">
        <Link className = "header-logo" to = "/" >
        <FaConnectdevelop size ="40" color="#ffffff" />
        </Link>
        <ul className = "header-options">
            <li >
                <Link className = "header-item" to = "/" >Home</Link>
            </li>
            <li >
                <Link className = "header-item" to = "/about" >About</Link>
            </li >
            <li>
                <Link className = "header-item" to = "/projects" >Projects</Link>
            </li>
            <li >
                <Link className = "header-item" to = "/contact" >Contact</Link>
            </li>
        </ul>
    </div>
)

export default Header