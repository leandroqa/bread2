// resources/assets/js/components/Card.js

import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ProductCard({productName, productDescription, productImage, productPrice}) {
    //console.warn(productDescription.split())
    return (
        <Card style={{
            display: 'flex',
            width: '260px',
            height: '420px',
            border: '1px solid lightgray',
            margin: '4px',
            padding: '2px',
            boxShadow: '5px 10px 18px #888888'}}
            className="text-center">
            <Card.Img variant="top" src={ productImage } />
            <Card.Body>
                <Card.Title>{ productName }</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.                        
                </Card.Text>
                <Card.Text>
                    R$ <strong>{ productPrice }</strong>                        
                </Card.Text>
                <Button variant="success" id="add"><strong>+</strong></Button>
                <span id="subTotal"> 0 </span>
                <Button variant="danger" id="remove"><strong>-</strong></Button>
            </Card.Body>
        </Card>            
    )
}