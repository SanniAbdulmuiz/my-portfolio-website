function Button() {
  return (
    <a
      href="/resume.pdf"
      download="Abdulmuiz_Resume.pdf"
      className="inline-block bg-pink-500 hover:bg-fuchsia-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-fuchsia-500/50 transition duration-300"
    >
      Download Resume
    </a>
  );
}

export default Button;
