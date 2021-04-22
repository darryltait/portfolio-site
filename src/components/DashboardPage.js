import React from 'react';
import { NavLink } from 'react-router-dom';


import image from '../images/dt-site-pic.jpg';
import coding from '../images/coding-image.jpg';
import longmont from '../images/Longmong.png';

const DashboardPage = () => (
    <div className="page-content">
        <h1>Welcome!</h1>
        <div className="me">
         <img src={image} /> 
        <h3>I'm Darryl</h3>

        </div>
         {console.log('hey')}
         <div className="city">
         <img src={longmont} />
        <h3>A web-developer in Longmont, CO</h3>

         </div>
         <div className="work">
        {/* <img src={coding} className='icon'/> */}
        {/* <img src={coding} className='icon'/> */}
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}  ><img src={coding} className='icon'/></NavLink>
        <h3>Here's some of my recent work</h3>

         </div>
        {/* <i class="fas fa-code"></i>
        <i class="fas fa-laptop-code"></i> */}

        <div className="contact">

        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        <h3>I'd love to talk with you about work/project opportunities!</h3>
        </div>

    </div>
);

export default DashboardPage;