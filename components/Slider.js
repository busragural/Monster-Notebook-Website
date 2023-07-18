'use client'
import { useState, useEffect } from 'react';
import { getBannerData } from './SliderPhotos';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
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

  return (
    <div>
      <Carousel>
        {bannerData.map((item) => (
          item.parameters
            .filter((param) => param.key === 'prmImg')
            .map((param) => (
              <div>
                <Image

                  src={`https://img-monsternotebook.mncdn.com${param.value}`}
                  width={1500}
                  height={1500}
                />
              </div>

            ))
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
