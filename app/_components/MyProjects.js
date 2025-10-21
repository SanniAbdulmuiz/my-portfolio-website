import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

import project1 from '@/public/project1.jpg'
import project2 from '@/public/project2.jpg'
import project3 from '@/public/project3.jpg'
import project4 from '@/public/project4.jpg'

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
    image: project4,
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
          <article
            key={project.title}
            className='group bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:from-purple-800/30 hover:to-blue-800/30'
          >
            {/* Image Section */}
            <div className='overflow-hidden'>
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                placeholder='blur'
                quality={85}
                className='w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110'
              />
            </div>

            {/* Project Content */}
            <div className='p-6 flex flex-col h-full'>
              <h3 className='text-2xl font-semibold text-white mb-2'>{project.title}</h3>

              <p className='text-gray-300 text-sm mb-4 leading-relaxed'>{project.description}</p>

              <ul className='flex flex-wrap gap-2 mb-6' aria-label='Technologies used'>
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className='px-3 py-1 bg-white/10 text-gray-200 rounded-full text-xs'
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className='mt-auto'>
                {project.liveLink !== '#' ? (
                  <Link
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-fuchsia-500 transition-colors duration-300'
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo
                    <FiExternalLink className='w-4 h-4' />
                  </Link>
                ) : (
                  <div
                    className='inline-flex items-center gap-2 text-green-400 font-semibold'
                    aria-label={`${project.title} is currently ongoing`}
                  >
                    <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                    Ongoing
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MyProjects
