'use client'
import React, { useEffect, useState } from 'react'
import '@/styles/Categories.css'
import Link from 'next/link'
import Image from 'next/image'
import logoPic from '@/assets/logo.png'


const Categories = ({ data, gamePcs, workPcs, workSta, aksesuar, monitor }) => {

    const catName = ['Tüm Laptoplar',
        'Oyun Bilgisayarları',
        'Aksesuarlar',
        'Oyuncu Monitörü',
        'İş Bilgisayarları',
        'İş İstasyonları',
        'CPU & GPU'
    ]

    const [catData, setCatData] = useState([]);
    const [gamePc, setGamePc] = useState([]);
    const [workPc, setWorkPc] = useState([])
    const [workStat, setWorkStat] = useState({});
    const [aksesuarlar, setAksesuarlar] = useState([])
    const [monitors, setMonitors] = useState([])

    useEffect(() => {
        const tmpData = data.map((item) => item);
        setCatData(tmpData);
        setGamePc(gamePcs);
        console.log("gamepc:", gamePc);
        setWorkPc(workPcs);
        console.log("workPc:", workPc);
        setWorkStat(workSta);
        console.log("workStat:", workStat);
        setAksesuarlar(aksesuar);
        console.log("aksesuarlar:", aksesuarlar);
        setMonitors(monitor);
        console.log("monitors:", monitors);
    }, [data]);







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

                                                                {item === 'Tüm Laptoplar' && catData.some((k) => k.name === 'Tüm Laptoplar') ? (
                                                                    <div className='flex justify-center'>
                                                                        {catData[0].childCategories.map((i) =>
                                                                            i.childCategories.map((j) => (<li className='sub-wrapper-li'>
                                                                                <Link href={'/'} className='sub-wrapper-link'>
                                                                                    <Image
                                                                                        src={j.imageUrl}
                                                                                        width={100}
                                                                                        height={100}
                                                                                    />
                                                                                    <span>{j.name}</span>
                                                                                </Link>
                                                                            </li>))
                                                                        ).flat()}
                                                                    </div>
                                                                ) : null}

                                                                {item === 'Aksesuarlar' && catData.some((k) => k.name === 'Aksesuarlar') ? (
                                                                    <div className='flex justify-center'>
                                                                        {catData[1].childCategories.map((i) =>
                                                                            i.childCategories.map((j) => (
                                                                                <li className='sub-wrapper-li'>
                                                                                    <Link href={'/'} className='sub-wrapper-link'>
                                                                                        <Image
                                                                                            src={j.imageUrl}
                                                                                            width={100}
                                                                                            height={100}
                                                                                        />
                                                                                        <span>{j.name}</span>
                                                                                    </Link>
                                                                                </li>))
                                                                        ).flat()}
                                                                    </div>
                                                                ) : null}
                                                                









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

export default Categories