'use client'
import React, { useEffect, useState } from 'react'
import '@/styles/AbraProducts.css'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image'
import { getID } from '@/helpers/ProductID'


const Products = ({ abraFilters, abraProducts }) => {

    const [smallImg, setsmallImg] = useState([]);
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [attribute, setAttribute] = useState([])
    const [filter, setFilter] = useState([])
    
    useEffect(() => {
        
        //console.log("abra all", abraProducts)
        const imgs = abraProducts.map((item) => item.image.SmallImageUrl);
        setsmallImg(imgs);

        const names = abraProducts.map((item) => item.name);
        setName(names);

        const prices = abraProducts.map((item) => item.listPrice);
        setPrice(prices);

        const attributes = abraProducts.map((item) => item.productAttributes)
        setAttribute(attributes);

        
 
    }, [abraProducts])


    const initialOpenStatus = abraFilters.map(() => true);
    const [isBoxBodyOpen, setIsBoxBodyOpen] = useState(initialOpenStatus);


    const toggleBoxBody = (index) => {
        setIsBoxBodyOpen((prevStatus) =>
            prevStatus.map((status, i) => (i === index ? !status : status))
        );
    };



    return (
        <div className='product-main'>

            {/*burasi sol filtre kismi */}
            <div className='pro-left'>
                <div className='left-inner'>
                    <div className='left-cell1'>
                        <div className='filter-box box-cat'>
                            <div className='box-header'>
                                <span>
                                    <Link href={'/'} className='box-header-link'>
                                        <span>Kategoriler
                                            <IoIosArrowForward className='box-arrow' />
                                        </span>

                                    </Link>
                                </span>
                            </div>
                            <div className='box-body'>
                                <ul className='box-body-content'>
                                    <li>
                                        <Link href={'/'} className='text-white text-base py-2.5 px-0 block w-auto'>
                                            Tüm Laptoplar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} className='text-white text-base py-2.5 px-0 block w-auto'>
                                            Tüm Laptoplar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} className='text-white text-base py-2.5 px-0 block w-auto'>
                                            Tüm Laptoplar
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='left-cell2 '>
                        {abraFilters.map((item, key) => (
                            <>
                                <div className='filter-box box-cat' key={key}>
                                    <div className='box-header text-white'>
                                        <span onClick={() => toggleBoxBody(key)}>
                                            <div className='box-header-link'>
                                                <span>
                                                    {item.name}
                                                    <IoIosArrowForward className={`box-arrow ${isBoxBodyOpen[key] ? 'open' : 'close'}`} />
                                                </span>

                                            </div>
                                        </span>
                                    </div>
                                    {isBoxBodyOpen[key] && (
                                        <div className='box-body'>
                                            <ul className='box-body-content'>
                                                {item.filters.map((j, index) => (
                                                    <li key={index}>
                                                        <div className=' py-2.5 px-0 block w-auto'>
                                                            <input type="checkbox" id="stockCheckbox" className='stock-checkbox  text-white text-base  px-0  w-auto' />
                                                            <label htmlFor="stockCheckbox" className='px-2 text-lg text-[#a4a4a5] '>{j.filterName} ({j.count})</label>

                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>



            {/*burasi sağ urun kismi */}
            <div className='pro-right'>
                <div className='right-inner'>
                    <ul className='pro-content'>
                        {abraProducts.map((i, index) => (
                            <li className='' key={index}>
                                <div className='pro-inner'>
                                    <Link href={'/Abra'} className='pro-link'>
                                    </Link>
                                    <div className='pro-top'>
                                        <div className='pro-image'>
                                            {/* <Image className='pro-image-img'
                                           src={smallImg[index]}
                                            width={100}
                                            height={100}
                                        /> */}
                                            <img
                                                src={smallImg[index]} />

                                        </div>
                                    </div>
                                    <div className='pro-middle'>
                                        <div className='middle-content'>
                                            <div className='pro-cont'>
                                                <h3 className='pro-name'>
                                                    {name[index]}
                                                </h3>
                                                <div className='pro-ozel'>
                                                    <ul>
                                                        {attribute[index]?.map((k, t) => (
                                                            <li key={t}>
                                                                {k.value}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pro-bottom'>
                                        <div className='pro-price'>
                                            <div className='price-wrapper'>

                                                <div className='price-inner'>
                                                    {price[index] !== null && price[index] !== undefined ? price[index].toLocaleString() : ""}TL
                                                </div>

                                            </div>
                                        </div>
                                        <div className='pro-basket'>
                                            <div className='basket-detail'>
                                                <Link href={'/Abra'} className='basket-detail-link'>
                                                    <span>
                                                        SEPETE EKLE
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Products