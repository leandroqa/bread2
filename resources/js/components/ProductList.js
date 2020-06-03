// resources/assets/js/components/ProductList.js

import axios from 'axios'
import React, { Component } from 'react'
import ProductCard from './ProductCard'

class ProductList extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/produtos').then(response => {
            this.setState({
                products: response.data
            })
        })
    }

    render() {
        const { products } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <h2>Produtos</h2>
                </div>
                <div className='row justify-content-center'>                    
                    <ProductCard productName="Product A" productImage="images/3b4142b6ebbb638e4dff3756c20923c4.jpg"/>
                    <ProductCard productName="Product B" productImage="images/93024fd192a918ac0ddb9c2e398577ed.jpg" />
                </div>
            </div>
        )
    }
}

export default ProductList