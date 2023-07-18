'use client'
import React, { useEffect, useState } from 'react'
import { getBanners } from './BannerApi'
import '@/styles/SecondBanner.css'
import Link from 'next/link'


const SecondBanner = () => {
  const [bannerData, setBannerData] = useState([]);
    
    useEffect(() => {
        const fetchBannerData = async () => {
            const data = await getBanners();
            setBannerData(data);
        };

        fetchBannerData();
    }, []);

  const imageUrls = bannerData
        .map(item => item.parameters.find(param => param.key === 'prmImg'))
        .filter(Boolean)
        .map(param => `https://img-monsternotebook.mncdn.com${param.value}`);

  return (
    <div className='s-ban-div relative ' >
      <div className='flex justify-center items-center s-ban-img  '>
         <img src={imageUrls[0]} alt="Banner Image"  className='w-full s-ban-img1' />
          
         <img src={imageUrls[1]} alt="Banner Image"  className='w-full s-ban-img2' />
         
      </div>
    </div>
  )
}

export default SecondBanner