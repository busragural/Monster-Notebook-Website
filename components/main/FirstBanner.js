import React from 'react';
import Banner from '@/assets/banner-1.webp';
import Image from 'next/image';
import '@/styles/FirstBanner.css';
import Link from 'next/link';

const FirstBanner = () => {
  return (

    <div className='lblBannerFirst'>
      <ul>
        <div className='main-list'>
          <ul className='flex flex-wrap'>
            <li className='single-banner rightBottom relative'>
              <div className='center-img-div relative w-full'>
                <picture>
                  <Image src={Banner} className='first-banner-image w-full h-auto max-w-full ' />
                </picture>
              </div>
              <div className='bnr-wrapper absolute flex flex-wrap'>
                <div className='main-title-1 text-[#00FF00] overflow-hidden h-fit'> MÜKEMMEL OYUN DENEYİMİ</div>
                <div className='main-title-2 text-white overflow-hidden h-fit'>OYUNDA KENDİNİZİ KAYBETSENİZ BİLE!</div>
                <div className='bnr-desc text-white overflow-hidden'>
                  <p>Monster Oyun Bilgisayarları Intel ve Nvidia’nın en üst donanımları ile, maksimum performans ve en mükemmel oyun deneyimini sunar. Kendi belirleyeceğiniz donanımlar ve oynadığınız oyunların gereksinimlerine göre hayalinizdeki bilgisayarı şimdi tasarlayın!</p>
                </div>
                <div className='bnr-btn-inc flex box-border'>
                  <Link href={'/'} className='primary text-[#fbbd08]'>
                    <div>OYUN BİLGİSAYARLARI</div>
                  </Link>
                  <Link href={'/'} className='primary text-[#fbbd08]'>
                    <div>TÜM LAPTOPLAR</div>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </div>


  );
};

export default FirstBanner;
