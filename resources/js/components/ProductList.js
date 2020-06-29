// resources/assets/js/components/ProductList.js

import axios from 'axios'
import React from 'react'
import ProductCard from './ProductCard'

class ProductList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            loading : false,
            message : '',
            query : ''
        }
        this.cancel = '';
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {        
        this.productRefresh()
    }  
    
    productRefresh(){
        axios.get('/api/produtos').then(response => {
            this.setState({
                products: response.data
            })
        })
    } 

    handleSearch(event){
        const query = event.target.value;
        if (!query) {
            this.setState({ query, products: [], message: ''}, () => {
                this.productRefresh()
            });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.search(query);
            });
        }
    };

    search(query){
        const searchUrl = `/api/produtos/buscar`;

        if (this.cancel) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.post(searchUrl, { productName: query, cancelToken: this.cancel.token })
            .then(res => {
                const resultNotFoundMsg = !res.data
                    ? 'There are no more search results. Please try a new search'
                    : '';
                this.setState({
                    products: res.data,
                    message: resultNotFoundMsg,
                    loading: false
                })
            })
            .catch(error => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch the data. Please check network'
                    })
                }
            })
    };
    
    get renderProducts() {
        const { products } = this.state
        let prods = <p>Não há produtos disponíveis.</p>;
        if (this.state.products.length) {
            prods = products.map(function(product){
                return (
                    <ProductCard 
                        key={product.id} 
                        productName={product.name} 
                        productDescription={product.description}
                        productImage={`images/${product.pic}`} 
                        productPrice={product.price}
                    />
                )
            }
            )
        }
        return prods;
    }

    render() {    
        const { query, loading, message } = this.state;  
        const searchInputBox = <input type="text" className="form-control" placeholder="buscar produto" id="searchFor" value={query} onChange={this.handleSearch}/>
        return (
                <div className='container py-4'>
                    <div className="input-group mb-3">
                        {searchInputBox}
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexFlow: 'row wrap'}}
                    >
                        {this.renderProducts}
                    </div>                  
                </div>
        )                                    
    }
}

export default ProductList