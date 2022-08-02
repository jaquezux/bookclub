import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link className='navbar-logo' to='/'>
                    <i class="fa-solid fa-book-quran"> Clube do Livro! </i>
                </Link>
                    <ul className='navbar-items'>
                        <li className='navbar-item'>
                            <Link className='navbar-link' to='/'>
                                Sobre
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='navbar-link' to='/'>
                                Categorias
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='navbar-link' to='/'>
                                Apoio
                            </Link>
                        </li>
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar