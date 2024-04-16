import Image from "next/image";
import './homeBtn.css'
import { IoMdStar, IoMdStarOutline   } from 'react-icons/io';

export default function customerReviews() {
    return (
    <>
        <div className="h-screen flex sm:flex-row flex-col justify-center items-center text-[#ffff]">
            <div className="py-2 px-3 sm:p-10 cardBg m-2 rounded-sm max-w-sm">
                <div className="flex ">
                    <div>
                        <Image 
                            src="/profile2.png" 
                            width={100} 
                            height={100} 
                            alt=""
                            className="rounded-full w-20 sm:w-[100px]"
                            />  
                    </div>
                    <div className="flex items-center">
                        <ul className="ml-4">
                            <li>Yazmin Solarz</li>
                            <li>Klubleder Ungslagelse</li>
                            <li className="flex flex-row text-orange-400 text-xl"> <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="font-thin">
                    UngSlagelse og Klubdistrikt Sydøst har brugt DJ Basstian til vores Ungfester flere gange
                     og han formår virkelig at lave en god fest i øjenhøjde med de unge!<strong className="font-bold"> Vi booker ham hver gang!</strong>
                    </p>
                    
                </div>
            </div>

            <div className="py-2 px-3 sm:p-10 cardBg m-2 rounded-sm max-w-sm">
                <div className="flex ">
                    <div>
                        <Image 
                            src="/profile1.jpg" 
                            width={100} 
                            height={100} 
                            alt=""
                            className="rounded-full w-20 sm:w-[100px]"
                            />
                    </div>
                    <div className="flex items-center">
                        <ul className="ml-4">
                            <li>KOMMER SNART</li>
                            <li>KOMMER SNART</li>
                            <li className="flex flex-row text-orange-400 text-xl"> <IoMdStarOutline  /><IoMdStarOutline  /><IoMdStarOutline  /><IoMdStarOutline  /><IoMdStarOutline  /></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="font-thin">
                        <strong className="font-bold">Lorem, ipsum dolor sit amet consectetur adipisic elit. </strong> 
                        Voluptatum maxime nemo corrupti soluta expedita eligendi nisi quos. Quisquam, voluptatem vel?
                    </p>
                    
                </div>
            </div>
            <div className="py-2 px-3 sm:p-10 cardBg m-2 rounded-sm max-w-sm">
                <div className="flex ">
                    <div>
                        <Image 
                            src="/profile1.jpg" 
                            width={100} 
                            height={100} 
                            alt=""
                            className="rounded-full w-20 sm:w-[100px]"
                            />
                    </div>
                    <div className="flex items-center">
                        <ul className="ml-4">
                            <li>KOMMER SNART</li>
                            <li>KOMMER SNART</li>
                            <li className="flex flex-row text-orange-400 text-xl"> <IoMdStarOutline  /><IoMdStarOutline  /><IoMdStarOutline  /><IoMdStarOutline  /><IoMdStarOutline  /></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="font-thin">
                        <strong className="font-bold">Lorem, ipsum dolor sit amet consectetur adipisic elit. </strong> 
                        Voluptatum maxime nemo corrupti soluta expedita eligendi nisi quos. Quisquam, voluptatem vel?
                    </p>
                </div>
            </div>
        </div>
    </>
    );
}