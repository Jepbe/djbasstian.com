import NavbarServer from '../ui/navbar/navbar-server'
import NavbarClient from '../ui/navbar/navbar-client'
import '../ui/some/some.css'

import { FaInstagram, FaSoundcloud, FaYoutube, FaTiktok, FaSnapchat } from 'react-icons/fa';


export default function Page() {
    return(
    <> 
    {/* Navbar */}
    <NavbarClient>
      <NavbarServer />
    </NavbarClient>
        
    <main className='w-screen h-screen someBg flex justify-center items-center'>

        <div className='sm:h-[50vh] h-[60vh] rounded-2xl sm:bg-[hsla(0,0%,100%,.94)] p-10'>
        <h1 className='sm:text-black text-white sm:drop-shadow-none drop-shadow-md text-3xl text-center font-medium mb-10'>DJ BASStians Sociale Medier</h1>

            <div className='sm:w-[650px] w-[100%] grid md:grid-cols-2 grid-cols-1 grid-rows-4 gap-5 '>
                
                <div className='h-[80px] rounded-xl bg-white px-4 flex items-center slimBorder cardSpecialProp cardSpecialPropHover cursor-pointer'>
                    <div className='w-[100%] flex flex-row items-center'>
                        <div className='w-[46px] h-[46px] min-w-[46px] bg-[#ff0000] rounded-full ytShaddow flex justify-center items-center'>
                            <i className='text-white text-center text-2xl'><FaYoutube /></i>
                        </div>
                        <h3 className='ml-3 font-medium text-[20px]'>YouTube</h3>
                    </div>
                </div>

                <div className='h-[80px] rounded-xl bg-white px-4 flex items-center slimBorder cardSpecialProp cardSpecialPropHover cursor-pointer'>
                    <div className='w-[100%] flex flex-row items-center'>
                        <div className='w-[46px] h-[46px] min-w-[46px] bg-[#000000] rounded-full tiktokShaddow flex justify-center items-center'>
                            <i className='text-white text-center text-2xl'><FaTiktok /></i>
                        </div>
                        <h3 className='ml-3 font-medium text-[20px]'>TikTok</h3>
                    </div>
                </div>
                
                <div className='h-[80px] rounded-xl bg-white px-4 flex items-center slimBorder cardSpecialProp cardSpecialPropHover cursor-pointer'>
                    <div className='w-[100%] flex flex-row items-center'>
                        <div className='w-[46px] h-[46px] min-w-[46px] bg-[#f75610] rounded-full soundcloudShaddow flex justify-center items-center'>
                            <i className='text-white text-center text-2xl'><FaSoundcloud /></i>
                        </div>
                        <h3 className='ml-3 font-medium text-[20px]'>SoundCloud</h3>
                    </div>
                </div>

                <div className='h-[80px] rounded-xl bg-white px-4 flex items-center slimBorder cardSpecialProp cardSpecialPropHover cursor-pointer'>
                    <div className='w-[100%] flex flex-row items-center'>
                        <div className='w-[46px] h-[46px] min-w-[46px] instagramBG rounded-full instagramShaddow flex justify-center items-center'>
                            <i className='text-white text-center text-2xl'><FaInstagram /></i>
                        </div>
                        <h3 className='ml-3 font-medium text-[20px]'>Instagram</h3>
                    </div>
                </div>

                <div className='h-[80px] rounded-xl bg-white px-4 flex items-center slimBorder cardSpecialProp cardSpecialPropHover cursor-pointer'>
                    <div className='w-[100%] flex flex-row items-center'>
                        <div className='w-[46px] h-[46px] min-w-[46px] bg-[#f7f400] rounded-full snapchatShaddow flex justify-center items-center'>
                            <i className='text-white text-center text-3xl'><FaSnapchat /></i>
                        </div>
                        <h3 className='ml-3 font-medium text-[20px]'>Snapchat</h3>
                    </div>
                </div>

                {/* <div className='slimBorder rounded-xl bg-white px-4'><h3 className='ml-3 font-medium text-[20px]'>KOMEMR SNART</h3></div> */}
            </div>
        </div>

    </main>        
    </>
    );
}