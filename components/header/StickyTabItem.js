import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import '@/styles/StickyTabItem.css'
import '@/styles/StickyTab.css'


const StickyTabItem = ({ item, catData }) => {

    
    return (
        <>
            <Link href={'/'} className='s-link' >
                <div className='group/item  '>
                    <div className='link'>
                        {item}
                    </div>
                    <div className='hidden group-hover/item:block bg-[#131414]  '>
                        <div className='flex items-center justify-center '>
                            {item === 'Tüm Laptoplar' && catData.some((k) => k.name === 'Tüm Laptoplar') ? (
                                <div className='flex items-center justify-center relative '>

                                    {catData[0].childCategories.map((i) =>
                                        i.childCategories.map((j) => (<div >
                                            <div>{j.name}</div>
                                            <Image
                                                src={j.imageUrl}
                                                width={100}
                                                height={100}
                                            />
                                        </div>))
                                    ).flat()}
                                </div>
                            ) : null}

                            {item === 'Aksesuarlar' && catData.some((k) => k.name === 'Aksesuarlar') ? (
                                <div className='flex items-center justify-center relative '>
                                    {catData[1].childCategories.map((i) =>
                                        i.childCategories.map((j) => (<div >
                                            <div>{j.name}</div>
                                            <Image
                                                src={j.imageUrl}
                                                width={100}
                                                height={100}
                                            />
                                        </div>))
                                    ).flat()}
                                </div>
                            ) : null}


                            {
                                catData[0].childCategories.map((i) => (i.name === item) ? (
                                    <div>{i.name}</div>
                                ) : null)
                            }

                            {
                                catData[0].childCategories.map((i) => (
                                    (i.name === item) ? (
                                        i.childCategories.map((j) => (
                                            <div key={j.id}>
                                                <div>{j.name}</div>
                                                <Image
                                                    src={j.imageUrl}
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        ))
                                    ) : null
                                ))
                            }



                        </div>

                    </div>
                </div>
            </Link >


            {/* <Link href={'/'} className='s-link' >

                <div className='link'>
                    {item}
                </div>
            </Link>

            


            <div className='sub-nav'>
                <div className='sub-nav-wrapper'>
                    <div className='sub-nav-links'>
                        <div className='sub-nav-lvl2'>
                            <div className='sub-nav-list'>
                                <ul className='sub-swipper'>
                                    <li className='sub-li'>
                                        <Link href={'/'} className='sub-li-li'>
                                            {item === 'Tüm Laptoplar' && catData.some((k) => k.name === 'Tüm Laptoplar') ? (
                                                <div>

                                                    {catData[0].childCategories.map((i) =>
                                                        i.childCategories.map((j) => (<div >
                                                            <div>{j.name}</div>
                                                            <Image
                                                                src={j.imageUrl}
                                                                width={100}
                                                                height={100}
                                                            />
                                                        </div>))
                                                    ).flat()}
                                                </div>
                                            ) : null}

                                            {item === 'Aksesuarlar' && catData.some((k) => k.name === 'Aksesuarlar') ? (
                                                <div>
                                                    {catData[1].childCategories.map((i) =>
                                                        i.childCategories.map((j) => (<div >
                                                            <div>{j.name}</div>
                                                            <Image
                                                                src={j.imageUrl}
                                                                width={100}
                                                                height={100}
                                                            />
                                                        </div>))
                                                    ).flat()}
                                                </div>
                                            ) : null}


                                            {
                                                catData[0].childCategories.map((i) => (i.name === item) ? (
                                                    <div>{i.name}</div>
                                                ) : null)
                                            }

                                            {
                                                catData[0].childCategories.map((i) => (
                                                    (i.name === item) ? (
                                                        i.childCategories.map((j) => (
                                                            <div key={j.id}>
                                                                <div>{j.name}</div>
                                                                <Image
                                                                    src={j.imageUrl}
                                                                    width={100}
                                                                    height={100}
                                                                />
                                                            </div>
                                                        ))
                                                    ) : null
                                                ))
                                            }

                                        </Link>

                                    </li>

                                </ul>

                            </div>

                        </div>
                    </div>

                </div>
            </div> */}
        </>
    )
}

export default StickyTabItem