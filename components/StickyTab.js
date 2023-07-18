import React from 'react'
import StickyTabItem from './StickyTabItem'
import { getParentData } from './TabCategories';


export const StickyTab = async () => {

  const data = await getParentData();

  return (


    <div className='divide-y-2 divide-rose-900'>
      <div></div>


      <div className=' left-0 right-0 text-white flex items-center justify-center py-3 text-sm uppercase gap-10 bg-black '>

        {
          data.map((item, key) => (
            <StickyTabItem item={item} key={key} />
          ))
        }
      </div>


    </div>

  )
}
