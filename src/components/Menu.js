import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/popup">PopUp</Link></li>
                <li><Link to="/epub">EPub</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;