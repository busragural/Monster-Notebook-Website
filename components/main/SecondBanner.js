'use client'
import React, { useEffect, useState } from 'react'
import '@/styles/SecondBanner.css'
import Link from 'next/link'


const SecondBanner = ({ data }) => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {

    if (data && data.length > 0) {

      const imageUrls = data
        .map(item => item.parameters.find(param => param.key === 'prmImg'))
        .filter(Boolean)
        .map(param => `https://img-monsternotebook.mncdn.com${param.value}`);
      setBannerData(imageUrls);

    }
  }, [data]);


  return (

    <div className='lblBannerDouble'>
      <div className='main'>
        <ul className='flex flex-wrap m-0 '>
          <li className='banners-left relative'>
            <div className='left-img-div relative overflow-hidden w-full'>
              <picture>
                <img src={bannerData[0]} alt="Banner Image" className='w-full h-auto max-w-full' />
              </picture>
            </div>
            <div className='wrapper-div absolute flex flex-wrap'>
              <div className='main-title text-[#00FF00] mb-3 overflow-hidden h-fit'>
                LEVEL ATLA
                <br />
                OYUN EKOSİSTEMİNİ TAMAMLA
              </div>
              <div className='desc text-white overflow-hidden'>
                <p>En hızlı reflekslerin ve keskin bakışların Pusat aksesuarlarıyla daha güçlü. Pusat oyuncu ekipmanları ile oyunda seni öne geçirecek her şeye sahip ol.</p>
              </div>
              <div className='btn-inc'>
                <Link href={'/'} className='secondary text-[#00FF00] m-0 relative'>
                  <div>İNCELE</div>
                </Link>
              </div>
            </div>
          </li>
          <li className='banners-right relative'>
            <div className='left-img-div relative overflow-hidden w-full'>
              <picture>
                <img src={bannerData[1]} alt="Banner Image" className='w-full h-auto max-w-full' />
              </picture>

            </div>
            <div className='wrapper-div absolute flex flex-wrap'>
              <div className='btn-inc'>
                <Link href={'/'} className='secondary text-[#00FF00] m-0 relative'>
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