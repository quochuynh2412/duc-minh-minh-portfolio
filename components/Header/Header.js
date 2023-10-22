import React from 'react';
import Link from 'next/link';
export default function Header() {
    return (
        <div className='fixed top-0 w-full p-4 z-50 bg-none'>
            <nav className='h-16 flex justify-between items-center bg-none pointer-events-none'>
                <div className='text-white flex justify-center items-center px-5 cursor-pointer pointer-events-auto'>
                    <Link href="/"
                        className='font-bold text-white text-xl transition-colors hover:text-[#FFC939]'>
                        ducmvx
                    </Link>
                </div>
                <div>
                    <ul className='flex px-3 gap-2 sm:gap-4 text-sm sm:text-base pointer-events-auto'>
                        <li>
                            <Link className='font-medium text-gray-400 relative transition-all duration-300 hover:text-[#ffca3998] hover:text-shadow p-2 cursor-pointer'
                                href="/projects"
                                scroll={true}>projects</Link>
                        </li>
                        <li>
                            <Link className='font-medium text-gray-400 relative transition-all duration-300 hover:text-[#ffca3998] hover:text-shadow p-2 cursor-pointer'
                                href="/about"
                                scroll={true}>about</Link>
                        </li>
                        <li>
                            <Link className='font-medium text-gray-400 relative transition-all duration-300 hover:text-[#ffca3998] hover:text-shadow p-2 cursor-pointer'
                                href="/contact"
                                scroll={true}>contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <div className='bg-transparent' id='scroller'></div> */}
        </div>
    );
}
