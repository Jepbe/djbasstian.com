import './ui/globals.css';
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})


export const metadata = {
  title: "DJ BASStian | DJ til din næste fest!",
  description: "DJ BASStian, DJ Vestsjælland, DJ bastian, DJBASSTIAN",
  keywords: ["DJ BASStian", "DJ Vestsjælland", "DJ bastian", "DJBASSTIAN", "DJ Booking Slagelse", "DJ Slagelse"],
  openGraph: {
    title: "DJ BASStian | DJ til din næste fest!",
    description: "DJ BASStian, DJ Vestsjælland, DJ bastian, DJBASSTIAN",
    url: "https://djbasstian.com",
    type: "website",
    locale: "da_DK",
    siteName: "DJ BASStian",
    images: [
      {
        url: "https://www.djbasstian.com/bg1.jpeg",
        width: 1919,
        height: 1080,
        alt: "DJ BASStian"
      },
    ],
  },
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