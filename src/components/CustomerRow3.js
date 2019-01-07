import React from 'react';

const CustomerRow3 = ({id, name, picture}) => {

    return (
    <div className='customer-row-3' key={id}>
        <h2>{name}</h2>
        <img className='image' src={picture} alt=""/> 
        <p>Utiliza media queries</p>
    </div>);

};

export default CustomerRow3;