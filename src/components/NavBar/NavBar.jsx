import './index.scss'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    return (
        <nav className='NavBar'>
            <Link to="/organization" className={location.pathname === '/organization' ? 'selected' : ''}>Organização</Link>
            <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>Tarefas</Link>
        </nav>
    )
}

export default NavBar