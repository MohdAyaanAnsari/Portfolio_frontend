import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  FolderGit2,
  Mail,
  MapPin,
  GraduationCap,
  Terminal,
  Sparkles,
  Globe,
  Lock,
  Key,
  Laptop,
  Server,
} from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiReact,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiCanvas,
} from "react-icons/si";
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

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 5 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25 } },
};

export default function ResumePage() {
  useLayoutEffect(() => {
    document.title = "Resume | Ayaan | Portfolio";
  }, []);

  return (
    <section className="min-h-screen text-white px-6 py-10 relative overflow-hidden ">
      {/* Background Liquid Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto relative z-10 space-y-10"
      >
        <Header />

        {/* 1. Full-width Experience Section at Top */}
        <div className="w-full">
          <ResumeItem
            Sectiontitle="Professional Experience"
            title="Software Developer"
            org="Zanthium Technosoft pvt ltd."
            date="2025 — 2026"
            points={[
              "Built and shipped 30+ full-stack features using React, TypeScript, Tailwind CSS, and Node.js, collaborating with a 2-3 person production team to deliver live application updates.",
              "Planned and implemented REST APIs and Socket.IO real-time features, enabling instant updates across the live application without page reloads.",
              "Managed and queried the data layer across 6-15 tables/collections spanning MySQL, PostgreSQL, and MongoDB, ensuring data consistency across relational and NoSQL systems.",
              "Integrated 2-3 third-party APIs via Axios and implemented client-side routing with TanStack Router, streamlining data flow between frontend and external services.",
            ]}
          />
        </div>

        {/* 2. Two-Column Layout Below */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Side: Education + Download Button */}
          <div className="md:col-span-6 space-y-10">
            <ResumeItem
              Sectiontitle="Education"
              title="Bachelor of Computer Applications"
              org="Uttrakhand Open University"
              date="2025 - Present"
              points={[
                "Focused on Software Engineering and Full Stack Technologies",
              ]}
            />
            <DownloadButton />
          </div>

          {/* Right Side: Tech Stack */}
          <div className="md:col-span-6">
            <TechStackMacWindow />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Header() {
  return (
    <motion.header
      variants={itemVariants}
      className="border-b border-white/10 pb-10"
    >
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Ayaan<span className="text-zinc-500">.cv</span>
          </h1>

          <p className="mt-3 text-zinc-400 text-sm uppercase tracking-[0.25em] font-mono">
            Software Developer & UI Engineer
          </p>
        </div>

        <div className="flex flex-col gap-3 text-zinc-400 text-xs font-mono">
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-zinc-300" /> ayaan.devmail@gmail.com
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-zinc-300" /> India
          </span>
        </div>
      </div>
    </motion.header>
  );
}

function ResumeItem({
  Sectiontitle,
  title,
  org,
  date,
  points,
}: {
  Sectiontitle: string;
  title: string;
  org: string;
  date: string;
  points: string[];
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden hover:border-white/25 transition-all duration-300"
    >
      {/* Top Specular Liquid Highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* macOS Window Title Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20" />
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-300 tracking-wider uppercase font-medium">
          <FolderGit2 size={13} className="text-zinc-400" />
          <span>{Sectiontitle}</span>
        </div>

        <div className="font-mono text-[11px] text-zinc-400 font-medium">
          <span>{date}</span>
        </div>
      </div>

      {/* macOS Window Body */}
      <div className="p-6 space-y-4">
        {/* Header Metadata */}
        <div>
          <h4 className="text-xl font-bold tracking-tight text-white">{title}</h4>
          <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mt-1">
            {org}
          </p>
        </div>

        {/* Content Bullet Points */}
        <ul className="space-y-3 pt-2">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5 text-zinc-300 text-sm leading-relaxed font-light">
              <span className="text-emerald-400 font-mono font-bold text-xs mt-0.5 select-none">
                &gt;
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function TechStackMacWindow() {
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
    { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "BootStrap", icon: SiBootstrap, color: "text-[#7952B3]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Mongo DB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "Express.js", icon: SiExpress, color: "text-zinc-100" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]" },
    { name: "Authentication", icon: Lock, color: "text-amber-400" },
    { name: "JWT", icon: Key, color: "text-pink-500" },
    { name: "Rest API's", icon: Globe, color: "text-emerald-400" },
  ];

  const tools = [
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "GitHub", icon: SiGithub, color: "text-zinc-100" },
    { name: "Canva", icon: SiCanvas, color: "text-[#00C4CC]" },
    { name: "VS Code", icon: Laptop, color: "text-[#007ACC]" },
    { name: "Xampp", icon: Server, color: "text-[#FB7A24]" },
  ];

  return (
    <motion.div
      variants={itemVariants}
      className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
    >
      {/* Top Specular Liquid Highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* macOS Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center gap-2 w-12">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/20" />
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-300 tracking-wider uppercase font-medium">
          <Terminal size={12} className="text-zinc-400" />
          <span>tech_stack.config</span>
        </div>

        <div className="flex items-center justify-end w-12">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>
      </div>

      {/* macOS Window Body */}
      <div className="p-5 space-y-6">
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.span
                key={skill.name}
                variants={badgeVariants}
                whileHover={{ scale: 1.05, y: -1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-zinc-200 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-white/30 hover:text-white transition-all cursor-default"
              >
                <Icon className={`w-4 h-4 shrink-0 ${skill.color}`} />
                <span>{skill.name}</span>
              </motion.span>
            );
          })}
        </div>

        {/* Tools Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.span
                key={tool.name}
                variants={badgeVariants}
                whileHover={{ scale: 1.05, y: -1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-zinc-200 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-white/30 hover:text-white transition-all cursor-default"
              >
                <Icon className={`w-4 h-4 shrink-0 ${tool.color}`} />
                <span>{tool.name}</span>
              </motion.span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Ayaan.pdf";
    link.download = "Resume_Ayaan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full py-4 cursor-pointer bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-2  hover:bg-zinc-100 transition-all duration-300"
    >
      <Download size={16} />
      Download Resume
    </motion.button>
  );
}