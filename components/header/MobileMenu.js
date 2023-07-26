'use client'
import React from 'react'
import '@/styles/MobileMenu.css'
import Link from 'next/link'
import Image from 'next/image'
import logoPic from '@/assets/monster-logo.svg'
import catName from '@/helpers/CategoryName'
import headerTab from '@/helpers/HeaderTab.js'
import { RxCross1 } from 'react-icons/rx'

const MobileMenu = ({onCloseMenu }) => {
    return (
        <div className='nav-main2 top-0 left-0 bottom-0 h-screen w-screen bg-[#161617] p-0 absolute '>
            <div className='mobile-element2 top-0 flex items-center justify-between  '>
                <div className='mb-logo w-full'>
                    <Link href={'/'} className='logo-link uppercase'>
                        <Image src={logoPic} 
                        alt=''/>
                    </Link>
                </div>
                <div className='ext-pay w-auto float-right static'>
                    <div className='ext-pay-inner flex items-center justify-center '>
                        <div className='ext-pay-header p-1 mt-2 ml-0 inline-block w-full text-[#26df2e] cursor-pointer'>
                            <Link href={'/'} className='header-inner  '>
                                <span>HARİCİ ÖDEME</span>
                            </Link>
                        </div>
                        <div className='text-white'>
                            <RxCross1 className='text-white ml-3 items-center' onClick={onCloseMenu} />
                        </div>
                    </div>

                </div>
            </div>
            <ul className='mobile-list block w-full pr-0 pl-0 overflow-y-auto'>
                {catName.map((item, key) => (
                    <li className='sub-menu2 block w-full' key={key}>
                        <Link href={'/'} className='catdata-name2 text-left  relative h-full uppercase'>
                            {item}
                        </Link>

                    </li>
                ))}
            </ul>

            <div className='mobile-contact'>
                <ul className='mobile-list'>
                    {headerTab.map((item, key) => (
                        <li className='sub-menu2' key={key}>
                            <Link href={'/'} className='catdata-name2'>
                                {item.name}
                            </Link>

                        </li>
                    ))}
                </ul>
            </div>
            <div className='mobile-footer w-full bottom-0 fixed '>
                <ul className='footer-ul flex items-center overflow-hidden relative w-full'>
                    <li className='mainpage'>
                        <Link href={'/'} className='f-link'>ANASAYFA</Link>
                    </li>
                    <li className='mainpage'>
                        <Link href={'/'} className='f-link'>GİRİŞ YAP</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default MobileMenu