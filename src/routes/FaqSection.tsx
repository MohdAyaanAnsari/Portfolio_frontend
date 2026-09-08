import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqData = [
  {
    question: "Who are you, and what do you do?",
    answer: "I'm a Software developer and designer who builds high-performance web applications and interfaces that people actually enjoy using. I own the process end-to-end, from architecture to pixel-perfect execution."
  },
  {
    question: "What services do you provide?",
    answer: "I deliver custom web development, UI/UX design, performance optimization, and API integrations."
  },
  {
    question: "What technologies do you work with?",
    answer: "My core stack is React, TypeScript, and Tailwind CSS on the frontend, backed by Node.js, MongoDB, and MySQL. I choose the right tool for the job, not just the familiar one."
  },
  {
    question: "How do you approach a new project?",
    answer: "Every project follows a disciplined process: discovery and strategy, wireframing, design, development, and rigorous testing. Nothing ships until it meets my standard, not just yours."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Absolutely. I run a full audit of your current site, identify what's holding it back, and rebuild it with modern architecture and user flows that convert."
  },
  {
    question: "How can I collaborate with you on a project?",
    answer: "Reach out through the contact form below or email me directly to schedule a discovery call. I take on select projects, so let's talk about whether it's the right fit."
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="font-poppins w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Frequently Asked <span className="bg-gradient-to-b from-white via-white to-gray-300 bg-clip-text text-transparent">Questions</span>
        </h2>

        <p className="text-gray-300 mt-3 sm:mt-4 max-w-xl text-xs sm:text-base font-light">
          Everything you need to know about working with me and my process.
        </p>
      </motion.div>

      {/* Grid Container - Added items-start to prevent row stretching */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start"
      >
        {faqData.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/20 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.15)] overflow-hidden transition-all duration-300"
            >
              {/* Gloss Highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full cursor-pointer flex items-center justify-between p-4 sm:p-6 text-left transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold text-white tracking-tight pr-3 leading-snug">
                  {item.question}
                </span>

                {/* Rotating Icon */}
                <div
                  className={`p-1.5 rounded-full bg-white/10 border border-white/15 text-white shrink-0 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"
                  }`}
                >
                  <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </button>

              {/* Hardware-Accelerated Smooth CSS Grid Accordion */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 border-t border-white/10 mt-1">
                    <p className="pt-3 text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}