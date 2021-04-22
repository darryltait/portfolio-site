import React from 'react';
import { Link } from 'react-router-dom';
import campsights from '../images/cs_home.png';


const PortfolioPage = () => (
    <div className="page-content">
        <h1>My Work</h1>
        <p>Checkout some of my stuff!</p>
        <img src={campsights} className="portfolio-img"/>
        <a href="https://campsights.herokuapp.com/" target="_blank" >Campsights</a>
        <a href="https://github.com/darryltait/campsights" ><i class="fa fa-github" aria-hidden="true"></i>
</a>
        <Link to="/portfolio/2" >Item Two</Link>

    </div>
);

export default PortfolioPage;