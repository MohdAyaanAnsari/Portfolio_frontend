import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { FileText, Download, Mail, MapPin,} from "lucide-react";
import { useLayoutEffect } from "react";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ResumePage() {
  useLayoutEffect(() => {
    document.title = "Resume | Ayaan | Portfolio";
  }, []);

  return (
    <section className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto"
      >
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mt-16">
          <MainContent />
          <Sidebar />
        </div>
      </motion.div>
    </section>
  );
}

function Header() {
  return (
    <motion.header
      variants={itemVariants}
      className="border-b border-zinc-800 pb-10"
    >
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Ayaan<span className="text-zinc-700">.cv</span>
          </h1>

          <p className="mt-3 text-zinc-400 text-sm uppercase tracking-[0.25em] font-mono">
            Full Stack Developer & UI Engineer
          </p>
        </div>

        <div className="flex flex-col gap-3 text-zinc-500 text-xs font-mono ">
          <span className="flex items-center gap-2">
            <Mail size={14} /> 4y4n4ns4ri@gmail.com
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={14} /> Kashipur, India
          </span>
        </div>
      </div>
    </motion.header>
  );
}

function MainContent() {
  return (
    <div className="md:col-span-8 space-y-16">
      <Section title="Professional Experience" icon={FileText}>
        <ResumeItem
          title="Software Developer"
          org="Zanthium Technosoft pvt ltd."
          date="2025 — 2026"
          points={[
            "Built responsive React interfaces.",
            "Architecting scalable MERN stack applications.",
            "Building animated UI using Framer Motion and Tailwind.",
          ]}
          />

        {/* <ResumeItem
          title="Frontend Intern"
          org="Web Solutions Agency"
          date="2023 — 2024"
          points={[
            "Optimizing MongoDB queries improving performance by 40%.",
            "Converted Figma UI into production code.",
            "Maintained CI/CD pipelines.",
          ]}
        /> */}
      </Section>

      <Section title="Education">
        <ResumeItem
          title="Bachelor of Computer Applications"
          org="Uttrakhand Open University"
          date="2025 - Present"
          points={[
            "Focused on Software Engineering and Full Stack Technologies",
          ]}
        />
      </Section>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="md:col-span-4 space-y-12 md:sticky md:top-24 h-fit">
      <Skills />
      <Tools />
      <DownloadButton />
    </aside>
  );
}

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: any;
  children: React.ReactNode;
}) {
  return (
    <motion.section variants={itemVariants}>
      <h3 className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-[0.35em] mb-8">
        {Icon && <Icon size={14} />}
        {title}
      </h3>

      <div className="space-y-8">{children}</div>
    </motion.section>
  );
}

function ResumeItem({
  title,
  org,
  date,
  points,
}: {
  title: string;
  org: string;
  date: string;
  points: string[];
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition"
    >
      <div className="flex justify-between mb-2">
        <h4 className="text-lg font-semibold">{title}</h4>
        <span className="text-xs text-zinc-600 font-mono">{date}</span>
      </div>

      <p className="text-zinc-500 text-xs uppercase font-mono tracking-widest mb-4">
        {org}
      </p>

      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="text-zinc-400 text-sm leading-relaxed">
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Skills() {
  const skills = [
    "HTML5", "CSS3", "ReactJS", "TypeScript", "BootStrap", "Tailwind CSS", "Mongo DB", "MySQL",
  ];

  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-zinc-500 mb-6">
        Tech Stack
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs font-mono uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Tools() {
  const tools = ["Git", "GitHub", "Canva", "VS Code", "Xampp"];

  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-zinc-500 mb-6">
        Tools
      </h3>
       <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 text-xs font-mono uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-md"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/docs/resume.pdf"
    link.download = "resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <motion.button
    onClick={handleDownload}
      variants={itemVariants}
      className="w-full py-4 cursor-pointer bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-200 transition"
    >
      <Download size={16} />
      Download Resume
    </motion.button>
  );
}
