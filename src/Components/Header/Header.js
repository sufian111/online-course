import React from 'react';
import logo from '../../images/stock-vector-students-watching-online-training-video-with-teacher-and-chart-on-tablet-online-teaching-share-1331332631.png';
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>     
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/home">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/deom-class">Demo class <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Contect-us">Contect Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/cart">Cart</a>
                </li> 
                </ul>
            </div>
            </nav>
        </div>
    );
};

export default Header;