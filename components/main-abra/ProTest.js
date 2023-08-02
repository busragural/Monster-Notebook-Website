
import React from 'react'
import '@/styles/AbraProducts.css'

import { getAbraProducts } from '@/services/Products'
import { searchByName } from '@/helpers/ProductID'


const ProTest = async ({ abraFilters, params }) => {
 
    let id=searchByName(params.products);

  const productParams ={
    "searchText": "",
    "categoryId": id,
    "filters": [""],
    "sortType": "",
    "page": 0,
    "pageSize": 50
}

    

    const abraProducts =  await getAbraProducts(productParams);
    






    return (
        <div className='product-main w-full flex '>

         
        </div>
    )
}

export default ProTest