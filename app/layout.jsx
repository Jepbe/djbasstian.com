import './ui/globals.css';
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight: '500',
  subsets: ['latin'],
})


export const metadata = {
  title: "DJ BASStian - Dj til din næste fest!",
  description: "DJ BASStian DJ bastian DJBASSTIAN",
  icons: {
    icon: '../public/favicon.ico'
  }  
};


export default function DashboardLayout({ children }) {

  return ( 
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>{children}</body>
    </html> 
    );
}