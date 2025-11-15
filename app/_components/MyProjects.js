import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'

import project1 from '@/public/project1.jpg'
import project2 from '@/public/project2.jpg'
import project3 from '@/public/project4.jpg'

const projects = [
  {
    title: 'The Wild Oasis Admin Dashboard',
    description:
      'The Wild Oasis Admin Dashboard is a secure management platform for staff to oversee cabin operations. Admins can manage bookings, add or edit cabins, duplicate listings, and control staff access through email authentication.',
    image: project1,
    tech: ['React', 'React Router', 'React Query', 'Styled Components', 'Supabase'],
    liveLink: 'https://the-wild-oasis-admin-dashboard-eight.vercel.app/login',
  },
  {
    title: 'The Wild Oasis Website',
    description:
      'The Wild Oasis is a luxury cabin booking platform with real-time availability, Google authentication, and account management — optimized for performance and mobile responsiveness.',
    image: project2,
    tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
    liveLink: 'https://the-wild-oasis-website-three-chi.vercel.app/',
  },
  {
    title: 'Fast React Pizza',
    description:
      'Fast React Pizza is an interactive online ordering platform that lets users customize pizzas, track orders, and prioritize urgent deliveries. Staff can manage orders efficiently using unique IDs.',
    image: project3,
    tech: ['React', 'React Router', 'Redux', 'Tailwind CSS'],
    liveLink: 'https://fast-react-pizza-7iqm.vercel.app/',
  },
]

function MyProjects() {
  return (
    <section
      id='projects'
      aria-label='Portfolio projects by Abdulmuiz Ayomide'
      className='max-w-6xl mx-auto px-4 py-16'
    >
      <h2 className='text-4xl font-bold text-center mb-12 text-white'>My Projects</h2>

      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div key={project.title} className='flex flex-col h-full'>
            <article
              className='
                flex flex-col h-full
                bg-gradient-to-br 
                from-blue-900/30 to-purple-900/30 
                rounded-xl shadow-lg
                transition-all duration-500 
                hover:scale-105 hover:shadow-2xl 
              '
            >
              <div className='overflow-hidden rounded-t-xl'>
                <Image
                  src={project.image}
                  alt={project.title}
                  placeholder='blur'
                  quality={85}
                  className='w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-2xl font-semibold text-white mb-2'>{project.title}</h3>

                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>{project.description}</p>

                <ul className='flex flex-wrap gap-2 mb-6'>
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className='px-3 py-1 bg-white/10 text-gray-200 rounded-full text-xs'
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className='mt-auto pt-4'>
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-fuchsia-500 transition-colors duration-300'
                    >
                      Live Demo
                      <FiExternalLink className='w-4 h-4' />
                    </a>
                  ) : (
                    <div className='inline-flex items-center gap-2 text-green-400 font-semibold'>
                      <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                      Ongoing
                    </div>
                  )}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyProjects
