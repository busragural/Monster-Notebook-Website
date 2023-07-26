'use client'
import React, { useEffect, useMemo, useState } from 'react'
import '@/styles/Categories.css'
import Link from 'next/link'
import Image from 'next/image'
import catName from '@/helpers/CategoryName'



const Categories = ({ data, gamePcs, workPcs, workSta, aksesuar, monitor }) => {

    const tmpData = useMemo(() => data.map((item) => item), [data]);

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
    }, [tmpData, gamePcs, workPcs, workSta, aksesuar, monitor]);

    const getImages = (categories) => {
        return (
            <div className='flex justify-center'>
                {categories?.map((j) => (
                    <li className='sub-wrapper-li'>
                        <Link href={'/'} className='sub-wrapper-link'>
                            <Image
                                src={j.imageUrl}
                                width={100}
                                height={100}
                                alt=''
                            />
                            <span>{j.name}</span>
                        </Link>
                    </li>
                ))}
            </div>
        );
    };


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

                                                                {item === 'Oyun Bilgisayarları' ? getImages(gamePcs[0]?.childCategories) : null}
                                                                {item === 'Oyuncu Monitörü' ? getImages(monitor[0]?.childCategories) : null}
                                                                {item === 'İş Bilgisayarları' ? getImages(workPcs[0]?.childCategories) : null}
                                                                {item === 'İş İstasyonları' ? getImages(workStat[0]?.childCategories) : null} 

                                                                {/* {item === 'Tüm Laptoplar' && catData.some((k) => k.name === 'Tüm Laptoplar') ? (
                                                                    <div className='flex justify-center'>
                                                                        {catData[0].childCategories.map((i) =>
                                                                            i.childCategories.map((j) => (<li className='sub-wrapper-li'>
                                                                                <Link href={'/'} className='sub-wrapper-link'>
                                                                                    <Image
                                                                                        src={j.imageUrl}
                                                                                        width={100}
                                                                                        height={100}
                                                                                        alt=''
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
                                                                                            alt=''
                                                                                        />
                                                                                        <span>{j.name}</span>
                                                                                    </Link>
                                                                                </li>))
                                                                        ).flat()}
                                                                    </div>
                                                                ) : null}


                                                                                                                            
                                                                {item === 'Oyun Bilgisayarları' ? (
                                                                    <div className='flex justify-center'>
                                                                        {gamePc[0]?.childCategories?.map((j) => (
                                                                            <li className='sub-wrapper-li'>
                                                                                <Link href={'/'} className='sub-wrapper-link'>
                                                                                    <Image
                                                                                        src={j.imageUrl}
                                                                                        width={100}
                                                                                        height={100}
                                                                                        alt=''
                                                                                    />
                                                                                    <span>{j.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </div>
                                                                ) : null}
                                                                {item === 'Oyuncu Monitörü' ? (
                                                                    <div className='flex justify-center'>
                                                                        {monitor[0]?.childCategories?.map((j) => (
                                                                            <li className='sub-wrapper-li'>
                                                                                <Link href={'/'} className='sub-wrapper-link'>
                                                                                    <Image
                                                                                        src={j.imageUrl}
                                                                                        width={100}
                                                                                        height={100}
                                                                                        alt=''
                                                                                    />
                                                                                    <span>{j.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </div>
                                                                ) : null}
                                                                {item === 'İş Bilgisayarları' ? (
                                                                    <div className='flex justify-center'>
                                                                        {workPc[0]?.childCategories?.map((j) => (
                                                                            <li className='sub-wrapper-li'>
                                                                                <Link href={'/'} className='sub-wrapper-link'>
                                                                                    <Image
                                                                                        src={j.imageUrl}
                                                                                        width={100}
                                                                                        height={100}
                                                                                        alt=''
                                                                                    />
                                                                                    <span>{j.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </div>
                                                                ) : null}

                                                                {item === 'İş İstasyonları' ? (
                                                                    <div className='flex justify-center'>
                                                                        {workStat[0]?.childCategories?.map((j) => (
                                                                            <li className='sub-wrapper-li'>
                                                                                <Link href={'/'} className='sub-wrapper-link'>
                                                                                    <Image
                                                                                        src={j.imageUrl}
                                                                                        width={100}
                                                                                        height={100}
                                                                                        alt=''
                                                                                    />
                                                                                    <span>{j.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </div>
                                                                ) : null} */}

                                                                {/* {item === 'Oyun Bilgisayarları' ? (
                                                                    <div className='flex justify-center'>
                                                                        {catData[0]?.childCategories[0]?.childCategories.map((j) => (
                                                                            <li className='sub-wrapper-li'>
                                                                                <Link href={'/'} className='sub-wrapper-link'>
                                                                                    <Image
                                                                                        src={j.imageUrl}
                                                                                        width={100}
                                                                                        height={100}
                                                                                        alt=''
                                                                                    />
                                                                                    <span>{j.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </div>
                                                                ) : null}
                                                                {item === 'Oyuncu Monitörü' ? (
                                                                    <div className='flex justify-center'>
                                                                        {catData[1]?.childCategories[0]?.childCategories[3]?.childCategories.map((j) => (
                                                                            <li className='sub-wrapper-li'>
                                                                                <Link href={'/'} className='sub-wrapper-link'>
                                                                                    <Image
                                                                                        src={j.imageUrl}
                                                                                        width={100}
                                                                                        height={100}
                                                                                        alt=''
                                                                                    />
                                                                                    <span>{j.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </div>
                                                                ) : null}
                                                                {item === 'İş Bilgisayarları' ? (
                                                                    <div className='flex justify-center'>
                                                                        {catData[0]?.childCategories[2]?.childCategories.map((j) => (
                                                                            <li className='sub-wrapper-li'>
                                                                                <Link href={'/'} className='sub-wrapper-link'>
                                                                                    <Image
                                                                                        src={j.imageUrl}
                                                                                        width={100}
                                                                                        height={100}
                                                                                        alt=''
                                                                                    />
                                                                                    <span>{j.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </div>
                                                                ) : null}

                                                                {item === 'İş İstasyonları' ? (
                                                                    <div className='flex justify-center'>
                                                                        {catData[0]?.childCategories[1]?.childCategories.map((j) => (
                                                                            <li className='sub-wrapper-li'>
                                                                                <Link href={'/'} className='sub-wrapper-link'>
                                                                                    <Image
                                                                                        src={j.imageUrl}
                                                                                        width={100}
                                                                                        height={100}
                                                                                        alt=''
                                                                                    />
                                                                                    <span>{j.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </div>
                                                                ) : null} */}


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

