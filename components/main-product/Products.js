'use client'
import React, { useEffect, useState } from 'react'
import '@/styles/ProductFilter.css'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import { searchByName } from '@/helpers/ProductID'
import axios from 'axios'



export const fetchProducts = async (body) => {
    try {
        const response = await axios.post(process.env.API_URL_PRODUCTS, body, {
            headers: {
                'x-monster-client-channel': 'MobileAppTr',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': process.env.API_KEY_PRODUCTS,
            }
        });

        const bannersData = response.data;

        return bannersData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};


const Products = ({ products, params }) => {
    const [data, setData] = useState([])
    const [selectedFilters, setSelectedFilters] = useState([]);
    const initialOpenStatus = products?.filters?.map(() => true);
    const [isBoxBodyOpen, setIsBoxBodyOpen] = useState(initialOpenStatus);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        let id = searchByName(params.products);

        let filterIds = selectedFilters.map(filter => filter.filterId);
        const body = {
            "searchText": "",
            "categoryId": id,
            "filters": filterIds.map(id => id),
            "sortType": "",
            "page": 0,
            "pageSize": 50
        };

        const fetchData = async () => {
            try {
                const fetchedData = await fetchProducts(body);
                setData(fetchedData);

            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, [selectedFilters]);


    //filtre kutularini acip kapatmak icin
   
    const toggleBoxBody = (index) => {
        setIsBoxBodyOpen((prevStatus) =>
            prevStatus.map((status, i) => (i === index ? !status : status))
        );
    };

    //siralama kismini acip kapatmak icin
    
    const toggleDropdown = () => {
        setIsDropdownOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
    };

    //mobildeki filtre kismini acip kapatmak icin
    
    const toggleFilter = () => {
        setIsFilterOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
    };


    // filtreleme islemleri 
   

    const handleFilterChange = (filterName, filterGroup, filterId) => {
        if (selectedFilters.some(filter => filter.filterName === filterName && filter.filterGroup === filterGroup && filter.filterId === filterId)) {
            setSelectedFilters((prevFilters) =>
                prevFilters.filter((filter) =>
                    !(filter.filterName === filterName && filter.filterGroup === filterGroup && filter.filterId === filterId)
                )
            );
        } else {
            setSelectedFilters((prevFilters) => [
                ...prevFilters,
                {
                    filterName,
                    filterGroup,
                    filterId
                }
            ]);
        }
    };

    const handleClearAllFilters = () => {
        setSelectedFilters([]);
    };
    return (
        <div className='product-main w-full flex mt-0 mr-auto mb-0 ml-auto flex-row '>

            {/*burasi sol filtre kismi */}
            <div className='pro-left relative pt-o pr-0 pb-0 pl-5 my-12 mx-0'>
                <div className='left-inner'>
                    <div className='left-cell1'>
                        <div className='filter-box box-cat mt-0 mr-0 mb-5 ml-0 inline-block w-full '>
                            <div className='box-header p-4 -mb-px'>
                                <span>
                                    <Link href={'/'} className='box-header-link text-white p-0 text-left relative block'>
                                        <span className='text-base flex justify-between items-center uppercase tracking-wider'>
                                            Kategoriler
                                            <IoIosArrowForward className='box-arrow' />
                                        </span>
                                    </Link>
                                </span>
                            </div>
                            <div className='box-body'>
                                <ul className='box-body-content leading-6 pt-1 pr-2.5 pb-3.5 pl-3.5'>
                                    <li className='relative flex flex-wrap w-full'>
                                        <Link href={'/'} className='text-white text-base py-2.5 px-0 block w-auto'>
                                            Tüm Laptoplar
                                        </Link>
                                    </li>
                                    <li className='relative flex flex-wrap w-full'>
                                        <Link href={'/'} className='text-white text-base py-2.5 px-0 block w-auto'>
                                            Tüm Laptoplar
                                        </Link>
                                    </li>
                                    <li className='relative flex flex-wrap w-full'>
                                        <Link href={'/'} className='text-white text-base py-2.5 px-0 block w-auto'>
                                            Tüm Laptoplar
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='left-cell2 '>
                        {data?.filters?.map((item, key) => (
                            <>
                                <div className='filter-box box-cat mt-0 mr-0 mb-5 ml-0 inline-block w-full ' key={key}>
                                    <div className='box-header  p-4 -mb-px text-white'>
                                        <span onClick={() => toggleBoxBody(key)}>
                                            <div className='box-header-link text-white p-0 text-left relative block'>
                                                <span className='cursor-pointer text-base flex justify-between items-center uppercase tracking-wider'>
                                                    {item.name}
                                                    <IoIosArrowForward className={`box-arrow ${isBoxBodyOpen[key] ? 'open' : 'close'}`} />
                                                </span>

                                            </div>
                                        </span>
                                    </div>
                                    {isBoxBodyOpen[key] && (
                                        <div className='box-body'>
                                            <ul className='box-body-content leading-6 pt-1 pr-2.5 pb-3.5 pl-3.5'>
                                                {item.filters.map((j, index) => (
                                                    <li key={index} className='relative flex flex-wrap w-full'>
                                                        <div className=' py-2.5 px-0 block w-auto'>
                                                            <input
                                                                type='checkbox'
                                                                id={`filterCheckbox_${key}_${index}`}
                                                                className='stock-checkbox text-white text-base px-0 w-5 h-5 '
                                                                checked={selectedFilters.some(filter => filter.filterName === j.filterName && filter.filterGroup === j.filterGroupName && filter.filterId === j.filterId)}
                                                                onChange={() => handleFilterChange(j.filterName, j.filterGroupName, j.filterId)}
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
                <div className='right-inner pt-0 pr-0 pb-3 pl-2'>
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
                                        {data?.filters?.map((item, key) => (
                                            <>
                                                <div className='filter-box box-cat mt-0 mr-0 mb-5 ml-0 inline-block w-full ' key={key}>
                                                    <div className='box-header  p-4 -mb-px text-white'>
                                                        <span onClick={() => toggleBoxBody(key)}>
                                                            <div className='box-header-link text-white p-0 text-left relative block'>
                                                                <span className='text-base flex justify-between items-center uppercase tracking-wider'>
                                                                    {item.name}
                                                                    <IoIosArrowForward className={`box-arrow ${isBoxBodyOpen[key] ? 'open' : 'close'}`} />
                                                                </span>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    {isBoxBodyOpen[key] && (
                                                        <div className='box-body'>
                                                            <ul className='box-body-content leading-6 pt-1 pr-2.5 pb-3.5 pl-3.5'>
                                                                {item.filters.map((j, index) => (
                                                                    <li key={index} className='relative flex flex-wrap w-full'>
                                                                        <div className=' py-2.5 px-0 block w-auto'>
                                                                            <input
                                                                                type='checkbox'
                                                                                id={`filterCheckbox_${key}_${index}`}
                                                                                className='stock-checkbox text-white text-base px-0 w-5 h-5'
                                                                                checked={selectedFilters.some(filter => filter.filterName === j.filterName && filter.filterGroup === j.filterGroupName && filter.filterId === j.filterId)}
                                                                                onChange={() => handleFilterChange(j.filterName, j.filterGroupName, j.filterId)}
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

                    <div className='pro-compare-select pt-0 pr-40 pb-0 pl-2 w-full flex justify-between'>
                        <div className='compare-select flex w-auto justify-start flex-wrap'>
                            {selectedFilters.map((filter, index) => (
                                <div className='selection mr-2.5 pt-1 pr-2.5 pb-1 pl-2.5 relative mb-2.5 bg-[#323334]'>
                                    <span key={index} className='text-sm text-[#00FF00] block pr-7'>
                                        {filter.filterName}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {selectedFilters.length > 0 && (
                            <div className='compare-delete cursor-pointer align-middle p-2 right-2 !inline-block' onClick={handleClearAllFilters}>
                                <div className='text-sm text-[#00FF00]'>
                                    TÜMÜNÜ TEMİZLE
                                </div>
                            </div>
                        )}



                    </div>

                    <ul className='pro-content flex flex-wrap'>
                        {data?.data?.map((i, index) => (

                            <li className='w-1/3 pt-0 pr-2 pb-4 pl-2 min-h-full relatife h-auto' key={index}>
                                <div className='pro-inner relative flex m-0 bg-[#161617] h-full'>
                                    <Link href={'/Abra'} className='pro-link absolute top-0 left-0 w-full h-full'>
                                    </Link>
                                    <div className='pro-top p-5 relative bg-center bg-cover '>
                                        <div className='pro-image relative overflow-hidden'>

                                            <img src={i.image.SmallImageUrl} className='w-full h-full' />

                                        </div>
                                    </div>
                                    <div className='pro-middle text-left w-full' >
                                        <div className='middle-content p-0 w-full h-full flex flex-wrap items-end justify-end'>
                                            <div className='w-full'>
                                                <div className='compare-div relative bg-black w-full inline-block py-2.5 px-5'>
                                                    <span className='!inline-block text-[#a4a4a5] text-lg'>Karşılaştır</span>
                                                </div>
                                            </div>
                                            <div className='pro-cont w-full relative m-0 p-5'>
                                                <div className='pro-comments'>
                                                    <div className='pro-cmnt-inner flex items-center'>
                                                        <div className='flex text-gray-500'>
                                                            <AiFillStar style={{ color: i.rating >= 20 ? "#e4951e" : "inherit" }} />
                                                            <AiFillStar style={{ color: i.rating >= 40 ? "#e4951e" : "inherit" }} />
                                                            <AiFillStar style={{ color: i.rating >= 60 ? "#e4951e" : "inherit" }} />
                                                            <AiFillStar style={{ color: i.rating >= 80 ? "#e4951e" : "inherit" }} />
                                                            <AiFillStar style={{ color: i.rating >= 100 ? "#e4951e" : "inherit" }} />
                                                        </div>

                                                        <span className='text-[#e4951e] text-lg'> {i.commentPoint} ({i.commentCount}) </span>
                                                    </div>

                                                </div>

                                                <h3 className='pro-name max-h-11 mb-5 block text-xl text-white '>
                                                    {i.name}
                                                </h3>
                                                <div className='pro-ozel max-h-32 mb-5 overflow-hidden text-[#a4a4a5] text-ellipsis text-xs'>
                                                    <ul className='relative overflow-hidden text-ellipsis'>
                                                        {i.productAttributes?.map((k, t) => (
                                                            <li key={t} className='relative text-ellipsis overflow-hidden w-full h-auto text-[#a4a4a5] whitespace-nowrap !text-[14px] list-inside opacity-100'>
                                                                •  {k.value}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pro-bottom flex w-full pt-0 pr-5 pb-5 pl-5 items-end mt-auto flex-wrap'>
                                        <div className='pro-price flex flex-wrap w-full whitespace-nowrap pt-0 pr-0 pb-4 pl-0'>
                                            <div className='price-wrapper block flex-auto '>
                                                <div className='price-inner text-white text-2xl mr-3 mt-2.5 font-bold tracking-wider'>
                                                    {i.listPrice !== null && i.listPrice !== undefined ? i.listPrice.toLocaleString() : ""}TL
                                                </div>
                                            </div>
                                            <div className='price-taksit relative w-full'>
                                                <span className='taksit-span block mb-2 text-sm text-[#00FF00] !whitespace-break-spaces '>2.834,54 TL'den başlayan taksit seçenekleri</span>
                                            </div>
                                        </div>
                                        <div className='pro-basket flex items-end '>
                                            <div className='basket-detail relative pt-5'>
                                                <Link href={'/Abra'} className='basket-detail-link w-full block text-center overflow-hidden p-0 hover:bg-[#26df2e]'>
                                                    <span className='bdl-span text-white text-base block py-3 px-2.5 font-semibold tracking-wider h-12 hover:text-black'>
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