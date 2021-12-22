import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import GetFood from '../GetFood/GetFood';
import HomeMenu from '../HomeMenu/HomeMenu';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <GetFood></GetFood>
            <HomeMenu></HomeMenu>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;