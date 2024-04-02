import NavbarServer from '../ui/navbar/navbar-server'
import NavbarClient from '../ui/navbar/navbar-client'
import '../ui/some/some.css'
import Link from 'next/link';


import { FaInstagram, FaSoundcloud, FaYoutube, FaTiktok, FaSnapchat } from 'react-icons/fa';


export default function Page() {
    return(
    <> 
    {/* Navbar */}
    <NavbarClient>
      <NavbarServer />
    </NavbarClient>
        
    <main className='w-screen h-screen mainBG flex justify-center items-center overflow-y-scroll'>
        <article>
        <div className='sm:h-[50vh] h-[60vh] mb-40 sm:mb-0 rounded-2xl p-10'>
        <h1 className='text-white text-3xl text-center font-medium mb-10'>DJ BASStians Sociale Medier</h1>

            <div className='sm:w-[650px] w-[100%] grid md:grid-cols-2 grid-cols-1 grid-rows-4 gap-5 '>
                <Link href="https://www.youtube.com/@dj_basstian" >
                <div className='h-[80px] rounded-xl bg-white px-4 flex items-center slimBorder cardSpecialProp cardSpecialPropHover cursor-pointer'>
                    <div className='w-[100%] flex flex-row items-center'>
                        <div className='w-[46px] h-[46px] min-w-[46px] bg-[#ff0000] rounded-full ytShaddow flex justify-center items-center'>
                            <i className='text-white text-center text-2xl'><FaYoutube /></i>
                        </div>
                        <h3 className='ml-3 font-medium text-[20px]'>YouTube</h3>
                    </div>
                </div>
                </Link>

                <Link href="https://www.tiktok.com/@dj_basstian">
                <div className='h-[80px] rounded-xl bg-white px-4 flex items-center slimBorder cardSpecialProp cardSpecialPropHover cursor-pointer'>
                    <div className='w-[100%] flex flex-row items-center'>
                        <div className='w-[46px] h-[46px] min-w-[46px] bg-[#000000] rounded-full tiktokShaddow flex justify-center items-center'>
                            <i className='text-white text-center text-2xl'><FaTiktok /></i>
                        </div>
                        <h3 className='ml-3 font-medium text-[20px]'>TikTok</h3>
                    </div>
                </div>
                </Link>
                
                <Link href="https://soundcloud.com/bastian-nielsen-360664195">
                <div className='h-[80px] rounded-xl bg-white px-4 flex items-center slimBorder cardSpecialProp cardSpecialPropHover cursor-pointer'>
                    <div className='w-[100%] flex flex-row items-center'>
                        <div className='w-[46px] h-[46px] min-w-[46px] bg-[#f75610] rounded-full soundcloudShaddow flex justify-center items-center'>
                            <i className='text-white text-center text-2xl'><FaSoundcloud /></i>
                        </div>
                        <h3 className='ml-3 font-medium text-[20px]'>SoundCloud</h3>
                    </div>
                </div>
                </Link>

                <Link href="https://www.instagram.com/dj_basstian/">
                <div className='h-[80px] rounded-xl bg-white px-4 flex items-center slimBorder cardSpecialProp cardSpecialPropHover cursor-pointer'>
                    <div className='w-[100%] flex flex-row items-center'>
                        <div className='w-[46px] h-[46px] min-w-[46px] instagramBG rounded-full instagramShaddow flex justify-center items-center'>
                            <i className='text-white text-center text-2xl'><FaInstagram /></i>
                        </div>
                        <h3 className='ml-3 font-medium text-[20px]'>Instagram</h3>
                    </div>
                </div>
                </Link>

                <Link href="https://www.snapchat.com/add/djbas_offentlig?share_id=aZvfuCxHIsI&locale=da-DK">
                <div className='h-[80px] rounded-xl bg-white px-4 flex items-center slimBorder cardSpecialProp cardSpecialPropHover cursor-pointer'>
                    <div className='w-[100%] flex flex-row items-center'>
                        <div className='w-[46px] h-[46px] min-w-[46px] bg-[#f7f400] rounded-full snapchatShaddow flex justify-center items-center'>
                            <i className='text-white text-center text-3xl'><FaSnapchat /></i>
                        </div>
                        <h3 className='ml-3 font-medium text-[20px]'>Snapchat</h3>
                    </div>
                </div>
                </Link>

                {/* <div className='slimBorder rounded-xl bg-white px-4'><h3 className='ml-3 font-medium text-[20px]'>KOMEMR SNART</h3></div> */}
            </div>
        </div>
        </article>

    </main>        
    </>
    );
}