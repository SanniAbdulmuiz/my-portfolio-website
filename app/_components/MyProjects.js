import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

import project1 from "@/public/project1.jpg";
import project2 from "@/public/project2.jpg";
import project3 from "@/public/project3.jpg";
import project4 from "@/public/project4.jpg";

const projects = [
  {
    title: "The Wild Oasis Website Admin Dashboard",
    description:
      "The Wild Oasis Admin Dashboard is a secure, staff-only management platform for overseeing all cabin operations. Admins can monitor, accept, or reject bookings, add or edit cabin listings, duplicate existing cabins, and manage staff access via email-based authentication.",
    image: project1,
    tech: [
      "React",
      "React-Router",
      "React-Query",
      "Styled Components",
      "Supabase",
    ],
    liveLink: "https://the-wild-oasis-admin-dashboard-eight.vercel.app/login",
  },
  {
    title: "The Wild Oasis Website",
    description:
      "The Wild Oasis is a full-featured cabin booking platform where users can browse luxury cabins, check real-time availability, make reservations, and manage their bookings — all in a seamless, mobile-friendly interface. Users are able to create and login into their account via Google authentication",
    image: project2,
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    liveLink: "https://the-wild-oasis-website-three-chi.vercel.app/",
  },
  {
    title: "Fast React Pizza",
    description:
      "Fast React Pizza is a dynamic online pizza ordering platform where customers can browse a variety of pizzas, add them to a cart, and prioritize orders for urgent delivery. Staff can efficiently track and manage orders by searching with a unique order ID.",
    image: project4,
    tech: ["React", "React-Router", "Redux", "Tailwind CSS"],
    liveLink: "https://fast-react-pizza-7iqm.vercel.app/",
  },
  {
    title: "Wurana",
    description:
      "Volunteered as a frontend contributor for Wurana, a decentralized talent marketplace that connects users with skilled craftspeople through secure smart contracts, escrow payments, and NFT-based reputation badges.",
    image: project3,
    tech: ["Typescript", "React", "React-Router", "Tailwind CSS"],
    liveLink: "#",
  },
];

function MyProjects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        My Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl overflow-hidden shadow-lg 
                       transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:from-purple-800/30 hover:to-blue-800/30"
          >
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                placeholder="blur"
                quality={80}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col h-full">
              <h2 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h2>

              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                {project.liveLink !== "#" ? (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-fuchsia-500 transition-colors duration-300"
                  >
                    Live Demo
                    <FiExternalLink className="w-4 h-4" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 text-green-400 font-semibold">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Ongoing
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
