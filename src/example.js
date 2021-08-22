import React from 'react';

function Example({ name, image, rating }) {
    return (
        <div>
            <h2>This is {name}</h2>
            <h3>{rating} / 5</h3>
            <img src={image} alt={name}></img>
        </div>
    )
}

export default Example;