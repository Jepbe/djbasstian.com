import NavbarServer from '../ui/navbar/navbar-server'
import NavbarClient from '../ui/navbar/navbar-client'

export const metadata = {
    title: 'DJ BASStian - Musik & Udgivelser | Spotify',
    description: 'Hør DJ BASStians seneste musik og udgivelser på Spotify. Professionel DJ fra Vestsjælland med eksklusive tracks og remixes.',
    keywords: ['DJ BASStian', 'Musik', 'Spotify', 'DJ Vestsjælland', 'Udgivelser', 'DJ bastian', 'DJBASSTIAN'],
    openGraph: {
        title: 'DJ BASStian - Musik & Udgivelser | Spotify',
        description: 'Hør DJ BASStians seneste musik og udgivelser på Spotify. Professionel DJ fra Vestsjælland med eksklusive tracks og remixes.',
        url: 'https://djbasstian.com/music',
        type: 'music.playlist',
        locale: 'da_DK',
        siteName: 'DJ BASStian',
        images: [
            {
                url: 'https://www.djbasstian.com/bg1.jpeg',
                width: 1919,
                height: 1080,
                alt: 'DJ BASStian Musik'
            }
        ]
    }
}

export default function Page() {
    return (
    <>
        {/* Navbar */}
        <NavbarClient>
            <NavbarServer />
        </NavbarClient>
  
        <main>
            <div className='w-screen h-screen mainBG flex justify-center items-center'> 
                <div className="flex xl:flex-row flex-col gap-8">
                    <article itemScope itemType="https://schema.org/MusicRecording">
                        <meta itemProp="name" content="DJ BASStian Track 1" />
                        <meta itemProp="artist" content="DJ BASStian" />
                        <iframe 
                            className="rounded-xl w-full sm:w-[600px]" 
                            src="https://open.spotify.com/embed/track/7krTD6Ke38yMuUJlqkIXNk?utm_source=generator" 
                            height="352" 
                            frameBorder="0" 
                            allowFullScreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                            title="DJ BASStian Track 1 on Spotify"
                        />
                    </article>
                    <article itemScope itemType="https://schema.org/MusicRecording">
                        <meta itemProp="name" content="DJ BASStian Track 2" />
                        <meta itemProp="artist" content="DJ BASStian" />
                        <iframe 
                            className="rounded-xl w-full sm:w-[600px]" 
                            src="https://open.spotify.com/embed/track/4kJPoLW1foJ3x7u8PvzF7T?utm_source=generator" 
                            height="352" 
                            frameBorder="0" 
                            allowFullScreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                            title="DJ BASStian Track 2 on Spotify"
                        />
                    </article>
                </div>
            </div>
        </main>
    </>
    );
}