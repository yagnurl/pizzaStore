import React from 'react'
import "../App.css"
import NavBar from './NavBar'
import logoFooter from "../images/logoFooter.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <div class="footer fs-20 ls-2">
            <div className="container">
                <div className="row pt-2">
                    <Link to={`/`} className="navbar-brand" >
                        <img className="logo" src={logoFooter}></img>
                    </Link>
                </div>
                <div class="row pt-3 d-flex justify-content-between">
                    <div class="col-lg-5 col-xs-12 about-company">

                        <h4 class="mt-lg-0 mt-sm-4 ">contact</h4>
                        <p> <FontAwesomeIcon className="mx-2" icon={faMapMarkerAlt} /> Sun Cay, Ocean Club Dr, Bahamas</p>
                        <p> <FontAwesomeIcon className="mx-2" icon={faPhone} flip="horizontal" />+1 242 5555 519</p>

                    </div>
                    <div class="col-lg-3 col-xs-12 links">
                        <h4 class="mt-lg-0 mt-sm-3">Connect</h4>
                        <ul class="m-0 p-0">
                            <li> <a href="https://www.linkedin.com/in/yagnurtetikcan/">Linkedin</a></li>
                            <li> <a href="https://twitter.com/NestorsGloves">Twitter</a></li>
                            <li> <a href="https://www.instagram.com/yagnurl/?hl=tr">Instagram</a></li>

                        </ul>
                    </div>
                    <div class="col-lg-3 col-xs-12 links">
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17188.638654502152!2d-77.26058602656983!3d25.086076899972497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7e6c182db941%3A0x4ad96304545a982d!2sSun%20Cay%20Lighthouse!5e0!3m2!1str!2str!4v1611749389368!5m2!1str!2str" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>

                </div>
                <div class="row mt-2">
                    <div class="col copyright text-center">
                        <p class=""><small class="text-white-50">Copyright 2021 | Designed By
                        <a className="text-white text-decoration-none" href="https://www.linkedin.com/in/yagnurtetikcan/"> Yagnur Tetikcan </a>
                        </small></p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer