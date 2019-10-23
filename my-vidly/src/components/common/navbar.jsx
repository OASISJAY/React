import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Movies from '../movies2';
import Customers from '../customers';
import Rentals from '../rentals';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" >Vidly</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavLink to="/movies" className="nav-item nav-link" > Movies</NavLink>
                    <NavLink to="/customers" className="nav-item nav-link" >Customers</NavLink>
                    <NavLink to="/rentals" className="nav-item nav-link" >Rentals</NavLink>
                    <Route path="/movies" />
                    <Route path="/customers" component={Customers} />
                    <Route path="/rentals" component={Rentals} />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

