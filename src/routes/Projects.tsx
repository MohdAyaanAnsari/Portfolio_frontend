import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { useLayoutEffect, useEffect, useState } from "react"
import { getProjects, type Project} from "../api/projects"

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
    <section className="w-full max-w-7xl mx-auto px-6 py-10 min-h-screen">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-5xl font-bold text-white">
          Full Portfolio
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl">
          An extended look at my work, experiments, and professional projects.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project._id}
            variants={item}
            whileHover={{ y: -8 }}
            className="group overflow-hidden backdrop-blur-lg hover:border-white/20 transition"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="py-6 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => window.open(project.live, "_blank")}
                  className="px-5 py-2 text-sm rounded-lg border border-white/20 text-white hover:bg-white hover:text-black cursor-pointer transition font-medium"
                >
                  View Demo
                </button>

                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="px-5 py-2 text-sm rounded-lg bg-white text-black hover:bg-black hover:text-white cursor-pointer border border-white/20 transition"
                >
                  Repo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-2 pt-12 border-t border-white/10 text-center"
      >
        <p className="text-gray-500 mb-6">Interested in working together?</p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
        >
          Get In Touch
        </button>
      </motion.div>

    </section>
  )
}