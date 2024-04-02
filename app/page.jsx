import Image from 'next/image'
import NavbarServer from './ui/navbar/navbar-server'
import NavbarClient from './ui/navbar/navbar-client'
import Link from 'next/link'
import './ui/home/homeBtn.css'
import CustomerReviews from './ui/home/customerReviews'
import MailSendClient from './ui/home/mailSend-client'
import MailSendServer from './ui/home/mailSend-server' 

export default function Page() {
  return ( 
    // TIL SEO På google business kan man se hvad der er blevet søgt på når hjemmmesiden er blevet vist.
    // 1. dj  2. dj basstian  3. dj på vestsjælland   4. dj slagelse    5. dj vestsjælland 

<>
  

    {/* Navbar */}
    <NavbarClient>
      <NavbarServer />
    </NavbarClient>
  
  
  
    <main className='h-screen'>
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
        {/* INSERT "KUNDERNE SIGER" */}
        <CustomerReviews />
    </section>
    
    <section className='h-screen flex justify-center items-center'>
      <container className='h-screen w-screen flex justify-center items-center flex-col max-w-[650px]'>
        <div>
          <h1 className='font-medium text-3xl text-center'> Få et uforpligtende tilbud! </h1>
          <p className='text-center'>Skal du bruge en professionel dj til din næste fest? Kontakt DJ BASStian og få et uforpligtende tilbud nu! </p>
        </div>
          
          <div className='mt-10'>
            <MailSendClient>
              <MailSendServer />
            </MailSendClient>

          </div>  
      </container>  
    </section>
</>
  )
}
