import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="flex flex-col text-xs md:text-sm text-white font-normal gap-4 p-4">
            <div className='bg-none text-white text-center font-normal'>
                &copy; Vu Minh Duc, <br className='sm:hidden' />All Rights Reserved. Website developed by <Link href={"https://www.letrinhquochuynh.com/"} target="_blank" className="inline transition-all hover:text-[#ffca39]">Huynh Le</Link>
            </div>
        </footer>
    );
};

export default Footer;
