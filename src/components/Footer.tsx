import { Link, useNavigate } from "react-router-dom";
import { Github, Linkedin, ArrowRight, Instagram } from "lucide-react";
import { SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="bg-black border-t border-zinc-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">AYAAN.</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building digital experiences that blend aesthetic design with
              technical excellence.
            </p>

            <div className="flex gap-4 pt-2">
              <SocialIcon link="https://x.com/_4y4n" icon={<SiX size={18} />} />
              <SocialIcon link="https://github.com/MohdAyaanAnsari" icon={<Github size={18} />} />
              <SocialIcon link="https://www.linkedin.com/in/mohdayaanansari" icon={<Linkedin size={18} />} />
              <SocialIcon link="https://www.instagram.com/_4y4n" icon={<Instagram size={18} />} />
            </div>
          </div>

          {/* Column 2 */}
          <div className="md:border-l border-gray-800 md:pl-12 space-y-6">
            <h3 className="text-lg font-semibold uppercase tracking-widest text-gray-500">
              Contact
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400">Email</p>
                <p className="font-medium">4y4n4ns4ri@gmail.com</p>
              </div>

              <div>
                <p className="text-gray-400">Location</p>
                <p className="font-medium">Kashipur, Uttarakhand, India</p>
              </div>

              {/* React Router Navigation */}
              <button
                onClick={() => navigate("/resume")}
                className="cursor-pointer group flex items-center gap-2 text-sm font-bold mt-4 hover:text-white text-gray-400 transition-colors"
              >
                VIEW RESUME
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold uppercase tracking-widest text-gray-500">
              Sitemap
            </h3>

            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© {year} Mohd Ayaan Ansari</p>
          <p className="text-[10px]">Designed By: Ayaan</p>
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
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 text-gray-400 hover:border-white hover:text-white transition-all"
    >
      {icon}
    </a>
  );
}