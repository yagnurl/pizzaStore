import React from 'react'
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap'
import "../../App.css"
function ProductCard(props) {
    return (
        <Card className="ms-5 mt-5 rounded-4">
            <Card.Img variant="top" src={`https://picsum.photos/id/${props.id + 50}/400/240`} />
            <Card.Body className="p-3">
                <Card.Title className="fs-30 ">{props.title}</Card.Title>
                <Card.Text className="fs-40 text-primary">
                    {props.price}
                </Card.Text>
                <Link to={`/products/${props.id}`} className="btn text-white bg-primary p-2 fs-20 px-4 ls-2 rounded-4">TAKE A LOOK</Link>
            </Card.Body>
        </Card>
    )
}

ProductCard.defaultProps = {
    title: 'Product',
    detail: 'Detail'
}

export default ProductCard