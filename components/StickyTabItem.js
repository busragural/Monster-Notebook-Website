import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import picture from '@/assets/logo.png'
import '@/styles/StickyTabItem.css'


const StickyTabItem = ({ item }) => {
    return (
        <Link href={item.url} className='' >
            <div className='group/item '>
                <div className='link'>
                    {item.name}
                </div>
                
                <div className='hidden group-hover/item:block bg-[#131414] '>
                    <div className='flex items-center'>
                        <Image 
                        src={picture}
                        width={250}
                        height={300} 
                        alt=""
                        />

                        <Image 
                        src={picture}
                        width={250}
                        height={300}
                        alt=""
                         />
                    </div>
                    
                </div>
            </div>


        </Link>
    )
}

export default StickyTabItem