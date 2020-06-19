// resources/assets/js/components/ProductList.js

import axios from 'axios'
import React, { Component } from 'react'
import ProductCard from './ProductCard'

class ProductList extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            loading : false,
            value : ''
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

    async handleSearch(e) {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
    };
    
    async search(val){
        this.setState({ loading: true });
        try {
            const res = await axios.post('/api/produtos/buscar', { productName: val });
            const products = await res.data;
            this.setState({ products, loading: false });            
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    };
    

    get renderProducts() {
        const { products } = this.state
        let prods = <h1>Não há produtos disponíveis.</h1>;
        if (this.state.products) {
            prods = products.map(product => (
                <ProductCard key={product.id} productName={product.name} productImage={`images/${product.pic}`} productPrice={product.price} />
            ))
        }
        return prods;
    }


    render() {        
        const searchInputBox = <input type="text" className="form-control" placeholder="buscar produto" id="searchFor" value={this.state.value} onChange={this.handleSearch}/>
        return (
                <div className='container py-4'>
                    <div className="input-group mb-3">
                        {searchInputBox}
                    </div>
                    <div className='row justify-content-center'>
                        {this.renderProducts}
                    </div>                
                </div>
        )                                    
    }
}

export default ProductList