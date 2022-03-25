import React from 'react';
import './Picked.css'

const Picked = (props) => {
    const { name, img } = props.item;
    return (

        <div>
            <h3>Randomly Picked:</h3>
            <div className='picked-item'>
                <img src={img} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Picked;