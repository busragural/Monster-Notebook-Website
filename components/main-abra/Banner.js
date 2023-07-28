'use client'
import React, { useEffect, useState } from 'react'
import '@/styles/AbraBanner.css'
import Link from 'next/link';

export const Banner = ({ abraBanner }) => {

    const [bannerImage, setBannerImage] = useState('');
    const [bannerTitle, setBannerTitle] = useState('');
    const [bannerContent, setBannerContent] = useState('');

    useEffect(() => {
        if (abraBanner && abraBanner.length > 0) {

            const imageUrl = abraBanner
                .map(item => item.parameters.find(param => param.key === 'prmImg'))
                .filter(Boolean)
                .map(param => `https://img-monsternotebook.mncdn.com${param.value}`);
            setBannerImage(imageUrl);


            const title = abraBanner
                .map(item => item.parameters.find(param => param.key === 'prmTitle'))
                .filter(Boolean)
                .map(param => param.value);
            setBannerTitle(title);


            const content = abraBanner
                .map(item => item.parameters.find(param => param.key === 'prmContent'))
                .filter(Boolean)
                .map(param => param.value);
            setBannerContent(content);

        }
    }, [abraBanner]);



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

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Set the initial state to false

    // Step 2: Event handler to toggle the visibility of the dropdown list
    const toggleDropdown = () => {
        setIsDropdownOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
    };


    return (
        <div> {/* lblbanner3385 burası */}
            <div className={`main-banner ${showMore ? 'opened' : ''}`} style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className='abra-content relative w-full py-0 px-5 top-1/2'>
                    <h1 className='abra-title text-white block overflow-hidden p-0 text-ellipsis'>{bannerTitle}</h1>
                    <span className='abra-desc text-white text-ellipsis overflow-hidden text-justify'>
                        {showMore
                            ? contentArray.map((text, index) => <p key={index}>{text}</p>)
                            : contentArray.slice(0, 1).map((text, index) => <p key={index}>{text}</p>)}
                    </span>
                    <div className='cont-more visible text-right'>
                        <div className='more-text text-center inline-block mt-2.5' onClick={toggleContent}>
                            {showMore ? (
                                <span>daha az göster</span>
                            ) : (
                                <span>daha fazla göster</span>
                            )}
                        </div>
                    </div>


                </div>

            </div>

            <div className='mini-nav bg-black text-center inline-block w-full max-w-full '>
                <div className='mini-nav-wrapper w-full my-0 mx-auto'>
                    <div className='product-que text-center float-left flex items-center relative text-[#a4a4a5]'>
                        Anasayfa - Tüm Laptoplar    
                    </div>
                    <div className='product-sort float-right w-full relative '>
                        <div className={`dropdown-product ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                            <span>SIRALA: MONSTERIN SEÇİMİ</span>
                            {isDropdownOpen && (
                                <ul className='dropdown-list w-full'>
                                    <li>
                                        <Link href={'/'} className='dropdown-list-element'>
                                            <span>ucuzdan pahalı</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} className='dropdown-list-element'>
                                            <span>ucuzdan pahalı</span>
                                        </Link>
                                    </li>

                                </ul>
                            )}
                        </div>
                    </div>
                    <div className='product-stock flex items-center float-right text-[#a4a4a5] mr-5 '>
                    <input type="checkbox" id="stockCheckbox" className='stock-checkbox w-5 h-5'/>
                        <label htmlFor="stockCheckbox" className='ml-2.5'>Stoktakiler</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
