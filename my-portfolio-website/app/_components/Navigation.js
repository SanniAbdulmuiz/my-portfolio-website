'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import Logo from './Logo'
import Button from './Button'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <div className='flex items-center gap-3 sm:gap-4'>
      {/* Desktop Navigation */}
      <nav className='hidden lg:block z-10 text-base lg:text-xl' aria-label='Main navigation'>
        <ul className='flex gap-6 lg:gap-10 items-center'>
          <li>
            <Link
              href='https://github.com/SanniAbdulmuiz'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visit my GitHub profile'
              className='flex items-center gap-2 text-white hover:text-fuchsia-500 transition-colors duration-300'
            >
              <FaGithub size={22} aria-hidden='true' />
              <span>GitHub</span>
            </Link>
          </li>
          <li>
            <Link
              href='https://x.com/Abdulmuiz_sanni'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow me on X (formerly Twitter)'
              className='flex items-center gap-2 text-white hover:text-fuchsia-500 transition-colors duration-300'
            >
              <FaTwitter size={22} aria-hidden='true' />
              <span>X</span>
            </Link>
          </li>
          <li>
            <Link
              href='https://linkedin.com/in/sanni-abdulmuiz'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Connect with me on LinkedIn'
              className='flex items-center gap-2 text-white hover:text-fuchsia-500 transition-colors duration-300'
            >
              <FaLinkedin size={22} aria-hidden='true' />
              <span>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link
              href='mailto:ayomideabdulmuiz565@gmail.com'
              aria-label='Send me an email'
              className='flex items-center gap-2 text-white hover:text-fuchsia-500 transition-colors duration-300'
            >
              <FaEnvelope size={22} aria-hidden='true' />
              <span>Email</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className='lg:hidden z-20 flex items-center'>
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className='text-white focus:outline-none p-2 rounded hover:bg-gray-800 transition'
        >
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        ref={menuRef}
        role='dialog'
        aria-modal='true'
        aria-label='Mobile navigation menu'
        className={`fixed top-0 left-0 w-full h-[55vh] bg-gray-900 transform ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } transition-all duration-500 ease-in-out z-30 lg:hidden shadow-lg rounded-b-2xl flex flex-col`}
      >
        <div className='flex items-center justify-between px-6 py-4 border-b border-primary-700'>
          <Logo />
          <button
            onClick={toggleMenu}
            aria-label='Close mobile menu'
            className='text-white hover:text-fuchsia-500 transition-colors duration-300'
          >
            <HiX size={28} />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className='flex flex-col gap-5 px-6 py-6 flex-1 justify-start'>
          <li>
            <Link
              href='https://github.com/SanniAbdulmuiz'
              onClick={toggleMenu}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visit my GitHub profile'
              className='flex items-center gap-3 text-lg text-white hover:text-fuchsia-500 transition-colors duration-300'
            >
              <FaGithub size={22} aria-hidden='true' />
              <span>GitHub</span>
            </Link>
          </li>
          <li>
            <Link
              href='https://x.com/Abdulmuiz_sanni'
              onClick={toggleMenu}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow me on X'
              className='flex items-center gap-3 text-lg text-white hover:text-fuchsia-500 transition-colors duration-300'
            >
              <FaTwitter size={22} aria-hidden='true' />
              <span>X</span>
            </Link>
          </li>
          <li>
            <Link
              href='https://linkedin.com/in/sanni-abdulmuiz'
              onClick={toggleMenu}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Connect with me on LinkedIn'
              className='flex items-center gap-3 text-lg text-white hover:text-fuchsia-500 transition-colors duration-300'
            >
              <FaLinkedin size={22} aria-hidden='true' />
              <span>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link
              href='mailto:ayomideabdulmuiz565@gmail.com'
              onClick={toggleMenu}
              aria-label='Send me an email'
              className='flex items-center gap-3 text-lg text-white hover:text-fuchsia-500 transition-colors duration-300'
            >
              <FaEnvelope size={22} aria-hidden='true' />
              <span>Email</span>
            </Link>
          </li>
        </ul>

        {/* Resume Button */}
        <div className='px-6 pb-6'>
          <Button text='Download Resume' href='/resume.pdf' download='Abdulmuiz_Resume.pdf' />
        </div>
      </div>

      {/* Desktop Resume Button */}
      <div className='hidden lg:block'>
        <a
          href='/resume.pdf'
          download='Abdulmuiz_Resume.pdf'
          className='inline-block bg-pink-500 hover:bg-fuchsia-500 text-white font-semibold 
                 py-1.5 px-3 text-sm 
                 sm:py-2 sm:px-4 sm:text-base 
                 md:py-2 md:px-4 md:text-base 
                 lg:py-2.5 lg:px-6 lg:text-lg
                 rounded-lg shadow-md hover:shadow-fuchsia-500/50 
                 transition duration-300 whitespace-nowrap'
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Navigation
