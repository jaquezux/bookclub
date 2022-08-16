import React from 'react';
import Cards from '../Cards';
import '../../App.css';


function Category() {
    return (
        <>
            <div className='category'>
                <h1>Encontre seu tipo de leitura favorito!</h1>
            </div>
            <Cards />
        </>
    )
}

export default Category