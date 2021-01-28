import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import productsInfo from '../../data/productsInfo.json'
import data from "../Data"
function ProductDetail() {

    let { productID } = useParams()

    const product = productsInfo.productsInfo.filter((item) => item.id === Number(productID)).map(
        (item) =>

            <Container className="mb-5" >
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img className='sliderImg' src={data[`${item.id}`]} alt="..." />
                        </div>
                        <div class="col-md-8 p-5">
                            <div class="card-body">
                                <h5 class="card-title fs-50">{item.title}</h5>
                                <p class="card-text fs-30">  {item.detail} </p>
                                <p class="card-text fs-40">  {item.price}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    )

    return (
        <>


            <div className="d-flex justify-content-center mt-5">
                <nav aria-label="breadcrumb ">
                    <ol className="breadcrumb fs-30">
                        <li className="breadcrumb-item "><Link className="text-primary text-decoration-none" to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link className="text-primary text-decoration-none" to="/products">All Pizzas</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">You Chose This One</li>
                    </ol>
                </nav>
            </div>

            {product}
        </>
    )
}

export default ProductDetail
