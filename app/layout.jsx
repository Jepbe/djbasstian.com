import './ui/globals.css';
import { Ubuntu } from 'next/font/google'


const ubuntu = Ubuntu({
  weight: '500',
  subsets: ['latin'],
})

export default function DashboardLayout({ children }) {

  return ( 
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>{children}</body>
    </html> 
    );
}