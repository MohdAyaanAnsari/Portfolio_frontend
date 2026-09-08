import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { getProjects, type Project } from "../api/projects"
import ProjectModal from "../components/ProjectModal"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function ProjectsSection() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        const latestProjects = data.slice(0, 3)
        setProjects(latestProjects)
      } catch (error) {
        console.error("Failed to fetch projects", error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section className="font-poppins w-full max-w-7xl mx-auto px-6 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Projects <span className="bg-gradient-to-b from-white via-white to-gray-300 bg-clip-text text-transparent">I've Created</span>
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl text-xs sm:text-base font-light">
          Projects that highlight my skills in building modern web applications.
        </p>
      </motion.div>

      {/* Mobile Horizontal Carousel / Desktop 3-Column Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0"
      >
        {projects.map((project) => (
          <motion.div
            key={project._id}
            variants={item}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer min-w-[85%] sm:min-w-[70%] md:min-w-full snap-center rounded-3xl bg-white/[0.03] border border-white/20 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.2)] overflow-hidden transition-all duration-300 flex flex-col justify-between"
          >
            {/* Liquid Edge Gloss Highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-20" />

            {/* Image Box */}
            <div className="relative p-3 pb-0">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 pt-4 flex flex-col justify-between flex-1 gap-4 relative z-10">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed font-light line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <button
          onClick={() => navigate("/projects")}
          className="group relative cursor-pointer inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/90 hover:bg-white text-black font-semibold text-sm transition-all duration-300 active:scale-95 border border-white/50 overflow-hidden"
        >
          <span className="relative z-10">View More Projects</span>
          <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </button>
      </motion.div>

      {/* Pop-up Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}