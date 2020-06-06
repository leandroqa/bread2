// ProductCard.test.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import renderer from 'react-test-renderer';

test('card can render data', () => {
    const component = renderer.create(
    <ProductCard key="1" productName="Product Test" productImage="images/no-pic.jpg" />
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //tree.props.onMouseEnter();
  // re-rendering
  //tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //tree.props.onMouseLeave();
  // re-rendering
  //tree = component.toJSON();
  //expect(tree).toMatchSnapshot();
});