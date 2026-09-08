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

import { SiExpress, SiMongodb, SiMysql, SiCanvas, SiTailwindcss } from "react-icons/si"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

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
    { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
    { name: "ReactJS", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Node", icon: FaNodeJs, color: "text-[#339933]" },
    { name: "Express", icon: SiExpress, color: "text-white" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-[#7952B3]" },
    { name: "PHP", icon: FaPhp, color: "text-[#777BB4]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
    { name: "Canva", icon: SiCanvas, color: "text-[#00C4CC]" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  ]

  const roles = [
    "Software Developer",
    "Full Stack Engineer",
    "UI/UX Designer",
  ]


  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)


  useEffect(() => {
    const currentRole = roles[textIndex]
    const speed = isDeleting ? 40 : 80 // Typing speed vs deleting speed

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Type characters one by one
        setDisplayText(currentRole.substring(0, displayText.length + 1))
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800) // Pause at full word
        }
      } else {
        // Erase characters
        setDisplayText(currentRole.substring(0, displayText.length - 1))
        if (displayText === "") {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % roles.length) // Next word
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex])

  const navigate = useNavigate()

  return (
    <main className="flex items-center justify-center px-4 md:px-6 py-6 md:py-10 lg:py-16">
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl rounded-3xl bg-white/[0.03] backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] px-6 md:px-8 py-6 md:py-10 lg:py-16 text-center relative overflow-hidden"
      >
        {/* macOS Traffic Light Window Controls */}
        <div className="absolute top-4 left-5 flex items-center gap-2 z-20">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 shadow-sm" />
        </div>

        {/* Liquid Glass Top Edge Gloss Highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

        {/* Ambient Liquid Glows */}
        <div className="absolute top-20 xl:right-120 lg:right-80 md:right-55 h-80 w-80 rounded-full bg-white/10 blur-[120px] pointer-events-none z-10" />

        <motion.p
          variants={item}
          className="flex justify-center items-center gap-2 text-sm text-gray-300 mb-3 pt-4 sm:pt-0"
        >
          <MapPin size={18} className="text-gray-300" /> India
        </motion.p>

        <motion.h1
          variants={item}
          className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight whitespace-nowrap"
        >
          I’m <span className="bg-gradient-to-b from-white via-white to-gray-300 bg-clip-text text-transparent">Ayaan</span>
          <br />
          <span className="inline-flex items-center text-gray-300 min-h-[1.2em]">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="inline-block w-[3px] h-[0.85em] bg-white ml-1 rounded-full align-baseline"
            />
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-3xl mx-auto text-gray-300 mt-6 text-sm sm:text-base leading-relaxed"
        >
          I transform ideas into modern, high-performance web experiences that elevate your brand and create a strong presence in the digital world.
        </motion.p>

        {/* Liquid Glass CTA Buttons */}
        <motion.div
          variants={item}
          className="flex justify-center gap-4 mt-8 flex-wrap"
        >
          <button
            onClick={() => navigate("/resume")}
            className="group relative cursor-pointer px-6 py-2.5 rounded-lg bg-white/90 hover:bg-white text-black font-semibold text-sm transition-all duration-300 active:scale-95  border border-white/50 overflow-hidden"
          >
            <span className="relative z-10">View Resume</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="group relative cursor-pointer px-6 py-2.5 rounded-lg border border-white/25 bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-medium backdrop-blur-xl transition-all duration-300 active:scale-95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_16px_rgba(0,0,0,0.2)] hover:border-white/40 overflow-hidden"
          >
            <span className="relative z-10">See my work</span>
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
          </button>
        </motion.div>

        <motion.div variants={item} className="mt-14">
          <p className="text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">Technologies I use</p>

          <div className="relative overflow-hidden">
            {/* Backdrop Blur Edge Overlays */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-20 backdrop-blur-md [mask-image:linear-gradient(to_right,black_20%,transparent_100%)] z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-20 backdrop-blur-md [mask-image:linear-gradient(to_left,black_20%,transparent_100%)] z-10" />

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
                    className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-xs bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 text-gray-200 whitespace-nowrap backdrop-blur-lg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-colors"
                  >
                    <Icon className={`text-base ${techItem.color}`} />
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