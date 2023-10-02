import React, {useState, useRef, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import logo from './logo.svg'
import Sidebar from "./Sidebar";
import Social from "./Social";

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const showMenu = () => {
        if (window.innerWidth > 800) {
            setShowLinks(true);
        } else {
            setShowLinks(false);
        }
    };
    window.addEventListener("resize", showMenu);
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo"/>
                <button
                    className="nav-toggle"
                    onClick={() => setShowLinks(!showLinks)}>
                    <FaBars/>
                </button>
                </div>


                <div className="link-container show-container">
                    {showLinks && <Sidebar/>}
                </div>
                <Social/>
            </div>


        </nav>
    );

}

export default Navbar
