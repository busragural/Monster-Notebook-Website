'use client'
import React, { useState, useEffect } from 'react'
import StickyTabItem from './StickyTabItem'


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
              <ul >
                {
                  catName.map((item, key) => (
                    <li className=''>


                      <StickyTabItem item={item} key={key} catData={catData} />
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
