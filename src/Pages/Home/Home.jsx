import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import PopularBrands from '../../components/PopularBrands/PopularBrands';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
           <ImageSlider></ImageSlider>
           <PopularBrands></PopularBrands>
           <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;