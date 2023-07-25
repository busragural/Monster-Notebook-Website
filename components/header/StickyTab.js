'use client'
import React, { useState, useEffect } from 'react'
import StickyTabItem from './StickyTabItem'
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/StickyTab.css';
import '@/styles/StickyTabItem.css'
import logoPic from '@/assets/monster-logo.svg'


export const StickyTab = ({ data }) => {

  const [catName, setCatName] = useState([]);
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    const tmpData = data.map((item) => item);

    setCatData(tmpData);
    setCatName(['Tüm Laptoplar', 'Oyun Bilgisayarları', 'Aksesuarlar', 'Oyuncu Monitörü', 'İş Bilgisayarları', 'İş İstasyonları', 'CPU & GPU']);

  }, [data]);



  return (
    // <div className='sticky-div'>
    //   <div className=' left-0 right-0 text-white flex items-center justify-center py-3 text-sm uppercase gap-10 bg-black '>
    //     {
    //       catName.map((item, key) => (
    //         <StickyTabItem item={item} key={key} catData={catData}/>
    //       ))
    //     }



    //   </div>
    // </div>

    <div className='s-container'>
      <div className='s-tab'>
        <div className='s-main'>
          <div className='s-box'>
            <nav className='s-nav-main '>
              <ul className=''>
                {
                  catName.map((item, key) => (
                    <li className=''>

                      <Link href={'/'} className='s-link link '>
                        {item}
                      </Link>
                      <div className='sub-nav '>
                        <div className='sub-nav-wrapper'>
                          <div className='sub-nav-links'>
                            <div className='sub-nav-lvl2'>
                              <div className='sub-nav-list'>
                                <ul className='sub-swipper'>
                                  <li className='sub-li'>
                                    <Link href={'/'} className='sub-li-li'>
                                    

                                    </Link>

                                  </li>

                                </ul>

                              </div>

                            </div>
                          </div>

                        </div>
                      </div>
                    </li>
                  ))
                }

              </ul>
            </nav>

          </div>
        </div>

      </div>
    </div>

  )
}
