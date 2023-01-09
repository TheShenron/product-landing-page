import React from 'react';
import Blog from '../components/Blog';
import HeroSection from '../components/HeroSection';
import Mission from '../components/Mission';
import Pricing from '../components/Pricing';
import SearchBar from '../components/SearchBar';


function Home(props) {
    return (
        <div>
            <SearchBar />
            <HeroSection />
            <Mission />
            <Pricing />
            <Blog />
        </div>
    );
}

export default Home;