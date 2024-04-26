import NavbarServer from './ui/navbar/navbar-server'
import NavbarClient from './ui/navbar/navbar-client'
import Link from 'next/link'
import './ui/home/homeBtn.css'
import CustomerReviews from './ui/home/customerReviews'

export default function Page() {
  return ( 
<>

    {/* Navbar */}
    <NavbarClient>
      <NavbarServer />
    </NavbarClient>

  
    <main className='h-screen'>
      <div className='w-screen h-screen mainBG flex justify-center items-center'>
          <div itemscope itemtype="https://schema.org/Service" className='z-10 text-white'>
            <h1 itemProp='slogan' className='text-white text-4xl text-center font-semibold drop-shadow-sm px-4'>DJ TIL DIN NÆSTE FEST?</h1>
            <div className='flex justify-center items-center flex-col sm:flex-row mt-5'>
              <Link href="mailto:booking@djbasstian.com"><button className='button-50 mx-0 sm:mx-3 my-3 sm:my-0' >BOOK</button></Link>  
              <Link href="https://djbasstian.sportyfied.com/da"><button className='button-50 mx-0 sm:mx-3 my-3 sm:my-0'>MERCH</button></Link>  
            </div>
          </div>  
      </div>
    </main>
    <section className='h-screen screen2Bg'>
        <CustomerReviews />
    </section>
    
    <section className='h-[50vh] flex justify-center items-center'>
      <container className='w-screen flex justify-center items-center flex-col max-w-[650px]'>
        <div>
          <h1 className='font-medium text-3xl text-center'> Få et uforpligtende tilbud! </h1>
          <p className='text-center p-2'>Skal du bruge en professionel dj til din næste fest? Kontakt DJ BASStian og få et uforpligtende tilbud nu! </p>
        </div>
          
          <div className='mt-10'>
          <Link href="mailto:kontakt@djbasstian.com"><button className='p-4 bg-[#076eed] rounded font-bold text-white hover:bg-[#2f89f8] active:bg-[#2f89f8]'>kontakt@djbasstian.com</button></Link>

          </div>  
      </container>  
    </section>
</>
  )
}
