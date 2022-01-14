import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import GetFood from '../GetFood/GetFood';
import HomeMenu from '../HomeMenu/HomeMenu';
import Footer from '../../Shared/Footer/Footer';
import Reviews from '../../Dashboard/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <GetFood></GetFood>
            <HomeMenu></HomeMenu>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;