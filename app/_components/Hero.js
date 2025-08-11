import Button from "./Button";

function Hero() {
  return (
    <div>
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
        <a
          href="#projects"
          className="bg-pink-500 hover:bg-fuchsia-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-fuchsia-500/50 transition duration-300"
        >
          View my work
        </a>

        <Button />
      </div>
    </div>
  );
}

export default Hero;
