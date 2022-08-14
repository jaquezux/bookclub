import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';


function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div>
                    <Link className='navbar-logo' to='/'>
                        <i class="fa-solid fa-book-quran"> Clube do Livro! </i>
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div style={{ display: "flex", marginLeft: "auto", alignItems: "center" }}>
                    <ul className={click ? 'navbar-items active' : 'navbar-items'}>
                        <li className='navbar-item'>
                            <Link className='navbar-link' to='/about'>Sobre</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='navbar-link' to='/'>Categorias</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='navbar-link' to='/'>Apoio</Link>
                        </li>
                    </ul>
                    <Button label="Botão do Blog" styleProps={{ margin: "0px 20px" }} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar