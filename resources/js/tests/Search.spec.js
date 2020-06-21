import React from 'react';
import renderer from 'react-test-renderer';
import ProductList from '../components/ProductList'

//mock search axios getter

const products = [
    {'id': 1, 'name': 'Pão de queijo', 'describe': 'maravilhoso pão de queijo de minas', 'status': 'A', 'price': 0.50, 'pic': 'no-pic.jpg'},
    {'id': 2, 'name': 'Pão de metro', 'describe': 'maravilhoso pão de metro de minas', 'status': 'A', 'price': 5.82, 'pic': 'no-pic.jpg'},
    {'id': 3, 'name': 'Broa de chocolate', 'describe': 'broa de chocolate', 'status': 'A', 'price': 2.50, 'pic': 'no-pic.jpg' },
    {'id': 4, 'name': 'Pão francês', 'describe': 'pãozinho francês', 'status': 'A', 'price': 1.0, 'pic': 'no-pic.jpg' },
    {'id': 5, 'name': 'Enrolado recheado', 'describe': 'maravilhoso enrolado recheado de nutela', 'status': 'A', 'price': '1.25', 'pic': 'no-pic.jpg' }
]

test('search test WIP', () => {
    //handle input text to test product search
    expect(true).toBe(true);
})


    