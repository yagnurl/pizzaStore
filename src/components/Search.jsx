import React, { useRef, useState, useEffect } from 'react'
import { Card, Form, Col, Button, Container } from 'react-bootstrap'

import { useLocation, useHistory, Link } from 'react-router-dom'
import productsInfo from '../data/productsInfo.json'
import ProductCard from './product/ProductCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Search(props) {

    const location = useLocation()
    const history = useHistory()
    const params = new URLSearchParams(location.search)

    const q = params.get("q")
    console.log(q)

    const inputValue = useRef()
    const [searchResult, setSearchResult] = useState([])

    useEffect(
        () => {
            if (q) {
                inputValue.current.value = q ? q : ""


                const productResults = productsInfo.productsInfo.filter(item =>
                    item.title.toLowerCase().includes(q.toLowerCase())).map(item =>
                        <li key={item.id} class="list-group-item p-3 fs-30">
                            <Link className="text-decoration-none text-dark" to={`/products/${item.id}`}> {item.title} </Link>

                        </li>
                    )
                setSearchResult(productResults)
                console.log(productResults)
            }
            console.log(new Date())

        }, [q])


    function handleForm(event) {
        event.preventDefault()
        history.push(`/search?q=${inputValue.current.value}`)
    }

    return (
        <>
        <Container>

            <Form onSubmit={handleForm}>
                <Form.Row className="align-items-center justify-content-end">
                    <Col sm={6} className="my-2">

                        <Form.Control 
                            name='q'
                            type='text'
                            className='form-control p-3 ls-2 border-0 bg-tranparent border-bottom'
                            id='search'
                            ref={inputValue} placeholder="I am looking for..." />
                    </Col>


                    <Col xs="auto" className="my-1">
                    <FontAwesomeIcon onClick={handleForm} icon={faSearch}  />
                        
                    </Col>



                </Form.Row>
            </Form>
            
            <ul className="list-group w-75 mx-auto mt-5">
                        <li className="list-group-item bg-transparent bg-primary text-white p-2 m-3 mb-5 fs-40 ls-2">Results
                        
                         {searchResult}
                        </li>
                       
                    </ul>
                    </Container>
        </>
    )
}

export default Search