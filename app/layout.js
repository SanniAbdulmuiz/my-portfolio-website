import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

import '@/app/_styles/globals.css'
import Header from './_components/Header'

export const metadata = {
  title: {
    default: 'Abdulmuiz Ayomide | Frontend Developer Portfolio',
    template: '%s | Abdulmuiz Ayomide',
  },
  description:
    'Frontend web developer specializing in React, Next.js, and responsive design. View projects, skills, and contact details.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'Abdulmuiz',
    'Web Developer Nigeria',
    'Portfolio',
  ],
  authors: [
    { name: 'Abdulmuiz Ayomide', url: 'https://my-portfolio-website-zeta-eosin.vercel.app' },
  ],
  openGraph: {
    title: 'Abdulmuiz Ayomide | Frontend Developer Portfolio',
    description:
      "Explore Abdulmuiz Ayomide's projects and skills in frontend web development using React, Next.js, and modern design.",
    url: 'https://my-portfolio-website-zeta-eosin.vercel.app',
    siteName: 'Abdulmuiz Ayomide Portfolio',
    images: [
      {
        url: 'https://my-portfolio-website-zeta-eosin.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdulmuiz Portfolio Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdulmuiz Ayomide | Frontend Developer',
    description:
      'Frontend developer skilled in React and Next.js. Explore my portfolio, projects, and contact information.',
    images: ['https://my-portfolio-website-zeta-eosin.vercel.app/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://my-portfolio-website-zeta-eosin.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} bg-gray-950 text-gray-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className='flex-1 px-4 py-6 '>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  )
}
