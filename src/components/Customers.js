import React from 'react';

const Customers = ({
    data, renderItems
}) => {
    return (
        <div className='customers-list'>
            {data.map(item => renderItems(item))}
        </div>
    );
};

export default Customers;