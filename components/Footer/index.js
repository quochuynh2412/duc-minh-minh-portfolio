import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="flex flex-col text-xs md:text-sm text-white font-normal gap-4 p-4">
            <div className='flex justify-center items-center text-center'>
                <div className='flex flex-col gap-2'>
                    <p className="text-white text-xs font-normal">Web Developer</p>
                    <Link href={"https://www.letrinhquochuynh.com/"} target="_blank" className="text-white text-xs sm:text-base font-bold transition-all hover:text-[#ffca39]">LE TRINH QUOC HUYNH</Link>
                </div>
            </div>
            <div className='flex flex-col justify-center bg-black text-white text-center font-normal'>
                &copy; Vu Minh Duc, <br className='sm:hidden' />All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
