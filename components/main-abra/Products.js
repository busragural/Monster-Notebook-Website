'use client'
import React, { useEffect, useState } from 'react'
import '@/styles/AbraProducts.css'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import { searchByName } from '@/helpers/ProductID'
import useSWR from 'swr';

const Products = ({ products, params }) => {


    //filtre kutularini acip kapatmak icin
    const initialOpenStatus = products.filters.map(() => true);
    const [isBoxBodyOpen, setIsBoxBodyOpen] = useState(initialOpenStatus);
    const toggleBoxBody = (index) => {
        setIsBoxBodyOpen((prevStatus) =>
            prevStatus.map((status, i) => (i === index ? !status : status))
        );
    };

    //siralama kismini acip kapatmak icin
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
    };

    //mobildeki filtre kismini acip kapatmak icin
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const toggleFilter = () => {
        setIsFilterOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
    };


    // filtreleme islemleri 
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (filterName, filterGroup) => {

        if (selectedFilters.some(filter => filter.filterName === filterName && filter.filterGroup === filterGroup)) {
            setSelectedFilters((prevFilters) =>
                prevFilters.filter((filter) =>
                    !(filter.filterName === filterName && filter.filterGroup === filterGroup)
                )
            );
        } else {


            setSelectedFilters((prevFilters) => [
                ...prevFilters,
                {
                    filterName,
                    filterGroup
                }

            ]);
        }
    };

    // let id = searchByName(params.products);

    // const [filterParams, setFilterParams] = useState([]);
    // const handleFilter = (filterID) => {
    //     const bodyParam = {
    //         "searchText": "",
    //         "categoryId": id,
    //         "filters": ["filterID"],
    //         "sortType": "",
    //         "page": 0,
    //         "pageSize": 50

    //     }
    //     setFilterParams(bodyParam);

    // }

    const filteredProducts = products.data.filter((product) => {
        //console.log("1", selectedFilters);
        const filternames = selectedFilters.map(filter => filter.filterName);

        for (const filter of filternames) {
            const filterWords = filter.split(' ').filter(word => word.length > 0);
            const productAttributes = product.productAttributes.map(attr => ({
                name: attr.name,
                value: attr.value,
            }));
            const matchedFilter = productAttributes.some(attr => {
                const attrWords = attr.value.split(' ');
                return filterWords.every(word => {
                    return attr.name.includes(word) || attrWords.some(attrWord => attrWord.includes(word));
                });
            });
            if (!matchedFilter) {
                return false;
            }
        }
        return true;
    });

    return (
        <div className='product-main w-full flex '>

            {/*burasi sol filtre kismi */}
            <div className='pro-left relative '>
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
                        {products.filters.map((item, key) => (
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
                                                            <input
                                                                type='checkbox'
                                                                id={`filterCheckbox_${key}_${index}`}
                                                                className='stock-checkbox text-white text-base px-0 w-auto'
                                                                checked={selectedFilters.some(filter => filter.filterName === j.filterName && filter.filterGroup === j.filterGroupName)}
                                                                onChange={() => handleFilterChange(j.filterName, j.filterGroupName)}
                                                            />
                                                            <label
                                                                htmlFor={`filterCheckbox_${key}_${index}`}
                                                                className='px-2 text-lg text-[#a4a4a5]'
                                                            >
                                                                {j.filterName} ({j.count})
                                                            </label>


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
            <div className='pro-right relative'>
                <div className='right-inner'>
                    <div className='mobile-tab'>
                        <div className='mobile-buttons'>
                            <div className={`filter-btn ${isFilterOpen ? 'open' : ''}`} onClick={toggleFilter}>
                                <span className='btn-title'>FİLTRELE</span>
                            </div>
                            <div className={`sort-btn ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                                <span className='btn-title'>SIRALA</span>
                            </div>
                        </div>
                        {isDropdownOpen && (
                            <ul className='dropdown-list w-full'>
                                <li>
                                    <Link href={'/'} className='dropdown-list-element'>
                                        <span>fiyat: düşükten yükseğe</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'} className='dropdown-list-element'>
                                        <span>fiyat: yüksekten düşüğe</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'} className='dropdown-list-element'>
                                        <span>değerlendirme puanı</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'} className='dropdown-list-element'>
                                        <span>eskiden yeniye</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'} className='dropdown-list-element'>
                                        <span>yeniden eskiye</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'} className='dropdown-list-element'>
                                        <span>en çok satanlar</span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                        {isFilterOpen &&
                            <div className='left-filters'>
                                <div className='left-filters-inner'>
                                    <div className='filter-cell'>
                                        {products.filters.map((item, key) => (
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
                                <div className='bottom-btns'>
                                    <div className='btns-inner'>
                                        <div className='btns-close' onClick={toggleFilter}>
                                            <span className='bottom-span'>KAPAT</span>
                                        </div>
                                        <div className='btns-uygula'>
                                            <span className='bottom-span'>UYGULA</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        }
                    </div>

                    <div className='pro-compare-select'>
                        <div className='compare-select'>
                            {selectedFilters.map((filter, index) => (
                                <div className='selection'>
                                    <span key={index}>{filter.filterName}</span>
                                </div>
                            ))}
                        </div>

                        {selectedFilters.length > 0 && (
                            <div className='compare-delete'>
                                <div className=''>
                                    TÜMÜNÜ TEMİZLE
                                </div>
                            </div>
                        )}



                    </div>

                    <ul className='pro-content'>
                        {filteredProducts.map((i, index) => (

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
                                                src={i.image.SmallImageUrl} />

                                        </div>
                                    </div>
                                    <div className='pro-middle'>
                                        <div className='middle-content'>
                                            <div className='w-full'>
                                                <div className='compare-div'>
                                                    <span>Karşılaştır</span>
                                                </div>
                                            </div>
                                            <div className='pro-cont'>
                                                <div className='pro-comments'>

                                                    <div className='pro-cmnt-inner'>
                                                        <div className='flex text-gray-500'>
                                                            <AiFillStar style={{ color: i.rating >= 20 ? "#e4951e" : "inherit" }} />
                                                            <AiFillStar style={{ color: i.rating >= 40 ? "#e4951e" : "inherit" }} />
                                                            <AiFillStar style={{ color: i.rating >= 60 ? "#e4951e" : "inherit" }} />
                                                            <AiFillStar style={{ color: i.rating >= 80 ? "#e4951e" : "inherit" }} />
                                                            <AiFillStar style={{ color: i.rating >= 100 ? "#e4951e" : "inherit" }} />
                                                        </div>

                                                        <span> {i.commentPoint} ({i.commentCount}) </span>
                                                    </div>

                                                </div>

                                                <h3 className='pro-name'>
                                                    {i.name}
                                                </h3>
                                                <div className='pro-ozel '>
                                                    <ul >
                                                        {i.productAttributes?.map((k, t) => (
                                                            <li key={t} >

                                                                •  {k.value}
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
                                                    {i.listPrice !== null && i.listPrice !== undefined ? i.listPrice.toLocaleString() : ""}TL
                                                </div>

                                            </div>
                                            <div className='price-taksit'>
                                                <span className='taksit-span'>2.834,54 TL'den başlayan taksit seçenekleri</span>
                                            </div>
                                        </div>
                                        <div className='pro-basket'>
                                            <div className='basket-detail'>
                                                <Link href={'/Abra'} className='basket-detail-link'>
                                                    <span className='bdl-span'>
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