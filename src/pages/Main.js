import React, { Component } from "react";
import { Route, NavLink, HashRouter } from 'react-router-dom'; 

import Home from './Home';
import About from './About';
import Products from './Products';
import Reservation from './Reservation';

class Main extends Component {
 render() {
   return (
        <HashRouter>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">WonderCat</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item" ><NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/products">Products</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/reservation">Reservation</NavLink></li>
                    </ul>
                </div>
            </nav>
            <div className="content">
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/products" component={Products}/>
                <Route path="/reservation" component={Reservation}/>
            </div>
        </div>
        </HashRouter>
   );
 }
}

export default Main;