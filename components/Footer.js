import React from 'react';
import '@/styles/Footer.css';
import { BsEnvelope } from 'react-icons/bs'
import { FaHeadset } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link';
const Footer = () => {
  return (
    <div className=''>
      <div className='all-div-ftr text-white'>
        <div className='all-ftr'>
          <div className='lblBanner'>
            <div className='site-footer-mesaj w-full block '>
              <div className='group-three flex'>
                <div className='send-message '>
                  <Link href={'/'} className='flex'>
                    <div className='msg-icon-div flex items-center justify-center'> <BsEnvelope size={24} className='msg-icon' /></div>
                    <span className='msg-text flex bg-[#323334] items-center '>MESAJ GÖNDER</span>
                  </Link>
                </div>
                <div className='contact-number'>
                  <Link href={'/'} className='flex'>
                    <div className='msg-icon-div flex items-center justify-center'> <FaHeadset size={24} className='msg-icon' /></div>
                    <span className='msg-text flex w-full bg-[#323334] items-center '>0 850 255 11 11</span>
                  </Link>
                </div>
                <div className='follow-us flex items-center justify-center w-1/2'>
                  <span className='mr-2.5'>Bizi Takip Edin</span>
                  <Link href={'/'} className='social-link'><AiFillYoutube size={24} className='social-icon' /></Link>
                  <Link href={'/'} className='social-link'><AiFillYoutube size={24} className='social-icon' /></Link>
                  <Link href={'/'} className='social-link'><AiFillYoutube size={24} className='social-icon' /></Link>
                  <Link href={'/'} className='social-link'><AiFillYoutube size={24} className='social-icon' /></Link>
                  <Link href={'/'} className='social-link'><AiFillYoutube size={24} className='social-icon' /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='ftr-all '>
        <div className='ftr-link  '>
          <div className='ftr-div'>
            <div className='ftr-menu'>
              <ul >
                <li className='ftr-menu-title'> Ürünler</li>
                <li >Tüm Laptoplar</li>
                <li>Oyun Bilgisayarları</li>
                <li>Oyuncu Ekipmanları</li>
                <li>İş Bilgisayarları</li>
                <li>İş İstasyonları</li>
                <li className='ftr-menu-title'>İletişim ve Mağazalar</li>
                <li>Genel Müdürlük</li>
                <li>Mağazalar</li>
              </ul>
              <ul>
                <li className='ftr-menu-title'>Performans Donanımları</li>
                <li>Tüm Laptoplar</li>
                <li>Oyun Bilgisayarları</li>
                <li>Oyuncu Ekipmanları</li>
                <li>İletişim ve Mağazalar</li>
                <li>Genel Müdürlük</li>
                <li>Mağazalar</li>
              </ul>
              <ul>
                <li className=' ftr-menu-title '>Kurumsal</li>
                <li>Tüm Laptoplar</li>
                <li>Oyun Bilgisayarları</li>
                <li>Oyuncu Ekipmanları</li>
                <li>İş Bilgisayarları</li>
                <li>İş İstasyonları</li>
                <li>İletişim ve Mağazalar</li>
                <li>Genel Müdürlük</li>
              </ul>
              <ul>
                <li className='ftr-menu-title'>Müşteri Hizmetleri</li>
                <li>Tüm Laptoplar</li>
                <li>Oyun Bilgisayarları</li>
                <li>Oyuncu Ekipmanları</li>
                <li>İş Bilgisayarları</li>
                <li>İş İstasyonları</li>
                <li>İletişim ve Mağazalar</li>
                <li>Genel Müdürlük</li>
                <li>Mağazalar</li>
              </ul>
              <ul>
                <li className='ftr-menu-title'>Monster Dünyası</li>
                <li>Tüm Laptoplar</li>
                <li>Oyun Bilgisayarları</li>
                <li>Oyuncu Ekipmanları</li>
                <li>İş Bilgisayarları</li>
                <li>İş İstasyonları</li>
                <li>İletişim ve Mağazalar</li>
                <li>Genel Müdürlük</li>
                <li>Mağazalar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      
        <div className='ftr-copyright'>
          <div className='ftr-cpy-wrapper'>
             <p>©2023 Monster Bilgisayar. Tüm Hakları Saklıdır</p>
          </div>
        </div>

     

    </div>
  );
};

export default Footer;

