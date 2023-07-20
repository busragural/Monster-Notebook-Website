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
          <ul>
          <li className='single-banner rightBottom'>
              <div className='center-img-div'>
                <picture>
                <Image src={Banner} className='first-banner-image ' />
                </picture>
              </div>
              <div className='bnr-wrapper'>
                <div className='main-title-1'> MÜKEMMEL OYUN DENEYİMİ</div>
                <div className='main-title-2'>OYUNDA KENDİNİZİ KAYBETSENİZ BİLE!</div>
                <div className='bnr-desc'> 
                  <p>Monster Oyun Bilgisayarları Intel ve Nvidia’nın en üst donanımları ile, maksimum performans ve en mükemmel oyun deneyimini sunar. Kendi belirleyeceğiniz donanımlar ve oynadığınız oyunların gereksinimlerine göre hayalinizdeki bilgisayarı şimdi tasarlayın!</p>
                </div>
                <div className='bnr-btn-inc flex'>
                  <Link href={'/'} className='primary'>
                    <div>OYUN BİLGİSAYARLARI</div>
                  </Link>
                  <Link href={'/'} className='primary'>
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
