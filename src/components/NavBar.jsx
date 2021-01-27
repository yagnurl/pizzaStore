import React from 'react'
import links from '../data/links'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from "../images/logo.png"
import "../App.css"

function NavBar(props) {
    const linkItems = links.filter(item => item.isLink).map((item, index) => (
        <li className="nav-item ls-2 fs-30" key={index}>
            <Link to={item.link} class="nav-link active" aria-current="page" >{item.title}</Link>
        </li>
    ))
    return (
        <nav className="navbar shadow-lg navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <Link to={`/`} className="navbar-brand" >
                        <img className="logo" src={logo}></img>
                    </Link>
                    <ul className="navbar-nav">

                        {linkItems}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar