import { getProductBanner } from '@/services/ProductBanner.js'
import React from 'react'
import { Banner } from '@/components/main-product/Banner.js'
import Products from '@/components/main-product/Products.js'
import { getProducts } from '@/services/Products'
import { nameID, searchByName } from '@/helpers/ProductID'

export const metadata = {
    title: 'Abra Oyun Bilgisayarı Serisi ile Gücü Hissedin | Monster',
    description: 'Generated by create next app',
}

export default async function Home({ params }) {

    let id = searchByName(params.products);
    const body = {
        "searchText": "",
        "categoryId": id,
        "filters": [""],
        "sortType": "",
        "page": 0,
        "pageSize": 50
    }
    const productBanner = await getProductBanner({ params })
    const products = await getProducts(body);

    return (
        <div className='site-content relative bg-[#1B1C1D] '>
            <div className='page-content relative pb-5'>
                <div className='page-container max-w-full w-full'>
                    <Banner productBanner={productBanner} />
                    <Products products={products} params={params} />
                </div>
            </div>
        </div>
    )
}
