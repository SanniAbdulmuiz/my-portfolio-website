// app/_components/Experience.tsx

export default function Experience() {
  const experiences = [
    {
      company: 'Farmilik',
      role: 'Web Developer',
      period: 'April 2025 - December 2025',
      achievements: [
        'Worked with the frontend and mobile development team across web and hybrid mobile platforms.',
        'Building fast, scalable, and secure user interfaces using React, React-Native, Next.js, and modern ui frameworks.',
        'Implementing mobile-first UI/UX patterns that increase user retention and improve overall usability.',
        'Collaborating closely with backend engineers, product designers, and cross-functional stakeholders to deliver features from concept to deployment.',
        'Developing new product features continuously while ensuring seamless user experiences and smooth onboarding for new users.',
        'Integrating APIs, authentication systems, and dynamic data workflows while maintaining responsive performance.',
        'Optimizing performance, accessibility, and platform reliability through iterative improvements and modern engineering practices.',
      ],
    },
    {
      company: 'OkeyMeta LTD',
      role: 'Frontend Developer',
      period: 'June 2024 - March 2025',
      achievements: [
        'Developed, maintained, and optimized the company website to align with evolving product requirements.',
        'Improved page performance and load time by implementing image optimization, code splitting, and efficient caching strategies.',
        'Enhanced user engagement and conversion rates by redesigning critical user flows and improving UI responsiveness.',
        'Collaborated closely with backend engineers and product stakeholders to deliver scalable, maintainable frontend features.',
        'Implemented accessibility best practices and SEO improvements to boost organic visibility.',
        'Delivered high-quality, reusable, and modular UI components using React and modern tooling.',
      ],
    },
  ]

  return (
    <section id='experience' className='max-w-5xl mx-auto px-4 py-12'>
      <h2 className='text-4xl font-bold text-center mb-12 text-white'>Professional Experience</h2>

      <div className='space-y-12'>
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className='
              bg-gradient-to-br from-blue-900/20 to-purple-900/20
              border border-white/10 rounded-2xl p-8 
              shadow-lg
            '
          >
            <header className='mb-6'>
              <h3 className='text-2xl font-semibold text-white'>{exp.role}</h3>
              <p className='text-pink-400 text-lg'>{exp.company}</p>
              <p className='text-gray-400 text-sm'>{exp.period}</p>
            </header>

            <ul className='space-y-3 list-disc list-inside text-gray-300 leading-relaxed'>
              {exp.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
