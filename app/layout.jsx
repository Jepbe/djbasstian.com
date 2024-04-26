import './ui/globals.css';
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})


export const metadata = {
  title: "DJ BASStian - Dj til din næste fest!",
  description: "DJ BASStian, DJ Vestsjælland, DJ bastian, DJBASSTIAN",
  googleSiteVerification: "U10HjTEK_wSci7CA2rqQzo3BV7v1HNlSG8nsUAKWUAI",
  icons: {
    icon: '/BASS64x64.ico'
  }  
};


export default function DashboardLayout({ children }) {

  return ( 
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>{children}</body>
    </html> 
    );
}