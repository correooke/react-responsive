import React from 'react';
import MediaQuery from 'react-responsive';

// query="(min-device-width: 1224px)"

const CustomerRow2 = ({id, name, picture}) => {
    return (
        <>
            <MediaQuery minWidth={500}>
                {
                    matches => {
                        if (matches) {
                            return (<div className='customer-row-2' key={id}>
                                <h2>{name}</h2>
                                <img src={picture} alt=""/> 
                                <p>Versión expandida (MQ)</p>
                            </div>);
                        } else {
                            return (
                            <div className='customer-row-2' key={id}>
                                <h2>{name}</h2>
                                <p>Versión reducida  (MQ)</p>
                            </div>);
                        }
                    }
                }
            </MediaQuery>        
        </>
    );
};

export default CustomerRow2;