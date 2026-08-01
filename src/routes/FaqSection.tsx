import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

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
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0f0f0f] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Animation */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-medium text-center mb-20 tracking-tight"
        >
          Frequently Asked <br /> Questions
        </motion.h2>

        {/* Grid with Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16"
        >
          {faqData.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="border-b border-zinc-800/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full cursor-pointer flex items-center justify-between py-7 text-left hover:text-zinc-400 transition-colors group"
              >
                <span className="text-lg font-light pr-4 leading-snug">
                  {item.question}
                </span>
                
                {/* Icon Rotation */}
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 45 : 0,
                    color: openIndex === index ? "#fff" : "#71717a" 
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Plus className="w-5 h-5 stroke-[1.5px]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-zinc-500 font-light leading-relaxed max-w-md">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;