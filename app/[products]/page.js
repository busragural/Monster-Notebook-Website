import { getAbraBanner } from '@/services/AbraBanner'
import React from 'react'
import {Banner} from '@/components/main-abra/Banner.js'
import Products from '@/components/main-abra/Products.js'
import { getAbraFilter } from '@/services/AbraFilters'
import { getAbraProducts } from '@/services/AbraProducts'

export const metadata = {
    title: 'Abra Oyun Bilgisayarı Serisi ile Gücü Hissedin | Monster',
    description: 'Generated by create next app',
  }

export default async function Home({params}) {

    <h1>{params}</h1>

    const abraBanner = await getAbraBanner({ params });
    const abraFilters = await getAbraFilter({ params });
    const abraProducts = await getAbraProducts({params});
    
    return (
        <div className='site-content relative bg-[#1B1C1D] '>
            <div className='page-content relative pb-5'>
                <div className='page-container max-w-full w-full'>
                    <Banner abraBanner={abraBanner} />
                    <Products abraFilters = {abraFilters} abraProducts={abraProducts}/>

                </div>
            </div>
        </div>
    )
}

