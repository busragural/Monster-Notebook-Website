import Image from "next/image";
import Link from "next/link";
import '@/styles/Categories.css'

export const getImages = (categories) => {
    return (
        <div className='flex justify-center'>
            {categories?.map((j) => (
                <li className='sub-wrapper-li'>
                    <Link href={'/'} className='sub-wrapper-link'>
                        <Image
                            src={j.imageUrl}
                            width={100}
                            height={100}
                            alt=''
                        />
                        <span>{j.name}</span>
                    </Link>
                </li>
            ))}
        </div>
    );
};

export const getSubCategories = (categories) => {
    return (
        <div className=''>
            {categories?.map((j) => (
                <li className='sub-wrapper-li'>
                    <Link href={'/'} className='sub-wrapper-link'>
                        
                        <span>{j.name}</span>
                    </Link>
                </li>
            ))}
        </div>
    );
};