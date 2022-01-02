import React from 'react';
import PropertyContainer from '../Components/PropertyContainer';
import Filter from '../Components/Filter';

const Home = () => {
    return (
        <>
        <h1>Home</h1>
        <Filter />
        <div id="homes">
        <PropertyContainer />
        </div>
        </>
    )
}

export default Home;