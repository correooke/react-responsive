import React from 'react';
import MediaQuery from 'react-responsive';

// query="(min-device-width: 1224px)"
const Desktop = ({children}) => <MediaQuery minWidth={500}>{children}</MediaQuery>

const CustomerRow4 = ({id, name, picture}) => {
    return (
        <div className='customer-row-4' key={id}>
            <h2>{name}</h2>
            <Desktop>
                <img src={picture} alt=""/> 
            </Desktop>
            <p>Versión expandida (MQC)</p>
        </div>
    );
};

export default CustomerRow4;