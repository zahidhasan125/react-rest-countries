import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my React Rest Country</h1>
            <ul className='navbar'>
                <li>Home</li>
                <li>Our Vision</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
};

export default Header;