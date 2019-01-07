import React from 'react';
import MediaQuery from 'react-responsive';

// query="(min-device-width: 1224px)"
// Se utiliza el minWidth, que permite adaptar en ejecución de acuerdo al tamaño de la página
// Pero si quisiera aplicarse el efecto sólo cuando se utiliza en dispositivo, de acuerdo 
// al tamaño del mismo, se debería utilizar minDeviceWidth (aplica igual para el máximo)

const CustomerRow1 = ({id, name, picture, onClick}) => {
    return (
        <>
            <MediaQuery minWidth={500}>
                <div className='customer-row-1' key={id} onClick={onClick}>
                    <h2>{name}</h2>
                    <img src={picture} alt=""/>
                    <p>Versión expandida</p>
                </div>
            </MediaQuery>        
            <MediaQuery maxWidth={499}>
                <div className='customer-row-1' key={id} onClick={onClick}>
                    <h2>{name}</h2>
                    <p>Versión reducida</p>
                </div>
            </MediaQuery>        
        </>
    );
};

export default CustomerRow1;