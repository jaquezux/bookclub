import React from 'react';
import './Footer.css';
import LogoHorizontal from './assets/logo1.png';

function Footer() {;
  return (
    <div className='footer-container'>
        <img className='footer-logo' src={LogoHorizontal} alt='Vamos ler Juntos! Clube do Livro.'/>
        <p className='texto-rodape'>Vamos Ler Juntos!</p>
    </div>
  )
}

export default Footer