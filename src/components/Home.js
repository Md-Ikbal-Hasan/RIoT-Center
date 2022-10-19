import React from 'react';
import Cards from './Cards';
import Footer from './Footer';
import PaperStatistics from './PaperStatistics';
import Partners from './Partners';
import Slider from './Slider';
import TeamMembers from './TeamMembers';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Cards></Cards>
            <TeamMembers></TeamMembers>
            <PaperStatistics></PaperStatistics>
            <Partners></Partners>


        </div>
    );
};

export default Home; <h1>This is home</h1>