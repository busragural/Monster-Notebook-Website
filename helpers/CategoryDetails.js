import Image from "next/image";
import Link from "next/link";
import '@/styles/Categories.css'

export const convertToEnglish = (text) => {
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
                    <li className='sub-wrapper-li text-center mb-0 w-full opacity-100 h-full cursor-pointer relative shrink-0' key={value}>
                        <Link href={`/${slug}`} className='sub-wrapper-link relative p-0 text-black text-base block'>
                            <Image className="sub-image relative z-[1] w-20 h-20 block max-w-full object-contain mx-auto mb-2.5"
                                src={j.imageUrl}
                                width={100}
                                height={100}
                                alt=''
                            />
                            <span className="text-base inline text-white relative">{j.name}</span>
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
            {categories?.map((j) => {
                const englishName = convertToEnglish(j.name);
                const slug = englishName.split(' ').join('-');

                return (
                    <li className='sub-wrapper-li text-center mb-0 w-full opacity-100 h-full cursor-pointer relative shrink-0'>
                        <Link href={`/${slug}`} className='sub-wrapper-link '>

                            <span className="text-white ">{j.name}</span>
                        </Link>
                    </li>
                )})}
        </div>
    );
};