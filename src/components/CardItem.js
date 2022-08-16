import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem({ subtitle, alt, src, paragraph }) {
  return (
      <div className='card-wrapper'>
        <div className='card-image-wrapper'>
          <Link className='card-image-link' to='/'>
            <img className='card-image' alt={alt} src={src} />
            <h3 className='card-image-title'>{subtitle}</h3>
          </Link>
        </div>

        <div className='card-paragraph'>
          <p>{paragraph}</p>
        </div>
      </div>
  )
}

export default CardItem