'use client'
import React, { useState } from 'react'
import "@/styles/Header.css"
import Image from 'next/image'
import logoPic from '@/assets/monster-logo.svg'
import Link from 'next/link'
import { IoMdSearch } from 'react-icons/io';
import HeaderTabItem from './HeaderTabItem'
import { BsPersonCircle } from 'react-icons/bs'
import { PiShoppingCartLight } from 'react-icons/pi'
import { GiHamburgerMenu } from 'react-icons/gi'
import headerTab from '@/helpers/HeaderTab'
import MobileMenu from './MobileMenu'
const Header = ({  data, gamePcs, workPcs, workSta, monitor }) => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (


    <div className='header-div-pc px-10 py-2 bg-black tracking-wider'>
      {/* ustteki sari kucuk kisim*/}
      <div className='mini-tab flex items-center justify-end text-[#FBBD08] text-xs gap-4 py-2'>
        {headerTab.map((item, key) => (
          <HeaderTabItem item={item} key={key} />
        ))}
      </div>

      <div className='flex items-center justify-between py-1 '>
        <div className='flex-none'>
          <div className='flex items-center'>

            <GiHamburgerMenu size={24} className='hamburger text-white items-center' onClick={handleMobileMenuToggle} />
            <Link href={'/'} >

              <Image src={logoPic} className='img-logo'
                alt='' />
            </Link>
          </div>
        </div>

        <div className='input-wrapper flex flex-grow items-center justify-center bg-[#131414] mx-4 px-3 py-2 border border-zinc-600'>
          <input
            type='text'
            placeholder='Arama Yap'
            maxLength={55}
            className='input-sec bg-transparent'
          />
          <IoMdSearch className='fill-gray-500' />
        </div>

        <div className='flex items-center gap-3'>
          <div className='text-[#00FF00] border border-zinc-600 px-2 py-2 hidden md:inline-flex'>
            Harici Ödeme
          </div>
          <div className='text-white md:border border-zinc-600 md:px-3 py-2 flex items-center gap-1'>
            <div>
              <BsPersonCircle size={24} className='header-icon' />
            </div>
            <div className='hidden md:inline-flex'>
              <div className=''>Giriş yap</div>
              {/* <div className=' text-xs -my-2 text-[#FBBD08]'>Kayıt ol</div> */}
            </div>
          </div>
          <div className='text-white md:border border-zinc-600 md:px-3 py-2 flex items-center gap-1'>
            <div>
              <PiShoppingCartLight size={24} className='header-icon' />
            </div>
            <div className='hidden md:inline-flex'>Sepetim</div>
          </div>
        </div>
      </div>

      {/* Mobil görünümde logonun altına alınacak search bar'ı */}
      <div className='input-wrapper-mobile flex items-center justify-center bg-[#131414] mx-4 px-3 py-2 border border-zinc-600 md:hidden'>
        <input
          type='text'
          placeholder='Arama Yap'
          maxLength={55}
          className='input-sec bg-transparent'
        />
        <IoMdSearch className='fill-gray-500' />
      </div>



      {isMobileMenuOpen && <MobileMenu onCloseMenu={handleMobileMenuClose} data = {data} gamePcs={gamePcs} workPcs={workPcs} workSta={workSta} monitor= {monitor} />}
      
    </div>



  );
}

export default Header