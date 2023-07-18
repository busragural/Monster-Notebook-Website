'use client'
import { useEffect, useState } from 'react';
import { getBannerData } from './SliderPhotos';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import '@/styles/Carousel.css'


const Carousel = () => {
    const [bannerData, setBannerData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    
    useEffect(() => {
        const fetchBannerData = async () => {
            const data = await getBannerData();
            setBannerData(data);
        };

        fetchBannerData();
    }, []);

    

    if (bannerData.length === 0) {
        return <div>Loading</div>;
    }

    const imageUrls = bannerData
        .map(item => item.parameters.find(param => param.key === 'prmImg'))
        .filter(Boolean)
        .map(param => `https://img-monsternotebook.mncdn.com${param.value}`);



    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % imageUrls.length;
        setCurrentIndex(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="slider text-[#1B1C1D]">
        <div className="slider-icons">
          <AiFillLeftCircle onClick={goToPrevSlide} className="left-btn" size={50} />
          <AiFillRightCircle onClick={goToNextSlide} className="right-btn" size={50} />
        </div>
        <div>
            <img src={imageUrls[currentIndex]} alt="Slider Image"  className='slider-image' />
        </div>
        
      </div>
    );
};

export default Carousel;