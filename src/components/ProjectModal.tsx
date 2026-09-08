import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import type { Project } from "../api/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock background scrolling when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [project])

  if (!project) return null

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 font-poppins">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 hover:opacity-80 transition cursor-pointer"
                  aria-label="Close modal"
                />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
              </div>

              <span className="text-xs font-poppins text-gray-400 truncate max-w-[200px]">
                {project.title}
              </span>

              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-1 rounded-full transition cursor-pointer"
                aria-label="Close"
              >
                {/* <X size={16} /> */}
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5 flex-1 min-h-0 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <div className="relative overflow-hidden rounded-2xl border border-white/15">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-72 object-cover"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>

                {/* Fixed-Height Scrollable Description Container (~5-6 lines) */}
                <div className="max-h-36 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Fixed Action Buttons Footer */}
            <div className="p-6 pt-4 border-t border-white/10 bg-[#141415]/95 backdrop-blur-xl shrink-0 flex gap-4">
              <button
                onClick={() => window.open(project.live, "_blank")}
                className="flex-1 cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/90 hover:bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.25)] border border-white/50"
              >
                <span>Live</span>
                <ExternalLink size={14} />
              </button>

              <button
                onClick={() => window.open(project.github, "_blank")}
                className="flex-1 cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/25 bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium text-xs tracking-wider uppercase backdrop-blur-xl transition-all duration-300 active:scale-95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
              >
                <Github size={14} />
                <span>Repository</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}