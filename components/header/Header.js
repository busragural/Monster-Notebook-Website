import React from 'react'
import "@/styles/Header.css"
import Image from 'next/image'
import logoPic from '@/assets/monster-logo.svg'
import Link from 'next/link'
import { IoMdSearch } from 'react-icons/io';
import HeaderTabItem from './HeaderTabItem'
import { BsPersonCircle } from 'react-icons/bs'
import { PiShoppingCartLight } from 'react-icons/pi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { StickyTab } from './StickyTab'
const Header = ({ data }) => {

  const headerTab = [
    {
      name: '0 850 255 11 11',
      url: '/numara'
    },
    {
      name: 'MESAJ GÖNDER',
      url: '/mesaj'
    },
    {
      name: 'MAĞAZALAR',
      url: '/magazalar'
    },
    {
      name: 'TEKNİK SERVİS',
      url: '/servis'
    },
    {
      name: 'RANDEVU SİSTEMİ',
      url: '/randevu'
    },
    {
      name: 'ÇÖZÜM MERKEZİ',
      url: '/merkez'
    },
    {
      name: 'TAMAMLAYICI GARANTİ',
      url: '/garanti'
    },
    {
      name: 'ÖMÜR BOYU BAKIM',
      url: '/bakim'
    }

  ]

  return (
    // <div className='header-div-pc px-10 py-2 bg-black tracking-wider'>
    //   {/* ustteki sari kucuk kisim*/}
    //   <div className='mini-tab flex items-center justify-end text-[#FBBD08] text-xs gap-4 py-2'>
    //     {headerTab.map((item, key) => (
    //       <HeaderTabItem item={item} key={key} />
    //     ))}
    //   </div>

    //   <div className='flex items-center justify-between py-1'>
    //     <div className='flex-none'>
    //       <div className='flex items-center'>

    //         <GiHamburgerMenu size={24} className='hamburger text-white items-center' />
    //         <Link href={'/'} >

    //           <Image src={logoPic} className='img-logo' />
    //         </Link>
    //       </div>
    //     </div>

    //     <div className='input-wrapper flex flex-grow items-center justify-center bg-[#131414] mx-4 px-3 py-2 border border-zinc-600'>
    //       <input
    //         type='text'
    //         placeholder='Arama Yap'
    //         maxLength={55}
    //         className='input-sec bg-transparent'
    //       />
    //       <IoMdSearch className='fill-gray-500' />
    //     </div>

    //     <div className='flex items-center gap-3'>
    //       <div className='text-[#00FF00] border border-zinc-600 px-2 py-2 hidden md:inline-flex'>
    //         Harici Ödeme
    //       </div>
    //       <div className='text-white md:border border-zinc-600 md:px-3 py-2 flex items-center gap-1'>
    //         <div>
    //           <BsPersonCircle size={24} className='header-icon'/>
    //         </div>
    //         <div className='hidden md:inline-flex'>
    //           <div className=''>Giriş yap</div>
    //           <div className=' text-xs -my-2 text-[#FBBD08]'>Kayıt ol</div>
    //         </div>
    //       </div>
    //       <div className='text-white md:border border-zinc-600 md:px-3 py-2 flex items-center gap-1'>
    //         <div>
    //           <PiShoppingCartLight size={24} className='header-icon'/>
    //         </div>
    //         <div className='hidden md:inline-flex'>Sepetim</div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Mobil görünümde logonun altına alınacak search bar'ı */}
    //   <div className='input-wrapper-mobile flex items-center justify-center bg-[#131414] mx-4 px-3 py-2 border border-zinc-600 md:hidden'>
    //     <input
    //       type='text'
    //       placeholder='Arama Yap'
    //       maxLength={55}
    //       className='input-sec bg-transparent'
    //     />
    //     <IoMdSearch className='fill-gray-500' />
    //   </div>




    // </div>


    // <div className='header'>
    //   <div className='header-wrapper'>
    //     <div className='header-top'>
    //       <div className='yellow-area'>
    //         <div className=''>
    //           <div className='header-tabsite'>
    //             <ul className='header-tabsite-ul'>
    //               {headerTab.map((item, key) => (
    //                 <li key={key}>
    //                   <Link href={'/'} className='header-tabsite-link'>
    //                     <span>
    //                       <HeaderTabItem item={item} />
    //                     </span>
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>

    //           </div>

    //         </div>

    //       </div>

    //     </div>



    //     <div className='header-middle'>
    //         <div className='middle-main'>
    //                 <div className='desktop-element'>
    //                   <div className='middle-banner'>
    //                     <div className='middle-logo'>
    //                         <Link href={'/'}>
    //                           <Image  src={logoPic} className='monster-logo'/>
    //                         </Link>
    //                     </div>
    //                   </div>
    //                 </div>

    //                 <div className='middle-search'>
    //                   <div className='middle-banner2'>
    //                     <div className='middle-bar'>
    //                       <div className='middle-bar-search'>
    //                         <div className='search-icon-div'> {/* a */}
    //                         <IoMdSearch className='search-icon text-white' />
    //                         </div>
    //                         <input type='text' maxLength={55} placeholder='Arama Yap'/>
    //                       </div>

    //                     </div>
    //                   </div>

    //                 </div>
    //         </div>
    //     </div>



    //     <div className='header-bottom'>
    //                   <div className='bottom-main'>
    //                     <div className='h-banner'>
    //                       <div className='ext-pay'>
    //                           <div className='ext-pay-inner'>
                                
    //                           </div>
    //                       </div>
    //                     </div>



    //                   </div>
    //     </div>



    //   </div>

//     </div>

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

            <GiHamburgerMenu size={24} className='hamburger text-white items-center' />
            <Link href={'/'} >

              <Image src={logoPic} className='img-logo' />
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
              <BsPersonCircle size={24} className='header-icon'/>
            </div>
            <div className='hidden md:inline-flex'>
              <div className=''>Giriş yap</div>
              <div className=' text-xs -my-2 text-[#FBBD08]'>Kayıt ol</div>
            </div>
          </div>
          <div className='text-white md:border border-zinc-600 md:px-3 py-2 flex items-center gap-1'>
            <div>
              <PiShoppingCartLight size={24} className='header-icon'/>
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




    </div>



  );
}

export default Header