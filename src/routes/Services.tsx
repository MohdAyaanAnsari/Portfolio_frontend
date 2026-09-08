import { useLayoutEffect, useState, useEffect } from "react";
import type { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Layout, Server, Figma, Cpu, Layers, Terminal } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFigma,
  SiCanvas,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";

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
    icon: <Layout className="text-cyan-300" size={28} />,
    tagline: "Client-Side Excellence",
    description: "Building responsive, interactive, and highly optimized user interfaces using modern frameworks.",
    longDescription: "I specialize in creating high-performance web applications that provide a seamless user experience. My approach combines aesthetic precision with technical performance, ensuring that every pixel serves a purpose and every interaction feels natural.",
    features: ["Single Page Applications (SPA)", "Responsive & Adaptive Design", "Web Performance Optimization", "SEO Friendly Architecture"],
    techStack: ["React.js", "TypeScript", "Bootstrap", "Tailwind CSS"],
    workflow: ["Requirement Analysis", "Component Architecture", "State Management", "Final Deployment"]
  },
  {
    title: "Back-End Development",
    icon: <Server className="text-orange-300" size={28} />,
    tagline: "Robust Server Logic",
    description: "Developing secure, scalable server-side architectures and efficient database management systems.",
    longDescription: "The backbone of your application needs to be resilient. I build scalable server environments and secure APIs that handle complex data workflows, high traffic loads, and seamless third-party integrations.",
    features: ["RESTful APIs", "Database Modeling & Migration", "Authentication & JWT Security", "Server-Side Logic"],
    techStack: ["Node.js", "Express", "MySQL", "MongoDB"],
    workflow: ["Schema Design", "API Development", "Security Auditing", "Scaling & Optimization"]
  },
  {
    title: "UI/UX Design",
    icon: <Figma className="text-purple-400" size={28} />,
    tagline: "Visual Storytelling",
    description: "Crafting intuitive and visually compelling experiences focused on user-centric design principles.",
    longDescription: "Design is more than aesthetics; it's about solving user problems. I create comprehensive design systems, user journeys, and prototypes that ensure your product is both beautiful and functional.",
    features: ["Wireframing & Prototyping", "User Journey Mapping", "Design Systems (Atomic Design)", "Brand Identity"],
    techStack: ["Figma", "Canva"],
    workflow: ["Discovery & Research", "Moodboarding", "Iterative Prototyping", "Developer Handoff"]
  },
];

export default function DetailedServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const techIcons: Record<string, JSX.Element> = {
    "React.js": <SiReact className="text-[#61DAFB]" size={15} />,
    React: <SiReact className="text-[#61DAFB]" size={15} />,
    TypeScript: <SiTypescript className="text-[#3178C6]" size={15} />,
    "Next.js": <SiNextdotjs className="text-white" size={15} />,
    JavaScript: <SiJavascript className="text-[#F7DF1E]" size={15} />,
    Bootstrap: <SiBootstrap className="text-[#7952B3]" size={15} />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" size={15} />,
    "Node.js": <SiNodedotjs className="text-[#339933]" size={15} />,
    Express: <SiExpress className="text-white" size={15} />,
    MySQL: <SiMysql className="text-[#4479A1]" size={15} />,
    MongoDB: <SiMongodb className="text-[#47A248]" size={15} />,
    Figma: <SiFigma className="text-[#F24E1E]" size={15} />,
    Canva: <SiCanvas className="text-[#00C4CC]" size={15} />,
  };

  useLayoutEffect(() => {
    document.title = "Services | Portfolio";
  }, []);

  // Lock background scrolling when modal is active
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const workflowCount = selectedService?.workflow?.length || 0;
  const featuresCount = selectedService?.features?.length || 0;

  return (
    <section className="max-w-7xl mx-auto py-5 sm:py-10 px-6 text-white relative font-poppins">
      <div className="mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white">
            My Services.
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed font-light text-xs sm:text-base">
            I blend aesthetic precision with functional logic to build high-performance web applications.
          </p>
        </motion.div>

        {/* --- SERVICE CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service)}
              className="group relative flex flex-col justify-between rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-3xl p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.06)] hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.08] transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35)] group-hover:scale-105 group-hover:bg-white/15 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light mb-8">
                  {service.description}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                <span className="tracking-widest uppercase text-[11px] font-medium">Explore More</span>
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-2xl group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.4)]">
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MACOS GLASS MODAL --- */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 font-poppins">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* macOS Glass Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#141415]/90 border border-white/20 backdrop-blur-3xl shadow-[0_16px_50px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.2)] overflow-hidden z-10 flex flex-col max-h-[85vh]"
            >
              {/* Top Gloss Highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

              {/* Fixed Header: macOS Controls */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.02] shrink-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 hover:opacity-80 transition cursor-pointer"
                    aria-label="Close modal"
                  />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 truncate max-w-[200px]">
                  <Terminal size={13} className="text-gray-400" />
                  <span>{selectedService.title}</span>
                </div>

                <div className="w-12" /> {/* Spacer to align title center */}
              </div>

              {/* Scrollable Content Container */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1 min-h-0 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {/* Hero Card */}
                <div className="relative p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/15 overflow-hidden">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-2xl shrink-0">
                      {selectedService.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 font-mono text-[10px] text-gray-300 tracking-wider uppercase font-semibold">
                      Production Ready
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                {/* Adaptive Execution Pipeline Grid */}
                <section>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">
                    <Cpu size={12} />
                    <span>Execution Pipeline</span>
                  </div>
                  <div
                    className={`grid gap-2.5 ${
                      workflowCount === 4
                        ? "grid-cols-3"
                        : workflowCount % 2 === 0
                        ? "grid-cols-2"
                        : "grid-cols-3"
                    }`}
                  >
                    {selectedService.workflow.map((step: string, i: number) => {
                      const isFourthInFour = workflowCount === 4 && i === 3;

                      return (
                        <div
                          key={i}
                          className={`p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between gap-2 ${
                            isFourthInFour ? "col-span-3 bg-gradient-to-r from-white/[0.06] to-white/[0.02]" : ""
                          }`}
                        >
                          <span className="font-mono text-[10px] font-bold text-gray-400">0{i + 1}</span>
                          <span className="text-xs text-gray-200 font-medium tracking-wide truncate">{step}</span>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Core Capabilities Bento Grid */}
                <section>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">
                    <Layers size={12} />
                    <span>Core Capabilities</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.features.map((feature: string, i: number) => {
                      const isOddCount = featuresCount % 2 !== 0;
                      const isFirstItemInOdd = isOddCount && i === 0;

                      return (
                        <div
                          key={i}
                          className={`p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3 backdrop-blur-md transition-colors ${
                            isFirstItemInOdd
                              ? "col-span-2 bg-gradient-to-r from-white/[0.06] to-white/[0.02]"
                              : "col-span-1"
                          }`}
                        >
                          <CheckCircle2 size={16} className="text-gray-300 shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-200 font-light leading-relaxed">{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Tech Stack */}
                <section className="pb-2">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">
                    Powered By
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.techStack.map((tech: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3.5 py-2 bg-white/[0.06] border border-white/15 text-xs rounded-xl font-medium text-gray-200 transition-all hover:border-white/30"
                      >
                        {techIcons?.[tech] || null}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}