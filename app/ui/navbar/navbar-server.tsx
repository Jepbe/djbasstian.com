// import { getServerSession } from "next-auth";
// import { options } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";
import './navbar.css'

export default async function NavbarServer() {
    // const session = await getServerSession(options);

    return (
        <>
            {/* {session ?<li className="drop-shadow"> <Link href="/member">member</Link></li> : <li className="hidden"></li>} */}
            {/* {session ?<li className="drop-shadow"> <Link href="/dashboard">dashboard</Link></li> : <li className="hidden"></li>} */}
            <li className="drop-shaddow navbar-links font-bold"><Link href="/">Hjem</Link></li>
            <li className="drop-shaddow navbar-links font-bold"><Link href="mailto:booking@djbasstian.com">Book</Link></li>
            <li className="drop-shaddow navbar-links font-bold"><Link href="./some">SoMe</Link></li>
            <li className="drop-shaddow navbar-links font-bold"><Link href="https://djbasstian.sportyfied.com/da">Merch</Link></li>    
            <li className="drop-shaddow navbar-links font-bold"><Link href="/music">Musik</Link></li>    
            {/* {session ? <button className="bg-gray-800 rounded text-white px-3 py-1"><Link href="/api/auth/signout?callbackUrl=/">Log ud</Link></button> : <button className="bg-gray-800 rounded text-white px-3 py-1"><Link href="/api/auth/signin/">Log in</Link></button> } */}
        </>
    );
}