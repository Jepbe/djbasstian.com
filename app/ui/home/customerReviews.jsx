import Image from "next/image";
import './homeBtn.css'
import { IoMdStar, IoMdStarOutline   } from 'react-icons/io';

export default function customerReviews() {
    return (
    <>
        <div className="h-screen flex sm:flex-row flex-col justify-center items-center text-[#ffff]">

            <div itemProp="review" itemScope itemType="https://schema.org/Review" className="py-2 px-3 sm:p-10 cardBg m-2 rounded-sm max-w-md">
                <div className="flex">
                    <div>
                        <Image 
                            src="/profile2.png" 
                            width={100} 
                            height={100} 
                            alt="Yazmin Solarz profil billede"
                            className="rounded-full w-20 sm:w-[100px]"
                            />  
                    </div>
                    <div className="flex items-center">
                        <ul className="ml-4">
                            <li itemProp="author">Yazmin Solarz</li>
                            <li>Klubleder Ungslagelse</li>
                            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                                <meta itemProp="worstRating" content="1"/>
                                <li itemProp="ratingValue" className="flex flex-row text-orange-400 text-xl"> <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></li>
                                <meta itemProp="bestRating" content="5"/>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <p itemProp="reviewBody" className="font-thin">
                    UngSlagelse og Klubdistrikt Sydøst har brugt DJ Basstian til vores Ungfester flere gange
                     og han formår virkelig at lave en god fest i øjenhøjde med de unge!<strong className="font-bold"> Vi booker ham hver gang!</strong>
                    </p>
                    
                </div>
            </div>

            <div className="py-2 px-3 sm:p-10 cardBg m-2 rounded-sm max-w-md">
                <div className="flex ">
                    <div>
                        <Image 
                            src="/pers_2.jpeg"  
                            width={100} 
                            height={100} 
                            alt=""
                            className="rounded-full w-20 sm:w-[100px]"
                            />
                    </div>
                    <div className="flex items-center">
                        <ul className="ml-4">
                            <li>Kevin Nielsen</li>
                            <li>Leder Miaribo ungdomsskole</li>
                            <li className="flex flex-row text-orange-400 text-xl"> <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="font-thin">
                        Jeg har brugt Dj Basstian til en del events efterhånden i Lollands ungdomsskole. Store som små. <strong className="font-bold">Fælles for dem alle sammen er at han har skabt en kæmpe fest, hvergang.</strong> Jeg er kæmpe imponeret over tempoet og hvordan han altid formår at få alle med. Derudover er han noget af det rareste menneske, altid sød, imødekommende og nede på jorden. Det så fed. Jeg ringer næste gang igen.
                    </p>
                    
                </div>
            </div>
            <div className="py-2 px-3 sm:p-10 cardBg m-2 rounded-sm max-w-md">
                <div className="flex ">
                    <div>
                        <Image 
                            src="/profile3.svg" 
                            width={100} 
                            height={100} 
                            alt=""
                            className="rounded-full w-20 sm:w-[100px] bg-white"
                            />
                    </div>
                    <div className="flex items-center">
                        <ul className="ml-4">
                            <li>Oliver Skov Kofod</li>
                            
                            <li className="flex flex-row text-orange-400 text-xl"> <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="font-thin">
                    Jeg blev overrasket af DJ Bastian til min konfirmation i går, han spiller noget godt musik, og kan få festen til at gå i gang, lige så snart han begynder at spille, så hyppede det alle gæsterne op og så startede festen rigtigt. Kan klart anbefale ham han er virkelig sød osv helt klart pengene vær! 
                    </p>
                </div>
            </div>
        </div>
    </>
    );
}