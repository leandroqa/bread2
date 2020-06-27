// resources/assets/js/components/Card.js

import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Card.css'

export default function ProductCard({productName, productDescription, productImage, productPrice}) {
    //console.warn(productDescription.split())
    return (
            <Card className="Card text-center">
                <Card.Img variant="top" src={ productImage } />
                <Card.Body>
                    <Card.Title>{ productName }</Card.Title>
                    <Card.Text>
                        {productDescription}                        
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