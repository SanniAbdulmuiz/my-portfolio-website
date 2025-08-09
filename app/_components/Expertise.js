import {
  CodeBracketIcon,
  PaintBrushIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  CloudIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const expertise = [
  {
    id: "01",
    title: "Frontend Web Development",
    caption:
      "Building responsive, performant, and maintainable web applications using modern technologies.",
    icon: CodeBracketIcon,
  },
  {
    id: "02",
    title: "UI/UX Design Implementation",
    caption:
      "Translating design concepts into pixel-perfect, user-friendly interfaces.",
    icon: PaintBrushIcon,
  },
  {
    id: "03",
    title: "Website Optimisation",
    caption:
      "Improving loading speed, accessibility, and SEO for a better user experience.",
    icon: BoltIcon,
  },
  {
    id: "04",
    title: "Bug Fixing & Code Refactoring",
    caption:
      "Identifying and resolving issues while enhancing code readability and maintainability.",
    icon: WrenchScrewdriverIcon,
  },
  {
    id: "05",
    title: "API Integration",
    caption:
      "Seamlessly connecting applications with backend services and third-party APIs.",
    icon: CloudIcon,
  },
  {
    id: "06",
    title: "Documentation",
    caption:
      "Writing clear, concise, and structured documentation for developers and users.",
    icon: DocumentTextIcon,
  },
];

export default function Expertise() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-100">
        Expertise
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item) => (
          <div
            key={item.id}
            className="group bg-blue-900/30 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/30"
          >
            <div className="flex items-center gap-4 mb-4">
              <item.icon className="h-8 w-8 text-fuchsia-500 transition-transform duration-300 group-hover:rotate-6" />
              <p className="text-lg font-bold text-blue-100">{item.id}</p>
            </div>
            <p className="text-xl font-semibold text-white mb-2">
              {item.title}
            </p>
            <p className="text-blue-200 leading-relaxed">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
