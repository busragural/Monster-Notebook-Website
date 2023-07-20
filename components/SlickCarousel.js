'use client'

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getBannerData } from './SliderPhotos';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/SlickCarousel.css'

const SlickCarousel = () => {
  const [bannerData, setBannerData] = useState([]);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    
    autoplay: true,
    
    customPaging: () => <CustomDots />
   
   
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {bannerData.map((item) => (
          <div key={item.id} className='slide-item'>
            {item.parameters
              .filter((param) => param.key === 'prmImg')
              .map((param) => (
                <img
                  key={param.value}
                  src={`https://img-monsternotebook.mncdn.com${param.value}`}
                  
                  className="slide-image"
                />
              ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;

const CustomDots = ({ onClick, active }) => (
    <div className={`custom-dot ${active ? 'active' : ''}`} onClick={onClick} />
  );

  