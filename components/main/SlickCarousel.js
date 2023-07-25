'use client'

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '@/styles/SlickCarousel.css'
import Link from 'next/link';
import Image from 'next/image';

const SlickCarousel = ({ data }) => {
  const [bannerData, setBannerData] = useState([]);
  const [bannerTitle, setBannerTitle] = useState([]);
  const [bannerContent, setBannerContent] = useState([]);
  const [bannerLink, setBannerLink] = useState([]);
  const [bannerColor, setBannerColor] = useState([]);
  const [bannerMobileImg, setBannerMobileImg] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {

      const imageUrls = [];
      const mobileImageUrls = [];
      const imageTitles = [];
      const imageContent = [];
      const imageLinkText = [];
      const imageColor = [];

      data.forEach(item => {
        const prmImgParam = item.parameters.find(param => param.key === 'prmImg');
        if (prmImgParam) {
          imageUrls.push(`https://img-monsternotebook.mncdn.com${prmImgParam.value}`);
        }

        const prmMobileImgParam = item.parameters.find(param => param.key === 'prmMobileImg');
        if (prmMobileImgParam) {
          mobileImageUrls.push(`https://img-monsternotebook.mncdn.com${prmMobileImgParam.value}`);
        }


        const prmTitleParam = item.parameters.find(param => param.key === 'prmTitle');
        if (!(item.parameters.find(param => param.key === 'prmShowMobile'))) {
          imageTitles.push(prmTitleParam ? prmTitleParam.value : null);
        } else {
          imageTitles.push(null);
        }

        const prmContentParam = item.parameters.find(param => param.key === 'prmIcerik');
        imageContent.push(prmContentParam ? prmContentParam.value : null);

        const prmLinkTextParam = item.parameters.find(param => param.key === 'prmLinkText');
        imageLinkText.push(prmLinkTextParam ? prmLinkTextParam.value : null);

        const prmColorParam = item.parameters.find(param => param.key === 'prmColor');
        if (prmColorParam) {
          const color = prmColorParam.value.split('|');
          imageColor.push(color[0].trim());
        } else {
          imageColor.push('white');
        }
      });

      setBannerData(imageUrls);
      setBannerTitle(imageTitles);
      setBannerContent(imageContent);
      setBannerLink(imageLinkText);
      setBannerColor(imageColor);
      setBannerMobileImg(mobileImageUrls);
    }
  }, [data]);

  if (bannerData.length === 0) {
    return <div>Loading</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    autoplay: false,
    autoplaySpeed: 5000,
    customPaging: () => <CustomDots />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }

      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }

      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }

      },


    ]



  };

  return (

    <div className='slider-all '>
      <div className='slider-main mb-5 ml-auto mr-auto relative max-w-none'>
        <Slider {...settings} >
          {bannerData.map((url, index) => (
            <div className='slider-inner pb-5 relative w-full' key={index}>
              <ul className='slider-wrapper relative w-full h-full flex box-content'>
                <li className='slider-li shrink-0 w-full h-full relative'>
                  <div className='inside'>
                    <div className='slider-img-div w-full h-full relative '>
                      <picture >
                        {/* <source media='(max-width:960px)' srcSet={bannerMobileImg} />
                        <source media='(min-width:961px)' srcSet={url} /> */}
                        <Image src={url} className='slider-img w-full absolute max-w-none object-cover'
                        width={2000}
                        height={1000} />

                      </picture>
                    </div>
                    <div className='slider-content-wrapper absolute'>
                      <div className='slider-title' style={{ color: bannerColor[index] }}>
                        <span className='slider-title-span relative'>{bannerTitle[index]}</span>
                      </div>
                      <div className='slider-desc ' style={{ color: bannerColor[index] }}>
                        <span className='slider-desc-content relative'>{bannerContent[index]}</span>
                      </div>
                      <div className='slider-link relative'>
                        <Link href={'/'} className='slider-link-comp text-white'>{bannerLink[index]}</Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </Slider>
      </div>

    </div>

  );
};

export default SlickCarousel;

export const CustomDots = ({ onClick, active }) => (
  <div className={`custom-dot ${active ? 'active' : ''}`} onClick={onClick} />
);

