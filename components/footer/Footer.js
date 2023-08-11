'use client'
import React from 'react';
import '@/styles/Footer.css';
import { BsEnvelope } from 'react-icons/bs'
import { FaHeadset } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {

  return (
    <div>
      <div className='all-div-ftr text-white border-[#323334] border-y-2 pt-6 px-0 pb-6'>
        <div className='all-ftr relative'>
          <div className='lblBanner text-left'>
            <div className='site-footer-mesaj w-full block py-0 px-4 my-0 mx-auto max-w-[1240px]'>
              <div className='group-three flex '>
                <div className='send-message w-1/4 mr-5'>
                  <Link href={'/'} className='flex'>
                    <div className='msg-icon-div flex items-center justify-center min-w-[46px] bg-[#161617] h-11'>
                      <BsEnvelope size={24} className='msg-icon !flex-none inline-block align-middle !flex-none inline-block align-middle' />
                    </div>
                    <span className='msg-text flex bg-[#323334] items-center py-0 px-3 text-base !w-full tracking-wider'>MESAJ GÖNDER</span>
                  </Link>
                </div>
                <div className='contact-number w-1/4'>
                  <Link href={'/'} className='flex'>
                    <div className='msg-icon-div flex items-center justify-center min-w-[46px] bg-[#161617] h-11'>
                      <FaHeadset size={24} className='msg-icon !flex-none inline-block align-middle !flex-none inline-block align-middle ' />
                    </div>
                    <span className='msg-text flex w-full bg-[#323334] items-center py-0 px-3 text-base !w-full tracking-wider'>0 850 255 11 11</span>
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
      <div className='ftr-all bg-[#1B1C1D] relative py-12 px-0 bottom-0 w-full z-[2]'>
        <div className='ftr-link w-full table max-w-[1240px] py-0 px-4 my-0 mx-auto'>
          <div className='ftr-div w-full inline-block align-top relative'>
            <div className='ftr-menu w-full'>
              <ul>
                <li className='ftr-menu-title'> Ürünler</li>
                <li>Tüm Laptoplar</li>
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
      <div className='ftr-copyright bg-[#161617] border-t-4 border-[#00FF00] text-center'>
        <div className='ftr-cpy-wrapper w-full mx-auto my-0 max-w-[1230px] text-white pt-10 px-4 pb-7 text-base flex items-center justify-between '>
          <p>©2023 Monster Bilgisayar. Tüm Hakları Saklıdır</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

