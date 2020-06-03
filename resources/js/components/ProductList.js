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
        const {products} = this.state
        
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <h2>Produtos</h2>
                </div>
                <div className='row justify-content-center'>
                    { products.map(product => (
                        <ProductCard key={product.id} productName={product.name} productImage={`images/${product.pic}`} />                        
                    ))}
                </div>                
            </div>
        )
    }
}

export default ProductList