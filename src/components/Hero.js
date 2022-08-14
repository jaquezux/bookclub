import React from 'react';
import GirlReading from './assets/hero-img.png';
import './Hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <h1>Encontre um Clube do Livro</h1>
                <p>Aqui você vai encontrar o Clube do Livro ideal para seu gosto literário. Vamos ler juntos!</p>
            </div>
            <div className='wrapper-girl-circle'>
                <img className='image-girl-reading' src={GirlReading} alt='Girl reading' width={650} />
                <div className='background-circle' />
            </div>
        </div>
    )
}

export default Hero