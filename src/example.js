import React from 'react';

function Example({ name, image }) {
    return (
        <div>
            <h2>This is {name}</h2>
            <img src={image} alt={name}></img>
        </div>
    )
}

export default Example;