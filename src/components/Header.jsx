import React from 'react';
import Image from 'next/image';

import header_img from '@/assets/header_img.png';

const Header = () => {
    return (
        <div className='pt-0 pb-6'>
            <div>
                <Image className='mx-auto' src={header_img} height={250} alt='image' ></Image>
            </div>
            <h2 className='bg-[#dab95c] text-2xl font-bold pl-[40%] mr-[39%]  pb-2 '>WWW.ROKTO.LAND</h2>
            <h3 className='text-center text-white text-3xl font-bold'>live blood bank</h3>
        </div>
    );
};

export default Header;