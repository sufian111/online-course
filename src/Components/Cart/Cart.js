import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const a = Number(product.price);
        total = total + a;
    }
    let b = Number(total);


    return (
        <div>
            <h4><strong>Total Courses Price</strong></h4>
            <p>Items ordered :{cart.length}</p>
            <p>Total price:{b}</p>
        </div>
    );
};

export default Cart;