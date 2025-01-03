import {Link} from "react-router-dom"
import { FaConnectdevelop } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import "./index.css"


const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const onClickHamburger = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    const showMobileMenuClass = showMobileMenu ? "show" : "hide"
    return (
    <>
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
        <GiHamburgerMenu className= "hamburger" size = "30" color="#ffffff" onClick={onClickHamburger} />
    </div>
    <ul className = {showMobileMenuClass}>
        <li className = "header-item-mobile" >
            <Link className = "header-item-mobile" to = "/" >Home</Link>
        </li>
        <li className = "header-item-mobile">
            <Link className = "header-item-mobile" to = "/about" >About</Link>
        </li >
        <li className = "header-item-mobile">
            <Link className = "header-item-mobile" to = "/projects" >Projects</Link>
        </li>
        <li className = "header-item-mobile">
            <Link className = "header-item-mobile" to = "/contact" >Contact</Link>
        </li>
    </ul>
    </>
    
    
) }

export default Header