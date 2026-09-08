import { Link, useNavigate } from "react-router-dom";
import { Github, Linkedin, ArrowRight, Instagram, Command } from "lucide-react";
import { SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const sitemapLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
  ];

  return (
    <footer className="relative  backdrop-blur-3xl border-t border-white/10 text-white pt-16 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Brand & Social Dock */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold tracking-tight text-white">AYAAN</h2>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                Building digital experiences that blend aesthetic design with technical excellence.
              </p>
            </div>

            {/* Liquid Glass Social Dock */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-poppins mb-2.5 block">
                Connect
              </span>
              <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-inner">
                <SocialIcon link="https://x.com/ayaandotcom" icon={<SiX size={15} />} />
                <SocialIcon link="https://github.com/MohdAyaanAnsari" icon={<Github size={15} />} />
                <SocialIcon link="https://www.linkedin.com/in/mohdayaanansari" icon={<Linkedin size={15} />} />
                <SocialIcon link="https://www.instagram.com/ayaanbitstream" icon={<Instagram size={15} />} />
              </div>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold font-poppins pb-4 border-b border-white/10">
                Contact
              </h3>

              <div className="space-y-4 pt-4 text-xs">
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium text-white/90">ayaan.devmail@gmail.com</p>
                </div>

                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="font-medium text-white/90">Uttarakhand, India</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/resume")}
              className="cursor-pointer group flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-200 active:scale-[0.98]"
            >
              <span>VIEW RESUME</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Column 3: Sitemap */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold font-poppins pb-4 border-b border-white/10">
                Sitemap
              </h3>

              {/* Glass Tiles Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-4">
                {sitemapLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="group flex items-center justify-between px-3.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-300 hover:text-white transition-all duration-200 active:scale-95"
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white/60" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/40 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-gray-500 uppercase tracking-widest font-poppins">
          <p>© {year} MOHD AYAAN ANSARI</p>
          <p className="text-[10px]">DESIGNED BY AYAAN</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, link }: { icon: React.ReactNode; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-gray-300 hover:text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
    >
      {icon}
    </a>
  );
}