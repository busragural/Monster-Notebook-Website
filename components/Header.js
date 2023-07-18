import React from 'react'
import "@/styles/Header.css"
import Image from 'next/image'
import logoPic from '@/assets/monster-logo.svg'
import Link from 'next/link'
import { IoMdSearch } from 'react-icons/io';
import HeaderTabItem from './HeaderTabItem'
import { BsPersonCircle } from 'react-icons/bs'
import { PiShoppingCartLight } from 'react-icons/pi'
const Header = () => {

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
        // en genel div 

        <div className='px-20 py-3 bg-black tracking-wider  ' >
            {/* ustteki sari kucuk kisim*/}
            <div className='md:flex items-center justify-end text-[#FBBD08] gap-4 text-xs mb-5 lg:opacity-100 opacity-0'>
                {

                    headerTab.map((item, key) => (
                        <HeaderTabItem item={item} key={key} />
                    ))
                }
            </div>

            <div className=' xl:flex items-center  ' >

                {/* logo divi*/}
                <div className='  '>
                    <Link href={'/'} >
                        <Image className=''
                            src={logoPic}

                            width={250}
                            height={65}

                            alt=""
                        />
                    </Link>
                </div>
                <div className='flex flex-1 items-center justify-between'>
                    {/* search divi */}
                    <div className='flex items-center bg-[#131414] mx-4 px-3 py-2 border border-zinc-600 '>
                        <input type='text' placeholder='Arama Yap' maxLength={55} className='flex flex-1 bg-transparent' />
                        <IoMdSearch className='fill-gray-500' />
                    </div>

                    {/* sagdaki üc kutu divi */}
                    <div className='flex items-center  gap-4'>
                        {/* 1.kutu */}
                        <div className='text-[#00FF00] border border-zinc-600 px-2 py-2 hidden md:inline-flex'>
                            Harici Ödeme
                        </div>

                        {/* 2.kutu */}
                        <div className='text-white border border-zinc-600 px-3 py-2 flex items-center gap-1'>
                            <div>
                                <BsPersonCircle size={24} />
                            </div>
                            <div>
                                <div className='hidden md:inline-flex'>Giriş yap</div>
                                <div className='text-xs -my-2 text-[#FBBD08] hidden md:inline-flex'>Kayıt ol</div>
                            </div>
                        </div>

                        {/* 3.kutu */}
                        <div className='text-white border border-zinc-600 px-3 py-2 flex items-center gap-1'>
                            <div>
                                <PiShoppingCartLight size={24} />
                            </div>
                            <div className='hidden md:inline-flex'>Sepetim</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header