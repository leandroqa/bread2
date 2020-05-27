// resources/assets/js/components/ProductList.js

import axios from 'axios'
import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

class ProductList extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    // componentDidMount() {
    //     axios.get('/api/produtos').then(response => {
    //         this.setState({
    //             products: response.data
    //         })
    //     })
    // }

    render() {
        //const { products } = this.state
        return (
            <div className='container py-4'>
                <h2>Produtos</h2>
            </div>
        )
    }
}

export default ProductList