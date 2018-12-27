import React from 'react';
import MediaQuery from 'react-responsive';

// query="(min-device-width: 1224px)"

const CustomerRow = ({id, name, picture, onClick}) => {
    return (
        <>
            <MediaQuery minWidth={500}>
                <div className='customer-row' key={id} onClick={onClick}>
                    <h2>{name}</h2>
                    <img src={picture} alt=""/>
                    <p>Versión expandida</p>
                </div>
            </MediaQuery>        
            <MediaQuery maxWidth={499}>
                <div className='customer-row' key={id} onClick={onClick}>
                    <h2>{name}</h2>
                    <p>Versión reducida</p>
                </div>
            </MediaQuery>        
        </>
    );
};

export default CustomerRow;