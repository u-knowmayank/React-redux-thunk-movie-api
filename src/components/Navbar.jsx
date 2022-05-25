import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="topnav">
            <div className="left">
                <NavLink className="act" to={'/'} style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#E50914',
                            background: 'black',
                        }
                        : { color: 'white', background: 'black' }
                }>Home</NavLink>
            </div>
            <div className="right">
                <NavLink to="/Favorites" className='act' style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#E50914',
                            background: 'black',
                        }
                        : { color: 'white', background: 'black' }}>Favorites</NavLink>
                <NavLink to="/Contacts" className='act' style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#E50914',
                            background: 'black',
                        }
                        : { color: 'white', background: 'black' }}>Contact</NavLink>
            </div></div>
    )
}

export default Navbar
