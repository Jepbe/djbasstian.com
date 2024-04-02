'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import bassLogo from '../../../public/bass_logo_1_hvid.png'
import { FaInstagram, FaSoundcloud, FaYoutube, FaTiktok } from 'react-icons/fa';


export default function NavbarClient({ children }) {
    const [navbar, setNavbar] = useState( false );

    return (
    <> 
        <button onClick={() => setNavbar(!navbar)} className="z-50 cursor-pointer md:hidden fixed right-7 top-[40px] text-white ">
            {navbar ? 
            <span className="relative bottom-[10px] left-[6px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </span>
            :
            <span className="relative bottom-1">
                <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </span>
            }
        </button>

        <header className={"fixed top-[-8px] left-0 w-full z-20 drop-shadow-lg"}>

            <nav className={`text-white flex justify-between m-0 ${navbar ? 'flex-col' :'flex-row'}`}>
                <ul className="flex flex-row mt-2 md:mt-0">
                    <Link href="/">
                        <span>
                            <Image src={bassLogo} width="140" height="100" alt="DJ BASSTIAN Dj Basstian Logo djbasstian-logo" />                        
                        </span>
                    </Link>   
                    <ul className={"hidden md:flex flex-col ml-10 text-[16px] md:flex-row gap-9 items-center"}> 
                        { children } 
                    </ul>
                </ul>

                
                <ul className={`md:hidden md:ml-[-1rem] mt-0 flex flex-col w-screen justify-center h-[90vh] bg-[hsla(0,0%,100%,.95)] text-gray-700   00 font-medium text-[26px] md:flex-row gap-9 items-center ${navbar ? 'flex' : 'hidden'}`}>
                    { children }
                </ul>

                <ul className={`hidden md:flex flex-col mr-6 text-[16px] md:flex-row gap-1 items-center`}>
                    <li className="ml-2">
                        <button className="inline text-light hover:text-[#6b72ff] text-xl sm:text-lg">
                            <Link href="https://www.instagram.com/dj_basstian/" target="_blank"> <FaInstagram className="drop-shadow-sm" /> </Link>
                        </button>
                    </li>
                    <li className="ml-2">
                        <button className="inline text-light hover:text-[#6b72ff] text-xl sm:text-lg">
                            <Link href="https://soundcloud.com/bastian-nielsen-360664195" target="_blank"> <FaSoundcloud className="drop-shadow-sm" /> </Link>
                        </button>
                    </li>
                    <li className="ml-2">
                        <button className="inline text-light hover:text-[#6b72ff] text-xl sm:text-lg">
                            <Link href="https://www.youtube.com/@dj_basstian" target="_blank"> <FaYoutube className="drop-shadow-sm" /> </Link>
                        </button>
                    </li>
                    <li className="ml-2">
                        <button className="inline text-light hover:text-[#6b72ff] text-xl sm:text-lg">
                            <Link href="https://www.tiktok.com/@dj_basstian" target="_blank"> <FaTiktok className="drop-shadow-sm" /> </Link>
                        </button>
                    </li>
                </ul>
           </nav>
        </header>
    </>
    );
}