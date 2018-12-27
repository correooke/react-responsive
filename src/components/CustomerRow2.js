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
                                <h2>{name}!</h2>
                                <img className='element-animation' src={picture} alt=""/> 
                                <p>
                                    Utiliza MediaQuery con matches (versión pantalla grande)
                                </p>
                            </div>);
                        } else {
                            return (
                            <div className='customer-row-2' key={id}>
                                <h2>Nombre: {name}</h2>
                                <p>
                                    Utiliza MediaQuery con matches (versión pantalla chica)
                                </p>
                            </div>);
                        }
                    }
                }
            </MediaQuery>        
        </>
    );
};

export default CustomerRow2;