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
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {        
        axios.get('/api/produtos').then(response => {
            this.setState({
                products: response.data
            })
        })
    }

    handleSearch (event) {
        this.setState({
            searchVal: event.target.value
        })
        //console.log(this.state.searchVal)
    }

    render() {
        const {products} = this.state
        const searchInputBox = <input type="text" className="form-control" placeholder="buscar produto" id="searchFor" value={this.state.seachVal} onChange={this.handleSearch}/>
        if(products.length > 0)
            return (
                <div className='container py-4'>
                    <div className="input-group mb-3">
                        {searchInputBox}
                    </div>
                    <div className='row justify-content-center'>
                        { products.map(product => (
                            <ProductCard key={product.id} productName={product.name} productImage={`images/${product.pic}`} productPrice={ product.price} />                        
                        ))}
                    </div>                
                </div>
            )
        else
            return (
                <div className='container py-4'>
                    <div className="input-group mb-3">
                        {searchInputBox}
                    </div>
                    <div className='row justify-content-center'>
                        Não há produtos disponíveis.
                    </div>                
                </div>
            )                            
    }
}

export default ProductList