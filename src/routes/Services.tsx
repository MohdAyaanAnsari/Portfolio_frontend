import { useLayoutEffect, useState } from "react";
import type { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Database, Paintbrush, ArrowRight, X, CheckCircle2, Zap } from "lucide-react";

interface Service {
  title: string;
  icon: JSX.Element;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  workflow: string[];
}

const services: Service[] = [
  {
    title: "Front-End Development",
    icon: <Monitor className="text-zinc-400" size={32} />,
    tagline: "Client-Side Excellence",
    description: "Building responsive, interactive, and highly optimized user interfaces using modern frameworks.",
    longDescription: "I specialize in creating high-performance web applications that provide a seamless user experience. My approach combines aesthetic precision with technical performance, ensuring that every pixel serves a purpose and every interaction feels natural.",
    features: ["Single Page Applications (SPA)", "Responsive & Adaptive Design", "Web Performance Optimization", "SEO Friendly Architecture"],
    techStack: ["React.jS",  "TypeScript", "BootStrap", "Tailwind CSS",],
    workflow: ["Requirement Analysis", "Component Architecture", "State Management", "Final Deployment"]
  },
  {
    title: "Back-End Development",
    icon: <Database className="text-zinc-400" size={32} />,
    tagline: "Robust Server Logic",
    description: "Developing secure, scalable server-side architectures and efficient database management systems.",
    longDescription: "The backbone of your application needs to be resilient. I build scalable server environments and secure APIs that handle complex data workflows, high traffic loads, and seamless third-party integrations.",
    features: ["RESTful APIs", "Database Modeling & Migration", "Authentication & JWT Security", "Server-Side Logic"],
    techStack: ["Node.js", "Express", "MySQL", "Mongo DB"],
    workflow: ["Schema Design", "API Development", "Security Auditing", "Scaling & Optimization"]
  },
  {
    title: "UI/UX Design",
    icon: <Paintbrush className="text-zinc-400" size={32} />,
    tagline: "Visual Storytelling",
    description: "Crafting intuitive and visually compelling experiences focused on user-centric design principles.",
    longDescription: "Design is more than aesthetics; it's about solving user problems. I create comprehensive design systems, user journeys, and prototypes that ensure your product is both beautiful and functional.",
    features: ["Wireframing & Prototyping", "User Journey Mapping", "Design Systems (Atomic Design)", "Brand Identity"],
    techStack: ["Figma", "Canva",],
    workflow: ["Discovery & Research", "Moodboarding", "Iterative Prototyping", "Developer Handoff"]
  },
];



