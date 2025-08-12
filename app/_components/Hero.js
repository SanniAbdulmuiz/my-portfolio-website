import Button from "./Button";

function Hero() {
  return (
    <section className="px-4 py-16 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 tracking-tight font-normal">
          Hello! I&apos;m,
        </h3>

        <h1 className="text-4xl sm:text-5xl md:text-6xl text-fuchsia-500 mb-6 tracking-tight font-bold">
          Abdulmuiz
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-50 mb-6 tracking-tight font-semibold">
          A Frontend Web Developer.
        </h2>

        <p className="text-base sm:text-lg md:text-2xl text-blue-100 mb-8 tracking-tight font-medium">
          I craft engaging, high-performance web experiences using modern
          technologies — where clean code meets elegant design and purposeful
          innovation.
        </p>

        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 sm:gap-6">
          <a
            href="#projects"
            className="bg-pink-500 hover:bg-fuchsia-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-fuchsia-500/50 transition duration-300"
          >
            View my work
          </a>
          <Button />
        </div>
      </div>
    </section>
  );
}

export default Hero;
