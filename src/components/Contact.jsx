import React from 'react'
import { Col, Image, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <>
            <div className="container ">
                <h1 className="ls-2 mt-5 pt-5 text-primary text-center">Contact with Developer </h1>

                <div className="d-flex flex-column justify-content-center align-items-center ">
                    <Col xs={6} md={6} >
                        <Image className="w-50 ml-10" src="https://media-exp1.licdn.com/dms/image/C4D03AQEbHhuLwzHstw/profile-displayphoto-shrink_800_800/0/1604305418568?e=1617235200&v=beta&t=EOYUf4hvpAXCBd3dp5cR_DDOy--CBtNdrJKBhrMjhtU" roundedCircle />
                    </Col>

                    <Col xs={6} md={6} className="mt-3">
                        <p className=" fs-50 ls-2 text-center"> Yagnur Tetikcan</p>
                        <p className=" fs-20 ls-2 text-center "> ftnroned  dveopler </p>
                    </Col>

                    <Col xs={6} md={6}  >


                        <ul className='fs-20 p-5 ls-2 list-unstyled text-center'>
                            <li > <FontAwesomeIcon className="text-primary" icon={faEnvelope} /> <a className='text-decoration-none text-dark mx-2' href="mailto:yagnur7@gmail.com"> yagnur7@gmail.com  </a></li>
                            <li > <FontAwesomeIcon className="text-primary" icon={faBriefcase} /> <a className='text-decoration-none text-dark mx-2' href="https://www.linkedin.com/in/yagnurtetikcan/"> yagnurl </a></li>
                            <li > <FontAwesomeIcon className="text-primary" icon={faCamera} /> <a className='text-decoration-none text-dark mx-2' href="https://www.instagram.com/yagnurl/?hl=tr"> yagnurl  </a></li>
                            <li > <FontAwesomeIcon className="text-primary" icon={faHashtag} /> <a className='text-decoration-none text-dark mx-2' href="https://twitter.com/NestorsGloves"> nestorsgloves  </a></li>


                        </ul>
                    </Col>
                </div>
            </div>

        </>
    )
}
export default Contact