import Link from 'next/link'
import Script from 'next/script'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className='border-t border-primary-900 px-8 py-6 text-center text-blue-50'
      aria-label='Site Footer'
    >
      <p className='text-sm sm:text-base'>
        &copy; {currentYear} <span itemProp='name'>Abdulmuiz Ayomide</span>. All rights reserved.
      </p>

      <div className='flex justify-center gap-4 mt-3 text-sm text-blue-300'>
        <Link
          href='https://github.com/SanniAbdulmuiz'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Visit Abdulmuiz Ayomide’s GitHub profile'
          className='hover:text-fuchsia-400 transition-colors duration-200'
        >
          GitHub
        </Link>
        <Link
          href='https://linkedin.com/in/sanni-abdulmuiz'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Visit Abdulmuiz Ayomide’s LinkedIn profile'
          className='hover:text-fuchsia-400 transition-colors duration-200'
        >
          LinkedIn
        </Link>
        <Link
          href='https://x.com/Abdulmuiz_sanni'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Visit Abdulmuiz Ayomide’s Twitter profile'
          className='hover:text-fuchsia-400 transition-colors duration-200'
        >
          Twitter
        </Link>
      </div>

      {/* Structured Data for SEO */}
      <Script
        id='footer-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Abdulmuiz Ayomide',
            url: 'https://my-portfolio-website-zeta-eosin.vercel.app',
            jobTitle: 'Frontend Developer',
            sameAs: [
              'https://github.com/SanniAbdulmuiz',
              'https://linkedin.com/in/sanni-abdulmuiz',
              'https://x.com/Abdulmuiz_sanni',
            ],
          }),
        }}
      />
    </footer>
  )
}

export default Footer
