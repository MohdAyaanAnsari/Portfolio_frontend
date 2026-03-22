import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Briefcase, Zap, ArrowUpRight } from "lucide-react";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ changed

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as const,
      staggerChildren: 0.1
    }
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
  const skills = ["HTML5", "CSS3", "ReactJS", "TypeScript", "BootStrap", "Tailwind CSS", "Mongo DB", "MySQL", "Git", "GitHub", "Canva", "VS Code", "Xampp"];

  return (
    <section className="w-full bg-[#050505] text-white py-10 px-6">
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* --- SECTION 1: HERO BIOGRAPHY --- */}
        <div className="border-b border-zinc-800/50 pb-16 mb-16">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <h4 className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">
              Defining the Digital Frontier
            </h4>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.h2 variants={itemVariants} className="lg:col-span-8 text-7xl md:text-8xl font-bold tracking-tighter leading-[0.85]">
              Ayaan <span className="text-zinc-700">Web</span> <br />
              <span className="text-zinc-200">Solutions.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="lg:col-span-4 text-zinc-500 text-lg leading-relaxed border-l border-zinc-800 pl-6">
              Engineering high-performance web applications where elegance meets efficiency. Based in Kashipur, serving the global web.
            </motion.p>
          </div>
        </div>

        {/* --- SECTION 2: THE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
              <GraduationCap size={14} /> Academic Foundation
            </div>
            <div className="relative pl-4 border-l border-zinc-800">
              <div className="mb-10 relative">
                <div className="absolute -left-5 top-1.5 w-2 h-2 rounded-full bg-gray-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <h4 className="text-white font-semibold text-lg">BCA Graduate</h4>
                <p className="text-gray-500/80 font-mono text-xs mb-2">2025 — Present</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Deep-dived into the core of Computer Science, mastering Algorithmic Logic, Data Structures, and Software Lifecycle Management.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Detailed Bio */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
              <Briefcase size={14} /> Design Philosophy
            </div>
            <p className="text-zinc-300 text-xl leading-relaxed font-light">
              I don’t just "write code." I build <span className="text-white font-medium italic">experiences</span>.
              Specializing in the <span className="text-white border-b border-gray-500">MERN stack</span>,
              my focus remains on creating interfaces that are as psychologically intuitive as they are technically sound.
              Whether it’s a real-time dashboard or a creative platform, I prioritize speed, accessibility, and clean, maintainable architecture.
            </p>
          </motion.div>

          {/* Tech Stack - Bento Style */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
              <Code2 size={14} /> Tech Stack
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div key={skill} className="px-5 py-3 bg-zinc-900/40 rounded-xl border border-zinc-800/50 hover:bg-zinc-900/50 hover:border-gray-400/50  transition-all group">
                  <span className="text-zinc-400 group-hover:text-white transition-colors text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Box - Accent Color */}
          <motion.div variants={itemVariants} className="bg-linear-to-br from-gray-200 to-gray-400 rounded-4xl p-8 flex flex-col justify-between group cursor-pointer hover:shadow-[0_20px_60px_rgba(161,161,170,0.1)] transition-all">
            <div className="flex justify-between items-start">
              <Zap size={32} className="text-black fill-black" />
              <ArrowUpRight size={24} className="text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Engineered Impact</h3>
              <p className="text-gray-800/80 text-sm mb-6">Explore a curated selection of full-stack deployments and UI experiments.</p>
              <div onClick={() => navigate("/Projects")} className="inline-block px-4 py-2 bg-black backdrop-blur-md rounded-lg text-xs font-bold text-white tracking-widest uppercase">
                Browse Portfolio
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}