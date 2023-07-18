import React from 'react';
import Banner from '@/assets/banner-1.webp';
import Image from 'next/image';
import '@/styles/FirstBanner.css';
import Link from 'next/link';

const FirstBanner = () => {
  return (
    <div className='ban-div relative '>

      <div className='first-banner '>
        <Image src={Banner} className='first-banner-image ' />
        </div>
        <div className='wrapper absolute'>
          <div className='flex text-[#00FF00] text-4xl mb-3'>
            MÜKEMMEL OYUN DENEYİMİ.
          </div>
          <div className='flex text-white text-3xl mb-4'>
            OYUNDA KENDİNİZİ KAYBETSENİZ BİLE!
          </div>
          <div className='flex text-white text-xl mb-5'>
            Monster Oyun Bilgisayarları Intel ve Nvidia’nın en üst donanımları ile, maksimum performans ve en mükemmel oyun deneyimini sunar. Kendi belirleyeceğiniz donanımlar ve oynadığınız oyunların gereksinimlerine göre hayalinizdeki bilgisayarı şimdi tasarlayın!
          </div>
          <div className='flex text-[#FBBD08] text-2xl '>
            <Link href={'/'} className='mr-4'>OYUN BİLGİSAYARLARI</Link>
            <span>|</span>
            <Link href={'/'} className='ml-4'>TÜM LAPTOPLAR</Link>
          </div>
        </div>
      
    </div>
  );
};

export default FirstBanner;
