import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Briefcase, ArrowUpRight, Terminal, Palette } from "lucide-react";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { JSX } from "react";
import {
  SiHtml5,
  SiCss,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  useLayoutEffect(() => {
    document.title = "About | Ayaan | Portfolio";
  }, []);

  const navigate = useNavigate();

  const skills = [
    "HTML5",
    "CSS3",
    "React.js",
    "Javascript",
    "TypeScript",
    "BootStrap",
    "Tailwind CSS",
    "Mongo DB",
    "Express.js",
    "Node.js",
    "MySQL",
    "Git",
    "GitHub",
    "Canva",
    "VS Code",
    "Xampp",
  ];

  // Upgraded icon size to 20px
  const techIcons: Record<string, JSX.Element> = {
    HTML5: <SiHtml5 className="text-[#E34F26]" size={20} />,
    CSS3: <SiCss className="text-[#1572B6]" size={20} />,
    "React.js": <SiReact className="text-[#61DAFB]" size={20} />,
    Javascript: <SiJavascript className="text-[#F7DF1E]" size={20} />,
    TypeScript: <SiTypescript className="text-[#3178C6]" size={20} />,
    BootStrap: <SiBootstrap className="text-[#7952B3]" size={20} />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" size={20} />,
    "Mongo DB": <SiMongodb className="text-[#47A248]" size={20} />,
    "Express.js": <SiExpress className="text-white" size={20} />,
    "Node.js": <SiNodedotjs className="text-[#339933]" size={20} />,
    MySQL: <SiMysql className="text-[#4479A1]" size={20} />,
    Git: <SiGit className="text-[#F05032]" size={20} />,
    GitHub: <SiGithub className="text-white" size={20} />,
    Canva: <Palette className="text-[#00C4CC]" size={20} />,
    "VS Code": <Terminal className="text-[#007ACC]" size={20} />,
    Xampp: <Terminal className="text-orange-400" size={20} />,
  };

  return (
    <section className="w-full text-white py-10 px-6 font-poppins relative">
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* --- SECTION 1: HERO BIOGRAPHY GLASS HEADER --- */}
        <div className="relative rounded-[32px] bg-transparent border border-white/20 backdrop-blur-2xl p-8 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Top Gloss Highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10">
            <motion.h2
              variants={itemVariants}
              className="lg:col-span-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
            >
              Ayaan <span className="text-gray-400">Web</span> <br />
              <span className="text-white">Solutions.</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="lg:col-span-4 text-gray-300 text-sm sm:text-base leading-relaxed border-l border-white/20 pl-6 font-light"
            >
              Engineering high-performance web applications where elegance meets efficiency. Based in Kashipur, serving the global web.
            </motion.p>
          </div>
        </div>

        {/* --- SECTION 2: TRANSPARENT GLASS BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Academic Foundation Box */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl bg-transparent border border-white/20 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-gray-400 uppercase tracking-widest">
                <GraduationCap size={15} className="text-gray-300" />
                <span>Academic Foundation</span>
              </div>

              <div className="relative pl-4 border-l border-white/20">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                  <h4 className="text-white font-semibold text-lg">BCA Graduate</h4>
                  <p className="text-gray-400 font-mono text-xs mb-3">2025 — Present</p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                    Deep-dived into the core of Computer Science, mastering Algorithmic Logic, Data Structures, and Software Lifecycle Management.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Design Philosophy Box */}
          <motion.div
            variants={itemVariants}
            className="relative lg:col-span-2 rounded-3xl bg-transparent border border-white/20 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-gray-400 uppercase tracking-widest">
                <Briefcase size={15} className="text-gray-300" />
                <span>Design Philosophy</span>
              </div>

              <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-light">
                I don’t just "write code." I build <span className="text-white font-medium italic">experiences</span>.
                Specializing in the <span className="text-white border-b border-white/40 pb-0.5">MERN stack</span>,
                my focus remains on creating interfaces that are as psychologically intuitive as they are technically sound.
                Whether it’s a real-time dashboard or a creative platform, I prioritize speed, accessibility, and clean, maintainable architecture.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack Box with Scaled-Up Inner Skill Tiles */}
          <motion.div
            variants={itemVariants}
            className="relative lg:col-span-2 rounded-3xl bg-transparent border border-white/20 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.5)] space-y-6 overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            <div className="flex items-center gap-2 font-mono text-xs text-gray-400 uppercase tracking-widest">
              <Code2 size={15} className="text-gray-300" />
              <span>Tech Stack</span>
            </div>

            {/* Inner Skill Tiles - Increased Padding, Font Size, & Icon Size */}
           <div className="flex flex-wrap gap-2.5 sm:gap-3">
  {skills.map((skill) => (
    <div
      key={skill}
      className="flex items-center justify-center p-3 sm:px-5 sm:py-3 bg-transparent border border-white/20 hover:border-white/40 backdrop-blur-xl rounded-2xl transition-all duration-300 group cursor-default shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:scale-105"
    >
      {techIcons[skill] || null}
      <span className="hidden sm:inline text-gray-200 group-hover:text-white transition-colors text-sm font-semibold tracking-wide ml-2.5">
        {skill}
      </span>
    </div>
  ))}
</div>
          </motion.div>

          {/* Interactive Project Glass Box */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl bg-transparent border border-white/20 backdrop-blur-2xl aspect-square overflow-hidden group cursor-pointer hover:border-white/40 shadow-[0_16px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
            onClick={() => navigate("/Projects")}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-20" />

            {/* Background Image */}
            <img
              src="/Ayaan.png"
              alt="Portfolio Preview"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />

            {/* Glass Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            {/* Top Right Action Glass Lens */}
            <div className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-2xl group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
              <ArrowUpRight
                size={20}
                className="text-white group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </div>

            {/* Bottom Glass Text Container */}
            <div className="absolute bottom-0 inset-x-0 p-3 z-20  backdrop-blur-md">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Engineered Impact
              </h3>
              <p className="text-gray-300 text-xs font-light mt-1">
                Explore a curated selection of full-stack deployments and UI experiments.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}