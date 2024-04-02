import Image from 'next/image'
import NavbarServer from './ui/navbar/navbar-server'
import NavbarClient from './ui/navbar/navbar-client'
import Head from 'next/head'
import Link from 'next/link'
import './ui/home/homeBtn.css'
import CustomerReviews from './ui/home/customerReviews'


export default function Page() {
  return ( 
    // TIL SEO På google business kan man se hvad der er blevet søgt på når hjemmmesiden er blevet vist.
    // 1. dj  2. dj basstian  3. dj på vestsjælland   4. dj slagelse    5. dj vestsjælland 

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
            <h1 className='text-white text-4xl text-center font-semibold drop-shadow-sm px-4'>DJ TIL DIN NÆSTE FEST?</h1>
            <div className='flex justify-center items-center flex-col sm:flex-row mt-5'>
              <Link href="https://www.instagram.com/direct/t/106879234041055"><button className='button-50 mx-0 sm:mx-3 my-3 sm:my-0' >BOOK</button></Link>  
              <Link href=""><button className='button-50 mx-0 sm:mx-3 my-3 sm:my-0'>MERCH</button></Link>  
            </div>
          </div>  
      </div>
    </main>
    <section className='h-screen screen2Bg'>
        <CustomerReviews />
    </section>
</>
  )
}
