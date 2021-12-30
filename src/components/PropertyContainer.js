import React from 'react';
import PropertyCard from './PropertyCard';
const properties = require('../stays.json')

const PropertyContainer = () => {
    return (
        properties.map((house) => {
            return <>
            <PropertyCard 
                image={house.photo}
                city={house.city}
                country={house.country}
                title={house.title}
                rating={house.rating}
                type={house.type}
            />
            </>
        })
    
    )
}

export default PropertyContainer;