import AboutMe from './_components/AboutMe'
import ContactMe from './_components/ContactMe'
import Expertise from './_components/Expertise'
import Footer from './_components/Footer'
import Hero from './_components/Hero'
import MyProjects from './_components/MyProjects'
import MyStack from './_components/MyStack'
import Experience from './_components/Experience'

export default function Page() {
  return (
    <main className='mt-12 flex flex-col gap-20 px-4'>
      <section className='text-center max-w-2xl mx-auto'>
        <Hero />
      </section>

      <section className='text-center max-w-2xl mx-auto'>
        <AboutMe />
      </section>

      <section>
        <Expertise />
      </section>

      <section>
        <MyStack />
      </section>

      <section id='projects'>
        <MyProjects />
      </section>

      <section id='experience'>
        <Experience />
      </section>

      <section id='contact' className='text-center max-w-2xl mx-auto'>
        <ContactMe />
      </section>

      <footer className='text-center'>
        <Footer />
      </footer>
    </main>
  )
}
