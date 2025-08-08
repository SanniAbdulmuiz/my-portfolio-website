export default function Page() {
  return (
    <main className="mt-12 max-w-2xl mx-auto flex flex-col gap-24 px-4">
      {/* Hero Section */}
      <section className="text-center">
        <h3 className="text-2xl text-blue-100 mb-10 tracking-tight font-normal">
          Hello! I&apos;m,
        </h3>
        <h1 className="text-6xl text-fuchsia-500 mb-10 tracking-tight font-bold">
          Abdulmuiz
        </h1>
        <h2 className="text-4xl text-blue-50 mb-10 tracking-tight font-semibold">
          A Frontend Web Developer.
        </h2>
        <p className="text-2xl text-blue-100 mb-10 tracking-tight font-medium">
          I craft engaging, high-performance web experiences using modern
          technologies — where clean code meets elegant design and purposeful
          innovation.
        </p>

        <div className="flex justify-center gap-10">
          <button className="bg-pink-500 hover:bg-fuchsia-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-fuchsia-500/50 transition duration-300">
            View my work
          </button>
          <button className="bg-pink-500 hover:bg-fuchsia-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-fuchsia-500/50 transition duration-300">
            Download Resume
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center">
        <h3 className="text-4xl text-blue-100 mb-10 tracking-tight font-semibold">
          About me
        </h3>

        <div className="space-y-6 text-blue-50 text-lg leading-relaxed">
          <p>
            Hi, I’m Abdulmuiz, a passionate Frontend Web Developer dedicated to
            crafting clean, responsive, and visually engaging digital
            experiences. My journey into web development began with curiosity
            and a love for solving problems, which quickly evolved into a
            commitment to mastering modern web technologies.
          </p>

          <p>
            I specialize in JavaScript, TypeScript, React.js, Next.js,
            ContextApi, Redux, HTML, CSS,Styled Component and Tailwind CSS, with
            version control skills in Git and GitHub. I thrive on building
            user-friendly interfaces that balance aesthetics and functionality,
            ensuring every project delivers both style and purpose.
          </p>

          <p>
            Beyond coding, I’m constantly exploring new tools, frameworks, and
            best practices to stay ahead in the ever-evolving web development
            landscape. My goal is simple — to transform ideas into seamless
            digital solutions that leave a lasting impact.
          </p>

          <p>Let’s build something remarkable together.</p>
        </div>
      </section>
    </main>
  );
}
