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
   

    <div className='lblBannerDouble'>
      <div className='main'>
        <ul className='flex flex-wrap '>
          <li className='banners-left'>
              <div className='left-img-div'>
                <picture>
                  <img src={imageUrls[0]} alt="Banner Image" className='w-full h-auto max-w-full' />
                </picture>
              </div>
              <div className='wrapper-div'>
                <div className='main-title'>
                  LEVEL ATLA
                  <br/>
                  OYUN EKOSİSTEMİNİ TAMAMLA
                </div>
                <div className='desc'> 
                  <p>En hızlı reflekslerin ve keskin bakışların Pusat aksesuarlarıyla daha güçlü. Pusat oyuncu ekipmanları ile oyunda seni öne geçirecek her şeye sahip ol.</p>
                </div>
                <div className='btn-inc'>
                  <Link href={'/'} className='secondary'>
                    <div>İNCELE</div>
                  </Link>
                </div>
              </div>
          </li>
          <li className='banners-right'>
          <div className='left-img-div'>
                <picture>
                  <img src={imageUrls[1]} alt="Banner Image" className='w-full h-auto max-w-full' />
                </picture>
                
              </div>
              <div className='wrapper-div'>
                <div className='btn-inc'>
                  <Link href={'/'} className='secondary'>
                    <div>İNCELE</div>
                  </Link>
                </div>
              </div>

          </li>
        </ul>
      </div>

    </div>

  );
}

export default SecondBanner