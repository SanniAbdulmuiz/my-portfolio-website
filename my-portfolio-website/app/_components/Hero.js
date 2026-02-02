import Button from './Button'

function Hero() {
  return (
    <section
      id='hero'
      className='px-4 py-16 sm:px-8 md:px-16 lg:px-24'
      aria-label='Hero section introducing Abdulmuiz Ayomide'
    >
      <div className='max-w-5xl mx-auto text-center md:text-left'>
        <h3 className='text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 tracking-tight font-normal'>
          Hello! I&apos;m
        </h3>

        <h1 className='text-4xl sm:text-5xl md:text-6xl text-fuchsia-500 mb-6 tracking-tight font-bold'>
          Abdulmuiz Ayomide
        </h1>

        <h2 className='text-2xl sm:text-3xl md:text-4xl text-blue-50 mb-6 tracking-tight font-semibold'>
          Frontend Web Developer
        </h2>

        <p className='text-base sm:text-lg md:text-2xl text-blue-100 mb-8 tracking-tight font-medium max-w-3xl'>
          I craft engaging, high-performance web experiences using modern technologies — where clean
          code meets elegant design and purposeful innovation.
        </p>

        <div className='flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 sm:gap-6'>
          <Button text='View my work' />
          <Button text='Download Resume' href='/resume.pdf' download='Abdulmuiz_Resume.pdf' />
        </div>
      </div>
    </section>
  )
}

export default Hero
