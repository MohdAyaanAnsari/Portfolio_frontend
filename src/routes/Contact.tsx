import { motion } from "framer-motion";
import { useLayoutEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // Add 'as const' right here
      ease: [0.215, 0.61, 0.355, 1] as const
    }
  },
};

export default function ContactSection() {
  useLayoutEffect(() => {
    document.title = "Contact | Ayaan | Portfolio";
  }, []);
  return (
    <section className="text-white flex justify-center items-start min-h-[60vh] py-10 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left Side: Content & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h4 className="text-gray-400 font-medium uppercase tracking-widest text-sm">
            Contact me
          </h4>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Get in touch.</h2>
          <p className="text-zinc-400 max-w-md leading-relaxed font-light">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Drop me a message and
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Right Side: Form */}
        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="relative">
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
              />
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="relative">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
              />
            </motion.div>
          </div>

          {/* Message Area */}
          <motion.div variants={itemVariants} className="relative">
            <textarea
              placeholder="Write your message here"
              rows={1}
              className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500 resize-none"
            />
          </motion.div>

          {/* Button Animation */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-white cursor-pointer text-black px-5 py-3 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>

      </div>
    </section>
  );
}
