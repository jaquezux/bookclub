import React from 'react';
import GirlReading from './assets/hero-img.png';
import './Hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <h1>Encontre um <br></br>Clube do Livro</h1>
                <p>Aqui você vai encontrar diferentes opções de <strong>Clubes do Livro online</strong>! <br></br> Encontre comunidades para leitura conjunta e aproveite mais ainda a experiência de um bom livro! &#9825;</p>
            </div>
            <div className='wrapper-girl-circle'>
                <img className='image-girl-reading' src={GirlReading} alt='Girl reading' width={650} />
                <div className='background-circle' />
            </div>
        </div>
    )
}

export default Hero