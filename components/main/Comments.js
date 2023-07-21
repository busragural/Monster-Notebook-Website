'use client'
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';
import '@/styles/Comments.css'

const Comments = () => {
    const settings = {
        dots: true,
        speed: 500,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }

            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }

            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }

            },
        ]

    };

    return (

        <div className='cmnt-all-div max-w-full w-full bg-[#131414]'>
            <div className='lblComments'>
                <div className='cmnt-main box-border'>
                    <div className='cmnt-container ml-auto mr-auto relative'>
                        <div className='cmnt-title relative'>
                            <h3 className='inline-block mt-5 mb-5 mr-0 ml-0 text-white text-center '>Kullanıcı Yorumları</h3>
                            <Link href={'/'} className='more-cmnt absolute text-[#00ff00] items-center'>DAHA FAZLA YORUM</Link>
                        </div>
                        <Slider {...settings}>
                            <div className='cmnt-swipper-main overflow-hidden w-full relative '>
                                <ul className='flex flex-nowrap relative w-full h-full box-content'>
                                    <li className='relative h-auto pt-0 pr-2 pb-4 pl-2 '>
                                        <div className='cmnt-inner relative pb-10 overflow-hidden display-flex flex-wrap m-0 bg-[#161617] h-full'>
                                            <div className='cmnt-mask relative p-5'>
                                                <div className='cmnt-image relative overflow-hidden'>
                                                    <Link href={'/'} className='cmnt-link absolute l-0 t-0 w-full h-auto block '>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content w-full text-left'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask p-0 w-full h-full flex flex-wrap '>
                                                        <div className='cmnt-content-bottom relative overflow-hidden'>
                                                            <div className='mons-prd-name '>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
                                                            <div className='mons-prd-name-content'>KALİTE KEDİNİ BELLİ EDİYOR</div>
                                                            <div className='mons-prd-name-cat'>Ürün çok güzel daha bir sıkıntısını görmedim.</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='cmnt-swipper-main overflow-hidden w-full relative '>
                                <ul className='flex flex-nowrap relative w-full h-full box-content'>
                                    <li className='relative h-auto pt-0 pr-2 pb-4 pl-2 '>
                                        <div className='cmnt-inner relative pb-10 overflow-hidden display-flex flex-wrap m-0 bg-[#161617] h-full'>
                                            <div className='cmnt-mask relative p-5'>
                                                <div className='cmnt-image relative overflow-hidden'>
                                                    <Link href={'/'} className='cmnt-link absolute l-0 t-0 w-full h-auto block '>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content w-full text-left'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask p-0 w-full h-full flex flex-wrap '>
                                                        <div className='cmnt-content-bottom relative overflow-hidden'>
                                                            <div className='mons-prd-name '>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
                                                            <div className='mons-prd-name-content'>KALİTE KEDİNİ BELLİ EDİYOR</div>
                                                            <div className='mons-prd-name-cat'>Ürün çok güzel daha bir sıkıntısını görmedim.</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='cmnt-swipper-main overflow-hidden w-full relative '>
                                <ul className='flex flex-nowrap relative w-full h-full box-content'>
                                    <li className='relative h-auto pt-0 pr-2 pb-4 pl-2 '>
                                        <div className='cmnt-inner relative pb-10 overflow-hidden display-flex flex-wrap m-0 bg-[#161617] h-full'>
                                            <div className='cmnt-mask relative p-5'>
                                                <div className='cmnt-image relative overflow-hidden'>
                                                    <Link href={'/'} className='cmnt-link absolute l-0 t-0 w-full h-auto block '>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content w-full text-left'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask p-0 w-full h-full flex flex-wrap '>
                                                        <div className='cmnt-content-bottom relative overflow-hidden'>
                                                            <div className='mons-prd-name '>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
                                                            <div className='mons-prd-name-content'>KALİTE KEDİNİ BELLİ EDİYOR</div>
                                                            <div className='mons-prd-name-cat'>Ürün çok güzel daha bir sıkıntısını görmedim.</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='cmnt-swipper-main overflow-hidden w-full relative '>
                                <ul className='flex flex-nowrap relative w-full h-full box-content'>
                                    <li className='relative h-auto pt-0 pr-2 pb-4 pl-2 '>
                                        <div className='cmnt-inner relative pb-10 overflow-hidden display-flex flex-wrap m-0 bg-[#161617] h-full'>
                                            <div className='cmnt-mask relative p-5'>
                                                <div className='cmnt-image relative overflow-hidden'>
                                                    <Link href={'/'} className='cmnt-link absolute l-0 t-0 w-full h-auto block '>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content w-full text-left'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask p-0 w-full h-full flex flex-wrap '>
                                                        <div className='cmnt-content-bottom relative overflow-hidden'>
                                                            <div className='mons-prd-name '>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
                                                            <div className='mons-prd-name-content'>KALİTE KEDİNİ BELLİ EDİYOR</div>
                                                            <div className='mons-prd-name-cat'>Ürün çok güzel daha bir sıkıntısını görmedim.</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='cmnt-swipper-main overflow-hidden w-full relative '>
                                <ul className='flex flex-nowrap relative w-full h-full box-content'>
                                    <li className='relative h-auto pt-0 pr-2 pb-4 pl-2 '>
                                        <div className='cmnt-inner relative pb-10 overflow-hidden display-flex flex-wrap m-0 bg-[#161617] h-full'>
                                            <div className='cmnt-mask relative p-5'>
                                                <div className='cmnt-image relative overflow-hidden'>
                                                    <Link href={'/'} className='cmnt-link absolute l-0 t-0 w-full h-auto block '>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content w-full text-left'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask p-0 w-full h-full flex flex-wrap '>
                                                        <div className='cmnt-content-bottom relative overflow-hidden'>
                                                            <div className='mons-prd-name '>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
                                                            <div className='mons-prd-name-content'>KALİTE KEDİNİ BELLİ EDİYOR</div>
                                                            <div className='mons-prd-name-cat'>Ürün çok güzel daha bir sıkıntısını görmedim.</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='cmnt-swipper-main overflow-hidden w-full relative '>
                                <ul className='flex flex-nowrap relative w-full h-full box-content'>
                                    <li className='relative h-auto pt-0 pr-2 pb-4 pl-2 '>
                                        <div className='cmnt-inner relative pb-10 overflow-hidden display-flex flex-wrap m-0 bg-[#161617] h-full'>
                                            <div className='cmnt-mask relative p-5'>
                                                <div className='cmnt-image relative overflow-hidden'>
                                                    <Link href={'/'} className='cmnt-link absolute l-0 t-0 w-full h-auto block '>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content w-full text-left'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask p-0 w-full h-full flex flex-wrap '>
                                                        <div className='cmnt-content-bottom relative overflow-hidden'>
                                                            <div className='mons-prd-name '>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
                                                            <div className='mons-prd-name-content'>KALİTE KEDİNİ BELLİ EDİYOR</div>
                                                            <div className='mons-prd-name-cat'>Ürün çok güzel daha bir sıkıntısını görmedim.</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='cmnt-swipper-main overflow-hidden w-full relative '>
                                <ul className='flex flex-nowrap relative w-full h-full box-content'>
                                    <li className='relative h-auto pt-0 pr-2 pb-4 pl-2 '>
                                        <div className='cmnt-inner relative pb-10 overflow-hidden display-flex flex-wrap m-0 bg-[#161617] h-full'>
                                            <div className='cmnt-mask relative p-5'>
                                                <div className='cmnt-image relative overflow-hidden'>
                                                    <Link href={'/'} className='cmnt-link absolute l-0 t-0 w-full h-auto block '>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content w-full text-left'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask p-0 w-full h-full flex flex-wrap '>
                                                        <div className='cmnt-content-bottom relative overflow-hidden'>
                                                            <div className='mons-prd-name '>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
                                                            <div className='mons-prd-name-content'>KALİTE KEDİNİ BELLİ EDİYOR</div>
                                                            <div className='mons-prd-name-cat'>Ürün çok güzel daha bir sıkıntısını görmedim.</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;