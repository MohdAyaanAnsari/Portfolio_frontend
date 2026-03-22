import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#000000] backdrop-blur border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <Link to="/" className="flex gap-1 text-white font-semibold text-lg tracking-wide">
            <img src="/logo.png" alt="" width="30" />Ayaan
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "hover:text-white transition"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/contact"
              className="hidden md:block text-xs px-4 py-1.5 rounded-md border border-white/20 text-white hover:bg-white/10 transition"
            >
              Contact
            </NavLink>

            {/* Mobile Toggle */}
            <button
              onClick={toggleSidebar}
              className="md:hidden cursor-pointer text-white p-1 hover:bg-white/10 rounded-md transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-black border-l border-white/10 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6 gap-6">
          
          <div className="flex justify-between items-center">
            <span className="text-white flex gap-1 font-bold text-2xl">
              <img src="/logo.png" alt="" width="30" />Ayaan
            </span>
            <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col justify-between h-full pt-4">
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-medium"
                      : "text-gray-300 text-sm hover:text-white transition"
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div>
              <hr className="border-white/10 my-2" />
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition"
              >
                Contact
              </NavLink>
            </div>

          </nav>
        </div>
      </aside>
    </>
  )
}