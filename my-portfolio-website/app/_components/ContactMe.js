import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import Button from './Button'

export const metadata = {
  title: 'Contact | Abdulmuiz Ayomide | Frontend Developer',
  description:
    'Get in touch with Abdulmuiz Ayomide — a frontend developer specializing in building fast, scalable, and user-friendly web applications with React and Next.js.',
  keywords: [
    'Contact Abdulmuiz Ayomide',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Hire Frontend Developer',
    'Web Developer Nigeria',
    'JavaScript Developer',
  ],
  openGraph: {
    title: 'Contact Abdulmuiz Ayomide | Frontend Developer',
    description:
      'Reach out to Abdulmuiz Ayomide for collaborations, freelance projects, or job opportunities in frontend development. Let’s build something great together.',
    url: 'https://my-portfolio-website-zeta-eosin.vercel.app/contact',
    siteName: 'Abdulmuiz Ayomide Portfolio',
    images: [
      {
        url: 'https://my-portfolio-website-zeta-eosin.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Abdulmuiz Ayomide - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Abdulmuiz Ayomide | Frontend Developer',
    description:
      'Connect with Abdulmuiz Ayomide — a frontend developer skilled in React, Next.js, and TypeScript. Let’s bring your ideas to life.',
    images: ['https://my-portfolio-website-zeta-eosin.vercel.app/og-image.jpg'],
  },
}

function ContactMe() {
  return (
    <div className='text-center space-y-6'>
      <h2 className='text-4xl font-bold text-blue-100 tracking-tight'>Contact Me</h2>

      <p className='text-lg text-blue-200 max-w-md mx-auto'>
        Have an awesome project idea? Let’s connect and bring it to life.
      </p>

      <div className='flex flex-col items-center gap-12'>
        <nav className='text-lg'>
          <ul className='flex flex-col gap-8 items-center'>
            <li>
              <Link
                href='https://github.com/SanniAbdulmuiz'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300'
              >
                <FaGithub size={26} />
                <span>github.com/SanniAbdulmuiz</span>
              </Link>
            </li>
            <li>
              <Link
                href='https://x.com/Abdulmuiz_sanni'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300'
              >
                <FaTwitter size={26} />
                <span>x.com/Abdulmuiz_sanni</span>
              </Link>
            </li>
            <li>
              <Link
                href='https://linkedin.com/in/sanni-abdulmuiz'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300'
              >
                <FaLinkedin size={26} />
                <span>linkedin.com/in/sanni-abdulmuiz</span>
              </Link>
            </li>
            <li>
              <Link
                href='mailto:ayomideabdulmuiz565@gmail.com'
                className='flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300'
              >
                <FaEnvelope size={26} />
                <span>ayomideabdulmuiz565@gmail.com</span>
              </Link>
            </li>
          </ul>
        </nav>

        <Button text='Download Resume' href='/resume.pdf' download='Abdulmuiz_Resume.pdf' />
      </div>
    </div>
  )
}

export default ContactMe
