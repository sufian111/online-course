import React from 'react';
import './Product.css';


const Product = (props) => {
    const { img, name, Teacher, price, service,ratings } = props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="">
                <h5 className="product-name">{name}</h5>
                <br />
                <h5>Teacher Name: {Teacher}</h5>
                <h4>price: {price}Taka</h4>
                <p><strong>Our Service: {service} </strong></p>
                <p>Ratings: {ratings}</p>
                <button onClick={()=> props.handleAddProduct(props.product)} className="btn btn-primary">Enroll now</button>
            </div>
        </div>
    );
};

export default Product;