import { Link, NavLink, useLocation } from 'react-router-dom'
import { Briefcase, FolderKanban, Home, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const location = useLocation()

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
  ]

  const mobileNavLinks = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/services", icon: Briefcase, label: "Services" },
    { to: "/projects", icon: FolderKanban, label: "Projects" },
    { to: "/about", icon: User, label: "About" },
  ]

  return (
    <>
      {/* Top Fixed Header */}
      <header className="font-poppins sticky top-0 z-50 bg-[#1e1e1e]/75 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5">

          {/* Left: Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-semibold text-sm tracking-wide hover:opacity-80 transition"
          >
            <span>Ayaan</span>
          </Link>

          {/* Center: Desktop Navigation Bar with Sliding Pill */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 shadow-inner relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 z-10 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabDesktop"
                      className="absolute inset-0 bg-white/20 rounded-full shadow-sm -z-10 border border-white/15"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </NavLink>
              )
            })}
          </div>

          {/* Right: Contact Button */}
          <NavLink
            to="/contact"
            className="text-xs px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium backdrop-blur-sm transition active:scale-95 shadow-sm"
          >
            Contact
          </NavLink>

        </nav>
      </header>

      {/* Floating Bottom Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 font-poppins pointer-events-auto">
        <div className="flex items-center gap-1.5 bg-[#1a1a1a]/85 backdrop-blur-2xl border border-white/15 rounded-full p-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative w-max">
          {mobileNavLinks.map((link) => {
            const isActive = location.pathname === link.to
            const Icon = link.icon

            return (
              <NavLink
                key={link.to}
                to={link.to}
                aria-label={link.label}
                className={`relative w-11 h-11 rounded-full transition-colors duration-200 z-10 flex items-center justify-center ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabMobile"
                    className="absolute inset-0 bg-white/20 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/30 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <Icon
                  size={18}
                  className={`transition-transform duration-200 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />
              </NavLink>
            )
          })}
        </div>
      </div>
    </>
  )
}