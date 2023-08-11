'use client'
import React from 'react'
import '@/styles/Categories.css'
import Link from 'next/link'
import catName from '@/helpers/CategoryName'
import { convertToEnglish, getImages } from '@/helpers/CategoryDetails'


const Categories = ({ data, gamePcs, workPcs, workSta, monitor }) => {


    return (
        <div className='bottom-tab bg-[#000] z-[99] relative max-w-full w-full h-15 text-xxl '>
            <div className='bottom-in p-0 max-w-none text-center w-full my-0 mx-auto uppercase tracking-wide'>
                <div className='bottom-col inline-block align-middle static '>
                    <div className='bottom-banner'>
                        <nav className='nav-main text-center overflow-hidden inline-block'>
                            <ul className='w-full flex gap-x-14 items-center'>
                                {catName.map((item, index) => {

                                    const name = convertToEnglish(item);
                                    const slug = name.split(' ').join('-');
                                    return (
                                        <li className='sub-menu inline-block align-middle' key={index} >

                                            <Link href={`/${slug}`} className='catdata-name text-base block text-center py-4 px-0 relative h-full text-white'>
                                                {item}
                                            </Link>
                                            <div className='sub-nav max-h-0 overflow-hidden absolute w-full z-[9999] bg-[#131414] top-12 left-0 hidden'>
                                                <div className='sub-nav-wrapper w-full flex relative my-0 mx-auto max-w-[1240px]'>
                                                    <div className='sub-nav-links w-full flex max-w-[1240px] my-0 mx-auto p-0'>
                                                        <div className='sub-nav-lvl2 mx-auto relative h-auto z-[1] w-full h-full max-w-[1158px] '>
                                                            <div className='sub-nav-list z-[11] relative w-full max-w-[1240px] my-0 mx-auto px-0 pt-5 pb-7 overflow-hidden '>
                                                                <ul className='sub-wrapper-ul items-center justify-center flex w-full h-full z-[1] relative '>

                                                                    {item === 'Tüm Laptoplar' && data.some((k) => k.name === 'Tüm Laptoplar') ? (
                                                                        getImages(data[0]?.childCategories?.map((i) => i.childCategories).flat())
                                                                    ) : null}


                                                                    {item === 'Aksesuarlar' && data.some((k) => k.name === 'Aksesuarlar') ? (
                                                                        getImages(data[1]?.childCategories?.map((i) => i.childCategories).flat())

                                                                    ) : null}

                                                                    {item === 'Oyun Bilgisayarları' ? getImages(gamePcs[0]?.childCategories) : null}
                                                                    {item === 'Oyuncu Monitörü' ? getImages(monitor[0]?.childCategories) : null}
                                                                    {item === 'İş Bilgisayarları' ? getImages(workPcs[0]?.childCategories) : null}
                                                                    {item === 'İş İstasyonları' ? getImages(workSta[0]?.childCategories) : null}

                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </li>
                                    )
                                })}
                            </ul>

                        </nav>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories;

