import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ProductCard from "./ProductCard"
import productsInfo from "../../data/productsInfo.json"
import Search from "../Search"
import "../../App.css"
function Products() {

    const productCards = productsInfo.productsInfo.filter(item => item.isActive).map((item, index) => (

        <div className="col-sm-3 mx-4 mb-3 ">
            <ProductCard id={item.id} title={item.title} price={item.price} />
        </div>

    ))

    return (
        <div className="container-fluid bg-pizza">

            <div className="container ">


                <h1 className="text-center mt-5 ls-2 text-primary fs-50 ">ALL AWWWSOME PIZZAS</h1>


                <Search />


                <div className=" d-flex flex-wrap justify-content-center">
                    {productCards}
                </div>

            </div>

        </div>
    )
}

export default Products