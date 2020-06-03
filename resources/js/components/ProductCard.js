// resources/assets/js/components/Card.js

import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ProductCard({productName, productImage}) {
    return (
            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src={ productImage } />
                <Card.Body>
                    <Card.Title>{ productName }</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> 
    )
}