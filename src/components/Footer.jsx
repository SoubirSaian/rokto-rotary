import React from 'react';
import Image from 'next/image';

import facebook from '@/assets/facebook.png';
import menu from '@/assets/menu.png';

const Footer = () => {
    return (
        <div className='bg-[#dab95c] mt-3 py-4 flex justify-around'>
            <div className='flex items-center gap-1 cursor-pointer'>
                <h3 className='text-3xl'>Rokto</h3>
                <Image src={facebook} height={50} alt='logo'/>
            </div>
            <div className='cursor-pointer'>
                {/* <h3 className='text-2xl font-semibold'>Menu</h3> */}
                <Image src={menu} width={50} alt='icon'/>
            </div>
        </div>
    );
};

export default Footer;