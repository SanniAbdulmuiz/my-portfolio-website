import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiStyledcomponents,
  SiTailwindcss,
  SiReactrouter,
  SiReactquery,
} from "react-icons/si";
import { MdOutlineCompareArrows } from "react-icons/md";    

const stacks = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React.js", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  {
    name: "Context API",
    icon: MdOutlineCompareArrows,
    color: "text-green-400",
  },
  { name: "Redux", icon: SiRedux, color: "text-purple-500" },
  { name: "React Router", icon: SiReactrouter, color: "text-red-500" },
  { name: "React Query", icon: SiReactquery, color: "text-pink-500" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-400" },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    color: "text-pink-400",
  },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
];

function MyStack() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-100">
        My Stack
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stacks.map((tech) => (
          <div
            key={tech.name}
            className="group p-6 rounded-xl shadow-md bg-gradient-to-br from-blue-900/30 to-purple-900/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:from-fuchsia-500/20 hover:to-blue-500/20 flex flex-col items-center text-center"
          >
            <tech.icon
              className={`h-12 w-12 mb-4 ${tech.color} transition-transform duration-300 group-hover:scale-110`}
            />
            <p className="text-lg font-semibold text-white">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyStack;
