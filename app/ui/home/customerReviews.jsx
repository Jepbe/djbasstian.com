import Image from "next/image";
import './homeBtn.css'

export default function customerReviews() {
    return (
        <div className="h-screen flex justify-center items-center text-black">
            <div className="p-10 cardBg m-2 rounded-sm max-w-sm">
                <div className="flex ">
                    <div>
                        <Image 
                            src="/profile1.jpg" 
                            width={100} 
                            height={100} 
                            alt=""
                            className="rounded-full"
                            />
                    </div>
                    <div className="flex items-center">
                        <ul className="ml-4">
                            <li>KOMMER SNART</li>
                            <li>KOMMER SNART</li>
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

            <div className="p-10 cardBg m-2 rounded-sm max-w-sm">
                <div className="flex ">
                    <div>
                        <Image 
                            src="/profile1.jpg" 
                            width={100} 
                            height={100} 
                            alt=""
                            className="rounded-full"
                            />
                    </div>
                    <div className="flex items-center">
                        <ul className="ml-4">
                            <li>KOMMER SNART</li>
                            <li>KOMMER SNART</li>
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
            <div className="p-10 cardBg m-2 rounded-sm max-w-sm">
                <div className="flex ">
                    <div>
                        <Image 
                            src="/profile1.jpg" 
                            width={100} 
                            height={100} 
                            alt=""
                            className="rounded-full"
                            />
                    </div>
                    <div className="flex items-center">
                        <ul className="ml-4">
                            <li>KOMMER SNART</li>
                            <li>KOMMER SNART</li>
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
    );
}