export default function DetailedServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  useLayoutEffect(() => {
      document.title = "Services | Ayaan | Portfolio";
    }, []);

  return (
    <section className="max-w-7xl mx-auto py-10 px-6 text-white">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="mb-10">
            <h2 className="text-5xl font-bold mb-6 tracking-tighter">My Services.</h2>
            <p className="text-zinc-400 max-w-2xl leading-relaxed font-light">
              I blend aesthetic precision with functional logic to build high-performance web applications.
              From intuitive interfaces to robust architecture, I deliver seamless, end-to-end digital experiences.
            </p>
          </div>
        </motion.div>

        {/* --- OUTER CARDS --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-4xl transition-all duration-500 cursor-pointer"
            >
              <div className="p-8 rounded-[1.9rem] h-full flex flex-col border border-zinc-900 overflow-hidden relative">
                {/* Decorative background element */}
                <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  {service.icon}
                </div>

                <div className="mb-8 p-4 bg-zinc-900/50 rounded-2xl w-fit border border-zinc-800 group-hover:scale-110 group-hover:border-zinc-500/50 transition-all">
                  {service.icon}
                </div>

                <div className="mb-2">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{service.tagline}</span>
                  <h3 className="text-2xl font-bold mt-1 group-hover:text-zinc-300 transition-colors tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed mb-8 grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-medium">
                      <Zap size={12} className="text-zinc-600" />
                      {feature}
                    </div>
                  ))}
                </div>



                <div className="flex items-center justify-center  border-t border-zinc-900">
                  <span className=" flex gap-2 pt-5 text-sm font-bold text-zinc-300 uppercase group-hover:text-white transition-colors">Explore Detail <ArrowRight size={13} /> </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- DETAILED POP-UP --- */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Common Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 z-100 bg-black/90 backdrop-blur-md"
            />

            {/* --- DESKTOP POPUP (Hidden on Mobile) --- */}
            <motion.div
              // Initial state: centered on X, but slightly lower and transparent
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
              // Animate to: dead center (X: -50%, Y: -50%)
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-110 top-1/2 left-1/2 hidden md:flex w-[90%] max-w-5xl bg-zinc-900 border border-zinc-800 rounded-[3rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Left Column: Visual Identity & Workflow */}
              <div className="w-[38%] p-10 lg:p-14 border-r bg-black border-zinc-800/50 flex flex-col">

                <div className="grow">
                  <div className="flex items-start justify-start gap-3">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="p-3 rounded-2xl w-fit border border-zinc-800 mb-8 shadow-inner"
                    >
                      {selectedService.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold tracking-tighter leading-[0.9] mb-6 text-white">
                      {selectedService.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </h3>
                  </div>

                  <p className="text-zinc-400 leading-relaxed text-sm lg:text-base font-light max-w-70">
                    {selectedService.longDescription}
                  </p>
                </div>

                {/* Workflow Section with cleaner numbers */}
                <div className="pt-10 border-t border-zinc-800/80">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold mb-5">Our Process</h4>
                  <div className="space-y-4">
                    {selectedService.workflow.map((w, i) => (
                      <div key={i} className="flex items-center gap-4 text-[11px] text-zinc-400 group">
                        <span className="font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors">0{i + 1}</span>
                        <span className="tracking-wide uppercase group-hover:text-zinc-200 transition-colors">{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Content & CTA */}
              <div className="w-[62%] p-10 lg:p-14 overflow-y-auto custom-scrollbar relative">
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-8 right-8 p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full transition-all"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>

                <div className="space-y-12">
                  {/* Capabilities Section */}
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-px w-8 bg-zinc-800" />
                      <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-black whitespace-nowrap">Capabilities</h4>
                      <div className="h-px grow bg-zinc-800" />
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                      {selectedService.features.map((f, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + (i * 0.05) }}
                          className="flex items-start gap-3 text-sm text-zinc-300 list-none"
                        >
                          <CheckCircle2 size={16} className="text-zinc-700 mt-0.5" />
                          <span className="font-light">{f}</span>
                        </motion.li>
                      ))}
                    </div>
                  </section>

                  {/* Tech Stack Section with cleaner chips */}
                  <section>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-black mb-6">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.techStack.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-md rounded-md font-medium text-zinc-400 hover:text-white hover:border-zinc-600 transition-all cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>

            {/* --- MOBILE POPUP (Hidden on Desktop) --- */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed bottom-0 left-0 right-0 z-110  border-t border-zinc-800 rounded-t-4xl max-h-[85vh] flex flex-col shadow-2xl"
            >
              {/* Mobile Header Drag Bar */}
              <div className="flex justify-center p-3">
                <div className="w-12 h-1 bg-zinc-800 rounded-full" />
              </div>

              <div className="p-6 overflow-y-auto custom-scrollbar grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl">{selectedService.icon}</div>
                  <button onClick={() => setSelectedService(null)} className="p-2 text-zinc-500"><X size={24} /></button>
                </div>

                <h3 className="text-3xl font-bold italic tracking-tighter mb-4">{selectedService.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-8">{selectedService.longDescription}</p>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-black mb-4">Capabilities</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedService.features.map((f, i) => (
                        <div key={i} className="p-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-xs text-zinc-300 flex items-center gap-2">
                          <div className="h-1 w-1 bg-zinc-500 rounded-full" /> {f}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-black mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.techStack.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 bg-zinc-800 text-[9px] rounded-md font-bold text-zinc-400 border border-zinc-700 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}