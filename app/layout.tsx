import { Nunito } from 'next/font/google'

import Navbar from '@/app/components/Navbar/Navbar';
import LoginModal from '@/app/components/Modals/LoginModal';
import RegisterModal from '@/app/components/Modals/RegisterModal';
import RentModal from '@/app/components/Modals/RentModal';

import ToasterProvider from './Providers/ToasterProvider';

import './globals.css'
import ClientOnly from './components/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';
import Footer from './components/Footer/Footer';
import SearchModal from './components/Modals/SearchModal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
          <Footer />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}