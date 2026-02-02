function Button({ text, href, download = false, className = '' }) {
  return (
    <a
      href={href}
      download={download}
      className={`inline-block bg-pink-500 hover:bg-fuchsia-500 text-white font-semibold 
                  py-1.5 px-3 text-sm 
                  sm:py-2 sm:px-4 sm:text-base 
                  md:py-2 md:px-4 md:text-base 
                  lg:py-2.5 lg:px-6 lg:text-lg
                  rounded-lg shadow-md hover:shadow-fuchsia-500/50 
                  transition duration-300 whitespace-nowrap text-center ${className}`}
    >
      {text}
    </a>
  )
}

export default Button
