import Image from 'next/image'
import NavbarServer from './ui/navbar/navbar-server'
import NavbarClient from './ui/navbar/navbar-client'
import Head from 'next/head'
import Link from 'next/link'


export default function Page() {
  return ( 
<>
      <Head>
        <title>Template</title>
        <meta 
          property='og:image'
          content='https://djbasstian-tailwind-next-n.vercel.app/api/og'
        />

        <link rel="icon" href="../public/BASS64x64Hvid.ico"/>
      </Head>

    {/* Navbar */}
    <NavbarClient>
      <NavbarServer />
    </NavbarClient>
  
  
  
    <main>
      <div className='w-screen h-screen mainBG flex justify-center items-center'>
          <div className='z-10 text-white'>
            <h1 className='text-[#032d61] text-4xl text-center font-semibold drop-shadow-sm '>DJ TIL DIN NÆSTE FEST!</h1>
            <div className='flex justify-center items-center flex-col sm:flex-row'>
              <Link href="https://www.nexusevent.dk/nexusevent/faa-et-tilbud"><button >BOOK</button></Link>  
              <Link href=""><button>MERCH</button></Link>  
            </div>
          </div>  
      </div>

    </main>
</>
  )
}
