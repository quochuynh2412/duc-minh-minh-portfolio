import './globals.css'
import localFont from 'next/font/local'
import { Inter, Oswald } from 'next/font/google'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const neuemontreal = localFont({
  src: [
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-LightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-neue-montreal',
})

const oswald = Oswald({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
