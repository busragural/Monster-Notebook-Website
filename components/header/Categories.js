'use client'
import React, { useEffect, useMemo, useState } from 'react'
import '@/styles/Categories.css'
import Link from 'next/link'
import Image from 'next/image'
import catName from '@/helpers/CategoryName'
import { getImages } from '@/helpers/CategoryDetails'


const Categories = ({ data, gamePcs, workPcs, workSta, monitor }) => {

    
    return (
        <div className='bottom-tab'>
            <div className='bottom-in'>
                <div className='bottom-col'>
                    <div className='bottom-banner'>
                        <nav className='nav-main'>
                            <ul>
                                {catName.map((item, index) => (
                                    <li className='sub-menu' key={index} >
                                        <Link href={'/'} className='catdata-name'>
                                            {item}
                                        </Link>
                                        <div className='sub-nav'>
                                            <div className='sub-nav-wrapper'>
                                                <div className='sub-nav-links'>
                                                    <div className='sub-nav-lvl2'>
                                                        <div className='sub-nav-list'>
                                                            <ul className='sub-wrapper-ul'>

                                                                {item === 'Tüm Laptoplar' && data.some((k) => k.name === 'Tüm Laptoplar') ? (
                                                                    getImages(data[0]?.childCategories?.map((i) => i.childCategories).flat()) 
                                                                ) : null}
                                                                

                                                                {item === 'Aksesuarlar' && data.some((k) => k.name === 'Aksesuarlar') ? (
                                                                    getImages(data[1]?.childCategories?.map((i) => i.childCategories).flat())
                                                                    
                                                                ) : null}

                                                                {item === 'Oyun Bilgisayarları' ? getImages(gamePcs[0]?.childCategories)  : null}
                                                                {item === 'Oyuncu Monitörü' ? getImages(monitor[0]?.childCategories) : null}
                                                                {item === 'İş Bilgisayarları' ? getImages(workPcs[0]?.childCategories)  : null}
                                                                {item === 'İş İstasyonları' ? getImages(workSta[0]?.childCategories): null}
                                                    
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    </li>
                                ))}
                            </ul>

                        </nav>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories;

