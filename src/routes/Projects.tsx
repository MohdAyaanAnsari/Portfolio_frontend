import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useLayoutEffect, useEffect, useState } from "react"
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

export default function AllProjectsPage() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useLayoutEffect(() => {
    document.title = "Projects | Ayaan | Portfolio"
  }, [])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        setProjects(data) // show all projects
      } catch (error) {
        console.error("Failed to fetch projects", error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-5 sm:py-10 relative overflow-hidden min-h-screen">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Full <span className="bg-gradient-to-b from-white via-white to-gray-300 bg-clip-text text-transparent">Portfolio</span>
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl text-xs sm:text-base font-light">
          An extended look at my work, experiments, and professional projects.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project._id}
            variants={item}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer rounded-3xl bg-white/[0.03] border border-white/20 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.2)] overflow-hidden transition-all duration-300 flex flex-col justify-between"
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

      {/* Bottom Navigation Callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 pt-12 border-t border-white/10 text-center"
      >
        <p className="text-gray-400 mb-6 font-light">Interested in working together?</p>

        <button
          onClick={() => navigate("/")}
          className="group relative cursor-pointer inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white/90 hover:bg-white text-black font-semibold text-sm transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.25)] border border-white/50 overflow-hidden"
        >
          <span className="relative z-10">Get In Touch</span>
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