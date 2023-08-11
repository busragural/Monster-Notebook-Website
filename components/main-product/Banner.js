'use client'
import React, { useEffect, useState } from 'react'
import '@/styles/ProductBanner.css'
import Link from 'next/link';

export const Banner = ({ productBanner }) => {

    const [bannerImage, setBannerImage] = useState('');
    const [bannerTitle, setBannerTitle] = useState('');
    const [bannerContent, setBannerContent] = useState('');

    useEffect(() => {
        if (productBanner && productBanner.length > 0) {

            const imageUrl = productBanner
                .map(item => item.parameters.find(param => param.key === 'prmImg'))
                .filter(Boolean)
                .map(param => `https://img-monsternotebook.mncdn.com${param.value}`);
            setBannerImage(imageUrl);


            const title = productBanner
                .map(item => item.parameters.find(param => param.key === 'prmTitle'))
                .filter(Boolean)
                .map(param => param.value);
            setBannerTitle(title);
            console.log("title", bannerImage)


            const content = productBanner
                .map(item => item.parameters.find(param => param.key === 'prmContent'))
                .filter(Boolean)
                .map(param => param.value);
            setBannerContent(content);

        }

    }, [productBanner]);



    useEffect(() => {

        const extractContent = (htmlString) => {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = htmlString;
            const contentArray = [];

            tempElement.childNodes.forEach(childNode => {
                if (childNode.nodeName === 'P') {
                    contentArray.push(childNode.textContent.trim());
                }
            });

            return contentArray;
        };

        if (bannerContent) {
            const contentArray = extractContent(bannerContent);
            setContentArray(contentArray);
        }
    }, [bannerContent]);

    const [contentArray, setContentArray] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const toggleContent = () => {
        setShowMore(prevShowMore => !prevShowMore);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
    };


    return (
        <div> {/* lblbanner3385 burası */}
            <div className={`main-banner bg-cover bg-no-repeat bg-right w-full relative ${showMore ? 'opened' : ''}`} style={{ backgroundImage: `url(${bannerImage[0]})` }}>
                <div className='abra-content relative w-full py-0 px-5 top-1/2 my-0 mx-auto'>
                    <h1 className='abra-title text-white block overflow-hidden p-0 text-ellipsis text-5xl mt-0 mr-0 mb-5 ml-0 font-bold'>
                        {bannerTitle.length > 1 ? bannerTitle[0] : bannerTitle}
                    </h1>
                    <span className='abra-desc text-white text-ellipsis overflow-hidden text-justify text-base leading-5 '>
                        {showMore
                            ? contentArray.map((text, index) => <p key={index}>{text}</p>)
                            : contentArray.slice(0, 1).map((text, index) => <p key={index}>{text}</p>)}
                    </span>
                    <div className='cont-more opacity-100 visible text-right'>
                        <div className='more-text text-center inline-block mt-2.5' onClick={toggleContent}>
                            {showMore ? (
                                <span className='text-[#26df2e] text-base font-bold cursor-pointer text-ellipsis overflow-hidden leading-5 max-h-[78px]'>daha az göster</span>
                            ) : (
                                <span className='text-[#26df2e] text-base font-bold cursor-pointer text-ellipsis overflow-hidden leading-5 max-h-[78px]'>daha fazla göster</span>
                            )}
                        </div>
                    </div>


                </div>

            </div>

            <div className='mini-nav bg-black text-center inline-block w-full max-w-full '>
                <div className='mini-nav-wrapper w-full my-0 mx-auto pt-0 pr-2 pb-0 pl-5'>
                    <div className='product-que text-center float-left flex items-center relative text-[#a4a4a5] h-11 text-sm leading-6 '>
                        Anasayfa - Tüm Laptoplar
                    </div>
                    <div className='product-sort float-right w-full relative inline-block h-11'>
                        <div className={`dropdown-product relative h-11 overflow-hidden ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                            <span className='text-lg w-full h-11 flex items-center py-0 px-2.5 cursor-pointer uppercase text-[#a4a4a5] '>SIRALA: MONSTERIN SEÇİMİ</span>
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
                        </div>
                    </div>
                    <div className='product-stock flex items-center float-right text-[#a4a4a5] mr-5 h-11 text-lg'>
                        <input type="checkbox" id="stockCheckbox" className='stock-checkbox w-5 h-5' />
                        <label htmlFor="stockCheckbox" className='ml-2.5'>Stoktakiler</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
