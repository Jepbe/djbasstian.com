import NavbarServer from '../ui/navbar/navbar-server'
import NavbarClient from '../ui/navbar/navbar-client'


export default function Page() {
    return (
    <>
        {/* Navbar */}
        <NavbarClient>
            <NavbarServer />
        </NavbarClient>
  

        <main>
            <div className='w-screen h-screen mainBG flex justify-center items-center'>
                <iframe className="border-radius:12px" src="https://open.spotify.com/embed/track/4kJPoLW1foJ3x7u8PvzF7T?utm_source=generator" width="600" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </main>
    </>
    );
}