import Link from 'next/link'
import React from 'react'

const HeaderTabItem = ({item}) => {
  return (
    <div>
        <Link href={item.url}>{item.name}</Link>
        
    </div>
  )
}

export default HeaderTabItem