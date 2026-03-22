import { MapPin } from "lucide-react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPhp,
} from "react-icons/fa"

import { SiExpress, SiMongodb, SiMysql, SiCanva, SiTailwindcss } from "react-icons/si"
import { useNavigate } from "react-router-dom" // ✅ changed

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function HeroSection() {
  const tech = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "ReactJS", icon: FaReact },
    { name: "Node", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "PHP", icon: FaPhp },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Canva", icon: SiCanva },
    { name: "Tailwind", icon: SiTailwindcss },
  ]

  const navigate = useNavigate()

  return (
    <main className="flex items-center justify-center px-6 py-0 md:py-10 lg:py-20">
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl rounded-3xl shadow-2xl px-8 py-5 md:py-10 lg:py-20 text-center relative overflow-hidden"
      >
        <div className="absolute top-20 xl:right-120 lg:right-80 md:right-60 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none -z-10" />

        <motion.p
          variants={item}
          className="flex justify-center items-center gap-2 text-sm text-gray-400 mb-3"
        >
          <MapPin size={20} /> Kashipur, Uttrakhand
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl font-bold text-white leading-tight"
        >
          I’m <span className="text-white">Ayaan</span>
          <br />
          Web Developer
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-7xl mx-auto text-gray-400 mt-6 text-sm sm:text-base"
        >
          I transform ideas into modern, high-performance web experiences that elevate your brand and create a strong presence in the digital world.
        </motion.p>

        <motion.div
          variants={item}
          className="flex justify-center gap-4 mt-8 flex-wrap"
        >
          {/* ✅ changed navigation syntax */}
          <button
            onClick={() => navigate("/resume")}
            className="px-6 py-2.5 rounded-lg cursor-pointer bg-white text-black font-semibold hover:opacity-90"
          >
            View Resume
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="cursor-pointer px-6 py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/10"
          >
            See my work
          </button>
        </motion.div>

        {/* rest unchanged */}
        <motion.div variants={item} className="mt-14">
          <p className="text-gray-400 text-sm mb-4">Technologies I use</p>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-2 md:w-20 bg-linear-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-2 md:w-20 bg-linear-to-l from-black to-transparent z-10" />

            <motion.div
              className="flex gap-3 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
            >
              {[...tech, ...tech].map((techItem, i) => {
                const Icon = techItem.icon

                return (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-1.5 md:px-4 py-1.5 rounded-md text-xs bg-white/5 border border-white/10 text-gray-200 whitespace-nowrap backdrop-blur-sm"
                  >
                    <Icon className="text-sm opacity-80" />
                    <div className="hidden md:block">
                      {techItem.name}
                    </div>
                  </span>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  )
}