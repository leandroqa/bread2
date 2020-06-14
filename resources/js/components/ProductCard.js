// resources/assets/js/components/Card.js

import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ProductCard({productName, productImage, productPrice}) {
    return (
            <Card className="col-sm-4 text-center">
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