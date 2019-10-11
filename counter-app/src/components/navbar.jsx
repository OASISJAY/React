import React from 'react';
//stateless functional component
const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Rendered');
    return ( //move props to argument.
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="http://">
                Navbar <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );

};
export default NavBar;