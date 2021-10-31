import React from 'react';
import Footer from '../../Footer/Footer';
import Founder from '../../Founder/Founder';
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
            <br />
            <br />
            <Founder></Founder>
            <br />
            <br />

        </div>
    );
};

export default Home;