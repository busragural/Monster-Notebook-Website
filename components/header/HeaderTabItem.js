import Link from 'next/link'
import React from 'react'

const HeaderTabItem = ({ item }) => {
  return (
    <div>
      <Link href={item.url} className='mini-tab-item'>{item.name}</Link>

    </div>
  )
}

export default HeaderTabItem