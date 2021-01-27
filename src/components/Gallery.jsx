import React from 'react'
import "../App.css"
import { Navbar } from 'react-bootstrap'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import images from "../data/images.json"
import product from '../images/pizzas/product1.jpg'
import names from '../data/names'



function Gallery() {
    const settings = {
        className: "center",
        focusOnSelect: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
    };

    let galleryImages = images.products.map((item, index) =>

        // < div >
        //     <img className="sliderImg" src={require(`../images/pizzas/product${index + 1}.jpg`)} alt="" />
        // </div >
        <div>
            <img className="sliderImg" src={'https://images.unsplash.com/photo-1589906493606-a6ca2a06078b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'} alt="" />
        </div>


    )

    // let galleryImages = names.map(name => {
    //     <div>
    //         <img
    //             src={require(`../images/pizzas/${name}.jpg`)}
    //             alt=""
    //             className="img-responsive" />
    //     </div>
    // });

    return (

        <div className=" row ">
            <div className="container-fluid">

                <Slider className="mt-5  " {...settings}>
                    {galleryImages}
                </Slider>

                {/* <img className="sliderImg" src={require('./images/timer.png')} alt="" /> */}

            </div>


        </div>
    )
}

export default Gallery