export const metadata = {
  title: 'About Me | Abdulmuiz Ayomide | Frontend Developer',
  description:
    'Learn more about Abdulmuiz Ayomide, a passionate frontend developer with 4+ years of experience building responsive, high-quality web applications using React, Next.js, and modern JavaScript technologies.',
  keywords: [
    'Abdulmuiz Ayomide',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer Nigeria',
    'JavaScript',
    'Portfolio',
  ],
  openGraph: {
    title: 'About Abdulmuiz Ayomide | Frontend Developer',
    description:
      'Frontend developer specializing in React and Next.js with 4+ years of experience crafting responsive, high-quality digital experiences.',
    url: 'https://my-portfolio-website-zeta-eosin.vercel.app/about',
    siteName: 'Abdulmuiz Ayomide Portfolio',
    images: [
      {
        url: 'https://my-portfolio-website-zeta-eosin.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdulmuiz Ayomide - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Abdulmuiz Ayomide | Frontend Developer',
    description:
      'Discover Abdulmuiz Ayomide’s journey and expertise in modern web development with React, Next.js, and TypeScript.',
    images: ['https://my-portfolio-website-zeta-eosin.vercel.app/og-image.jpg'],
  },
}

function AboutMe() {
  return (
    <div>
      <h3 className='text-4xl text-blue-100 mb-10 tracking-tight font-semibold'>About me</h3>

      <div className='space-y-6 text-blue-50 text-lg leading-relaxed'>
        <p>
          Hi, I&apos;m Abdulmuiz, a passionate Frontend Mobile and Web Developer with 4+ years of
          experience, dedicated to crafting clean, responsive, and visually engaging digital
          experiences. My journey into web development began with curiosity and a love for solving
          problems, which quickly evolved into a commitment to mastering modern web technologies.
        </p>

        <p>
          I specialize in <span className='text-yellow-400'>JavaScript</span>,{' '}
          <span className='text-blue-400'>TypeScript</span>,{' '}
          <span className='text-cyan-400'>React.js</span>,{' '}
          <span className='text-green-400'>React Native</span>,{' '}
          <span className='text-white'>Next.js</span>,{' '}
          <span className='text-green-400'>Context API</span>,{' '}
          <span className='text-purple-500'>Redux</span>,{' '}
          <span className='text-red-500'>React Router</span>,{' '}
          <span className='text-pink-400'>TanStack React Query</span>,{' '}
          <span className='text-orange-500'>HTML</span>, <span className='text-blue-500'>CSS</span>,{' '}
          <span className='text-pink-400'>Styled Components</span> and{' '}
          <span className='text-cyan-300'>Tailwind CSS</span>, with version control skills in{' '}
          <span className='text-orange-300'>Git</span> and{' '}
          <span className='text-gray-300'>GitHub</span>. I thrive on building user-friendly
          interfaces that balance aesthetics and functionality, ensuring every project delivers both
          style and purpose.
        </p>

        <p>
          Beyond coding, I&apos;m constantly exploring new tools, frameworks, and best practices to
          stay ahead in the ever-evolving web development landscape. My goal is simple — to
          transform ideas into seamless digital solutions that leave a lasting impact.
        </p>

        <p>Let&apos;s build something remarkable together.</p>
      </div>

      <a
        href='#contact'
        className='inline-block bg-pink-500 hover:bg-fuchsia-500 mt-8 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-fuchsia-500/50 transition duration-300'
      >
        Get in touch
      </a>
    </div>
  )
}

export default AboutMe
