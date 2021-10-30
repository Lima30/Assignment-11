import React from 'react';
import Banner from '../Banner/Banner';
import Distance from '../Distance/Distance';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">

            <Services></Services>
            <br />
            <br />
            <Banner></Banner>
            <br />
            <br />
            <Distance></Distance>

        </div>
    );
};

export default Home;