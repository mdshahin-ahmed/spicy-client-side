import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import GetFood from '../GetFood/GetFood';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <GetFood></GetFood>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;