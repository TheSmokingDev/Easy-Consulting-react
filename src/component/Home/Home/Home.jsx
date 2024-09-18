import React from 'react';
import About from '../About/About';
import BrowserSupport from '../BrowserSupport/BrowserSupport';
import BuildTools from '../BuildTools/BuildTools';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import TechStack from "../BrowserSupport/TeckStack";

const Home = () => {
    return (
        <main style={{ maxWidth: '1640px' ,margin: "auto" }}>
            <Header/>
            <BuildTools/>
            <About/>
            <Services/>
            <TechStack/>
            <BrowserSupport/>
            <HappyClient/>
            <Reviews/>
            <Contact/>
            <Footer/>
        </main>
    );
};

export default Home;