import { Monitor, Database, Brush, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useNavigate } from "react-router-dom"

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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function ServicesSection() {
  const navigate = useNavigate()

  const services = [
    {
      title: "Front-End Development",
      description:
        "Building responsive, interactive, and optimized web applications using modern frameworks like React.",
      icon: Monitor,
    },
    {
      title: "Back-End Development",
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
    <section className="font-poppins relative px-6 py-16 md:py-24 overflow-hidden">
      {/* Content Wrapper */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto relative z-10"
      >
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Content & Liquid Button */}
          <motion.div variants={item} className="md:col-span-5 space-y-6">

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              My <span className="bg-gradient-to-b from-white via-white to-gray-300 bg-clip-text text-transparent">Services.</span>
            </h2>

            <p className="text-gray-300 text-xs sm:text-base leading-relaxed font-light max-w-lg">
              Explore my range of services designed to blend aesthetic design with technical excellence, creating functional web architectures tailored to your needs.
            </p>

            {/* Liquid Glass Primary Button */}
            <button
              onClick={() => navigate("/services")}
              className="group relative cursor-pointer inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-white/90 hover:bg-white text-black font-semibold text-sm transition-all duration-300 active:scale-95  border border-white/50 overflow-hidden"
            >
              <span className="relative z-10">Explore All</span>
              <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </button>
          </motion.div>

          {/* Right Column - Desktop Stacked / Mobile Horizontal Carousel */}
          <motion.div
            variants={container}
            className="md:col-span-7 flex md:flex-col overflow-x-auto md:overflow-visible gap-4 snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0"
          >
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  variants={item}
                  key={index}
                  className="relative min-w-[85%] sm:min-w-[70%] md:min-w-full snap-center p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/20 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-all duration-300 flex items-start gap-5 group overflow-hidden"
                >

                  <div className="hidden md:flex p-3.5 rounded-xl bg-white/[0.05] border border-white/20 text-white backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform shrink-0">
                    <Icon size={24} className="text-gray-200" />
                  </div>

                  <div className="flex-1 relative z-10">
                    <h3 className="text-lg font-semibold text-white mb-1.5 tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}