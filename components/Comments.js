'use client'
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { comment } from '@/assets/comment.png'
import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';
import '@/styles/Comments.css'

const Comments = () => {


    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 800, 
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }

            }, 
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                }
            },
            {
                breakpoint: 1600, 
                settings: {
                    slidesToShow:3,
                    slidesToScroll:1,
                }

            }, 
            {
                breakpoint: 2000, 
                settings: {
                    slidesToShow:4,
                    slidesToScroll:1,
                }

            }, 
        ]

    };

    return (

        <div className='cmnt-all-div'>


            <div className='lblComments'>
                <div className='cmnt-main'>
                    <div className='cmnt-container'>
                        <div className='cmnt-title'>
                            <h3>Kullanıcı Yorumları</h3>
                            <Link href={'/'} className='more-cmnt'>DAHA FAZLA YORUM</Link>
                        </div>
                        <Slider {...settings}>
                            <div className='cmnt-swipper-main'> {/*  swiper-inner*/}
                                <ul>
                                    <li>
                                        <div className='cmnt-inner'>
                                            <div className='cmnt-mask'>
                                                <div className='cmnt-image'>
                                                    <Link href={'/'} className='cmnt-link'>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask'>
                                                        <div className='cmnt-content-bottom'>
                                                            <div className='mons-prd-name'>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
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
                            <div className='cmnt-swipper-main'> {/*  swiper-inner*/}
                                <ul>
                                    <li>
                                        <div className='cmnt-inner'>
                                            <div className='cmnt-mask'>
                                                <div className='cmnt-image'>
                                                    <Link href={'/'} className='cmnt-link'>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask'>
                                                        <div className='cmnt-content-bottom'>
                                                            <div className='mons-prd-name'>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
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
                            <div className='cmnt-swipper-main'> {/*  swiper-inner*/}
                                <ul>
                                    <li>
                                        <div className='cmnt-inner'>
                                            <div className='cmnt-mask'>
                                                <div className='cmnt-image'>
                                                    <Link href={'/'} className='cmnt-link'>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask'>
                                                        <div className='cmnt-content-bottom'>
                                                            <div className='mons-prd-name'>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
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
                            <div className='cmnt-swipper-main'> {/*  swiper-inner*/}
                                <ul>
                                    <li>
                                        <div className='cmnt-inner'>
                                            <div className='cmnt-mask'>
                                                <div className='cmnt-image'>
                                                    <Link href={'/'} className='cmnt-link'>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask'>
                                                        <div className='cmnt-content-bottom'>
                                                            <div className='mons-prd-name'>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
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
                            <div className='cmnt-swipper-main'> {/*  swiper-inner*/}
                                <ul>
                                    <li>
                                        <div className='cmnt-inner'>
                                            <div className='cmnt-mask'>
                                                <div className='cmnt-image'>
                                                    <Link href={'/'} className='cmnt-link'>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask'>
                                                        <div className='cmnt-content-bottom'>
                                                            <div className='mons-prd-name'>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
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
                            <div className='cmnt-swipper-main'> {/*  swiper-inner*/}
                                <ul>
                                    <li>
                                        <div className='cmnt-inner'>
                                            <div className='cmnt-mask'>
                                                <div className='cmnt-image'>
                                                    <Link href={'/'} className='cmnt-link'>
                                                        <Image src={'https://img-monsternotebook.mncdn.com/UPLOAD/upload/abra-kucuk-resimler/abra-a7-v12.5/thumb/Abra-A7-v12_5-Gtx_small.png'}
                                                            width={130}
                                                            height={130}
                                                            className='dipslay-inline' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='cmnt-content'>
                                                <Link href={'/'}>
                                                    <div className='cmnt-content-mask'>
                                                        <div className='cmnt-content-bottom'>
                                                            <div className='mons-prd-name'>Abra A7 V12.5.4 17,3" Oyun Bilgisayarı</div>
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