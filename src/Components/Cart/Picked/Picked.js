import React from 'react';

const Picked = (props) => {
    const { name } = props.item;
    return (
        <div>
            <h2>Randomly Picked:</h2>
            <h3>{name}</h3>
        </div>
    );
};

export default Picked;