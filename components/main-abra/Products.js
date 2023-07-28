import React from 'react'
import '@/styles/AbraProducts.css'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

const Products = ({ abraFilters }) => {
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
                    <div className='left-cell2'>
                        <div className='filter-box box-cat  '>
                            {abraFilters.map((item) => (
                                <>
                                    <div className='box-header text-white'>
                                        <span>
                                            <Link href={'/'} className='box-header-link'>
                                                <span>
                                                    {item.name}
                                                    <IoIosArrowForward className='box-arrow' />
                                                </span>

                                            </Link>
                                        </span>
                                    </div>

                                    <div className='box-body'>
                                        <ul className='box-body-content'>
                                            {item.filters.map((j) => (
                                                <li>
                                                    <Link href={'/abra'} className='text-white text-base py-2.5 px-0 block w-auto'>
                                                        {j.filterName}({j.count})
                                                    </Link>
                                                </li>
                                            ))}


                                        </ul>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/*burasi sağ urun kismi */}
            <div className='pro-right'>

            </div>
        </div>
    )
}

export default Products