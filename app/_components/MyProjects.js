import Image from "next/image";

import project1 from "@/public/project1.jpg";
import project2 from "@/public/project2.jpg";
import project3 from "@/public/project3.jpg";
import project4 from "@/public/project4.jpg";

function MyProjects() {
  return (
    <div>
      <h1>My projects</h1>
      <Image
        src={project1}
        className=""
        placeholder="blur"
        quality={80}
        alt=""
      />
      <p>The wild Oasis Website</p>
      <p>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views,{" "}
      </p>
      <h2>Technologies</h2>
      <div>
        {/* Style them with padding, boxshadow etc.*/}
        <p>Tailwind Css</p>
        <p>React</p>
        {/* A  styled link, call it "Live demo" Here's the link. "https://the-wild-oasis-website-three-chi.vercel.app/cabins"*/}
      </div>
    </div>
  );
}

export default MyProjects;
