import React from 'react';
import '@/styles/Footer.css';
import { BsEnvelope } from 'react-icons/bs'
import { FaHeadset } from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <div>
      
        <div className='flex items-center justify-center p-2 footer-first text-white'>
          <div className='flex '>
            <div className='flex items-center text-lg bg-[#161617] 4'>
              <div>
                <BsEnvelope size={24} />
              </div>
              <div className='tracking-widest bg-[#323334] mx-2'>
                <span>MESAJ GÖNDER</span>
              </div>
            </div>
            <div className='flex items-center justify-center px-5 '>
              <div className='flex items-center text-lg  bg-[#161617]'>
                <div>
                  <FaHeadset size={24} />
                </div>
                <div className='tracking-widest bg-[#323334] mx-2'>
                  <span>0 850 255 11 11</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center text-lg '>
            <div className='mr-4'>Bizi Takip Edin</div>
            <div className='flex p-5 bg-[#161617] gap-2 '>
              <AiFillYoutube size={24} className='' />
              <AiFillYoutube size={24} className='' />
              <AiFillYoutube size={24} className='' />
              <AiFillYoutube size={24} className='' />
            </div>
          </div>
        </div>
      
      


        <div className=' credit flex  justify-center gap-20 text-[#A4A4A5] text-xl py-10'>
          <ul >
            <li className='text-white'> Ürünler</li>
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
            <li className='text-white'>Performans Donanımları</li>
            <li>Tüm Laptoplar</li>
            <li>Oyun Bilgisayarları</li>
            <li>Oyuncu Ekipmanları</li>
            <li>İletişim ve Mağazalar</li>
            <li>Genel Müdürlük</li>
            <li>Mağazalar</li>
          </ul>
          <ul>
            <li className='text-white'>Kurumsal</li>
            <li>Tüm Laptoplar</li>
            <li>Oyun Bilgisayarları</li>
            <li>Oyuncu Ekipmanları</li>
            <li>İş Bilgisayarları</li>
            <li>İş İstasyonları</li>
            <li>İletişim ve Mağazalar</li>
            <li>Genel Müdürlük</li>
          </ul>
          <ul>
            <li className='text-white'>Müşteri Hizmetleri</li>
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
            <li className='text-white'>Monster Dünyası</li>
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
      
      
        <div className=' text-white flex items-center justify-center py-10 bg-[#161617]'>
          <p>©2023 Monster Bilgisayar. Tüm Hakları Saklıdır</p>
          <div>buraya banka seyleri gelecek</div>
        </div>
      
    </div>
  );
};

export default Footer;

