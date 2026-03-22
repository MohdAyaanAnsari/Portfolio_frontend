import { useNavigate } from "react-router-dom" // ✅ changed
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { getProjects, type Project } from "../api/projects"

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
    <section className="w-full max-w-7xl mx-auto px-6 py-24">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-white">
          Projects I've Created
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl">
          Projects that highlight my skills in building modern web applications.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
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
              <h3 className="text-xl font-semibold text-white">
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

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-5"
      >
        <button
          onClick={() => navigate("/projects")} // ✅ fixed
          className="flex items-center px-4 py-2 rounded-lg cursor-pointer bg-white text-black font-semibold hover:opacity-90 transition"
        >
          View More Projects <ArrowRight />
        </button>
      </motion.div>

    </section>
  )
}