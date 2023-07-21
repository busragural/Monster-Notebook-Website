import React from 'react'
import StickyTabItem from './StickyTabItem'

export const StickyTab = ({ data }) => {

  return (
    <div className='sticky-div'>
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
