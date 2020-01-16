import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {

  let cartItems;
  if (props.cartItems.length === 0) {
    cartItems = <h2> Your Cart is Empty </h2>;
  } else {
    cartItems = props.cartItems.map(item => {
      return <CartSummaryItem key={item.cartItemId} product={item} />;
    });
  }
  function handleBackClick() {
    props.setView('catalog', {});
  }

  function getTotal() {
    const priceArr = props.cartItems.map(value => value.price);
    const total = priceArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    return (total / 100).toFixed(2);
  }

  function handleCheckoutClick() {
    if (props.cartItems.length !== 0) {
      props.setView('checkout', {});
    }

  }

  return (
    <div>
      <p className=" m-1 text-muted cursor-pointer" onClick={handleBackClick}><i className="fas fa-arrow-left"></i> Back to Catalog</p>
      <h1 className= "ml-3"> My Cart </h1>
      {cartItems}
      <h2 className="ml-3 d-inline">Total: ${getTotal()}</h2>
      <button type="button" className="btn btn-primary float-right mr-2" onClick={handleCheckoutClick}>Checkout</button>
    </div>
  );
}

export default CartSummary;
