import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';

import NotFoundPage from '../components/NotFoundPage';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import Footer from '../components/Footer';








const AppRouter = () => (
    <BrowserRouter>
        <div className="wrapper">
            <Header />

            <Switch>
               <Route path="/" component={DashboardPage} exact={true}/>
               <Route path="/contact" component={ContactPage}/>
               <Route path="/portfolio" component={PortfolioPage} exact={true}/>
               <Route path="/portfolio/:id" component={PortfolioItemPage}/>
               <Route component={NotFoundPage}/>
            </Switch>

            <Footer />
        </div>

    </BrowserRouter>
);

export default AppRouter;