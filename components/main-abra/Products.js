'use client'
import React, { useEffect, useState } from 'react'
import '@/styles/AbraProducts.css'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { useRouter } from 'next/navigation'


const Products = ({ abraFilters, abraProducts }) => {

    const router = useRouter();
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

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
    };

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
    };


    //////////////////
    const [selectedFilters, setSelectedFilters] = useState([]);

    const areFiltersFromSameGroup = (filters) => {
        if (filters.length === 0) return true;
        const filterGroups = filters.map((filter) => {
            return abraFilters.find((group) =>
                group.filters.some((f) => f.filterName === filter)
            );
        });
        return new Set(filterGroups).size === 1;
    };
    const handleFilterChange = (filterName) => {

        if (selectedFilters.includes(filterName)) {
            setSelectedFilters((prevFilters) => prevFilters.filter((filter) => filter !== filterName));
        } else {
            setSelectedFilters((prevFilters) => [...prevFilters, filterName]);
        }
    };
    const filteredProducts = abraProducts.filter((product) => {
        const lowerCaseFilters = selectedFilters.map(filter => filter.toLowerCase());
        for (const filter of lowerCaseFilters) {
            const wordsToSearch = filter.split(/\s+/);
            if (!wordsToSearch.every(word => product.productAttributes.some(attr => attr.value.toLowerCase().includes(word)))) {
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
                                                            <input
                                                                type='checkbox'
                                                                id={`filterCheckbox_${key}_${index}`}
                                                                className='stock-checkbox text-white text-base px-0 w-auto'
                                                                checked={selectedFilters.includes(j.filterName)}
                                                                onChange={() => handleFilterChange(j.filterName)}
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
                                            <div className='pro-cont'>
                                                <h3 className='pro-name'>
                                                    {i.name}
                                                </h3>
                                                <div className='pro-ozel'>
                                                    <ul>
                                                        {i.productAttributes?.map((k, t) => (
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