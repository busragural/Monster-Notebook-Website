import Image from "next/image";
import Link from "next/link";
import '@/styles/Categories.css'

const convertToEnglish = (text) => {
    const turkishCharacters = {
        'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c',
        'İ': 'I', 'Ğ': 'G', 'Ü': 'U', 'Ş': 'S', 'Ö': 'O', 'Ç': 'C',
    };
    return text.replace(/([ığıüşöçİĞÜŞÖÇ])/g, function (letter) {
        return turkishCharacters[letter];
    });
};

export const getImages = (categories) => {
    return (
        <div className='flex justify-center'>
            {categories?.map((j, value) => {
                const englishName = convertToEnglish(j.name);
                const slug = englishName.split(' ').join('-');
                
                return (
                    <li className='sub-wrapper-li' key={value}>
                        <Link href={`/${slug}`} className='sub-wrapper-link'>
                            <Image
                                src={j.imageUrl}
                                width={100}
                                height={100}
                                alt=''
                            />
                            <span>{j.name}</span>
                        </Link>
                    </li>
                );
            })}
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