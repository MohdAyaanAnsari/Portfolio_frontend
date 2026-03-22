import { Monitor, Database, Brush } from "lucide-react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useNavigate } from "react-router-dom" // ✅ changed

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function ServicesSection() {
  const navigate = useNavigate()

  const services = [
    {
      title: "Front-End Developement",
      description:
        "Building responsive, interactive, and optimized web applications using modern technologies like React.",
      icon: Monitor,
    },
    {
      title: "Back-End Developement",
      description:
        "Developing robust server-side applications, APIs, and databases that power scalable web platforms.",
      icon: Database,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually compelling user interfaces that enhance usability and engagement.",
      icon: Brush,
    },
  ]

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16"
    >
      {/* Left Side */}
      <motion.div variants={item}>
        <h2 className="text-4xl font-bold text-white mb-6">My Services</h2>

        <p className="text-gray-400 max-w-md mb-8">
          Explore my range of services designed to go beyond aesthetics.
          I craft visually appealing and fully functional websites tailored
          to your business needs.
        </p>

        <button
          onClick={() => navigate("/services")} // ✅ fixed
          className="px-6 py-2.5 cursor-pointer bg-white text-black rounded-lg font-semibold hover:opacity-90"
        >
          Learn More
        </button>
      </motion.div>

      {/* Right Side */}
      <motion.div variants={container} className="space-y-8">
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <motion.div
              variants={item}
              key={index}
              className="flex gap-4 border-b border-white/10 pb-6"
            >
              <div className="mt-1 text-gray-300">
                <Icon size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
}