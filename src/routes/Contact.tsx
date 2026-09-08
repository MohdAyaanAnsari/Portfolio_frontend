import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { sendMessage } from "../api/messages";
import { toast } from "sonner";
import { Send, Mail, User, Phone, MessageSquare, Tag } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
};

export default function ContactSection() {
  useLayoutEffect(() => {
    document.title = "Contact | Ayaan | Portfolio";
  }, []);

  /* =========================
      State
  ========================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);

  /* =========================
      Validation Logic
  ========================= */
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\+?[0-9]{7,15}$/.test(phone.replace(/\s/g, ""));
  };

  const getFieldError = (key: string) => {
    if (!touched[key]) return "";
    const value = formData[key as keyof typeof formData].trim();

    if (value === "") return "Required field";
    if (key === "email" && !validateEmail(value)) return "Invalid email address";
    if (key === "phone" && !validatePhone(value)) return "Invalid phone number";

    return "";
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    validateEmail(formData.email) &&
    validatePhone(formData.phone) &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "";

  /* =========================
      Handlers
  ========================= */
  const handleChange = (key: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleBlur = (key: string) => {
    setTouched({ ...touched, [key]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || loading) return;

    try {
      setLoading(true);
      await sendMessage(formData);

      toast.success("Message sent successfully", {
        style: {
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          color: "#000000",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "16px",
          fontSize: "12px",
          fontWeight: "600",
          letterSpacing: "0.05em",
        },
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTouched({});
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message", {
        style: {
          background: "rgba(239, 68, 68, 0.9)",
          backdropFilter: "blur(12px)",
          color: "#ffffff",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "16px",
          fontSize: "12px",
          fontWeight: "600",
          letterSpacing: "0.05em",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full text-white py-12 px-6 font-poppins relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className="max-w-6xl mx-auto"
      >
        {/* macOS Window Frame */}
        <div className="relative rounded-[32px] bg-transparent border border-white/20 backdrop-blur-2xl shadow-[0_16px_50px_rgba(0,0,0,0.6)] overflow-hidden">
          
          {/* Top Glass Highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-20" />

          {/* macOS Title Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20 shadow-sm" />
            </div>
            <div className="font-mono text-xs text-gray-400 tracking-widest uppercase font-medium">
              contact.sh — Ayaan Web Solutions
            </div>
            <div className="w-12" /> {/* Spacer for symmetry */}
          </div>

          {/* Window Body Grid */}
          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading & Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-mono text-xs text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for New Projects
              </div>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                Let’s build <br />
                <span className="text-gray-400">something</span> <br />
                extraordinary.
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light border-l border-white/20 pl-4">
                Have a project in mind, a query, or just want to discuss full-stack engineering? Send a message and I will get back to you promptly.
              </p>

              <div className="pt-4 space-y-3 font-mono text-xs text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-gray-300" />
                  <span>Response Time: &lt; 24 Hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <Tag size={14} className="text-gray-300" />
                  <span>Location: Kashipur, IN / Global</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Mac-Themed Form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name Input */}
                <motion.div variants={itemVariants} className="relative">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gray-400">
                    <User size={13} />
                    <span>NAME</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Ayaan Khan"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    className={`w-full bg-white/5 border rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-md focus:outline-none transition-all duration-300 ${
                      getFieldError("name")
                        ? "border-red-500/80 bg-red-500/5"
                        : "border-white/15 focus:border-white/40 focus:bg-white/10"
                    }`}
                  />
                  {getFieldError("name") && (
                    <span className="text-red-400 font-mono text-[10px] mt-1 block pl-1">
                      {getFieldError("name")}
                    </span>
                  )}
                </motion.div>

                {/* Email Input */}
                <motion.div variants={itemVariants} className="relative">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gray-400">
                    <Mail size={13} />
                    <span>EMAIL</span>
                  </div>
                  <input
                    type="email"
                    placeholder="ayaan@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={`w-full bg-white/5 border rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-md focus:outline-none transition-all duration-300 ${
                      getFieldError("email")
                        ? "border-red-500/80 bg-red-500/5"
                        : "border-white/15 focus:border-white/40 focus:bg-white/10"
                    }`}
                  />
                  {getFieldError("email") && (
                    <span className="text-red-400 font-mono text-[10px] mt-1 block pl-1">
                      {getFieldError("email")}
                    </span>
                  )}
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Input */}
                <motion.div variants={itemVariants} className="relative">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gray-400">
                    <Phone size={13} />
                    <span>PHONE</span>
                  </div>
                  <input
                    type="text"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => {
                      if (e.target.value.length <= 15) {
                        handleChange("phone", e.target.value);
                      }
                    }}
                    onBlur={() => handleBlur("phone")}
                    className={`w-full bg-white/5 border rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-md focus:outline-none transition-all duration-300 ${
                      getFieldError("phone")
                        ? "border-red-500/80 bg-red-500/5"
                        : "border-white/15 focus:border-white/40 focus:bg-white/10"
                    }`}
                  />
                  {getFieldError("phone") && (
                    <span className="text-red-400 font-mono text-[10px] mt-1 block pl-1">
                      {getFieldError("phone")}
                    </span>
                  )}
                </motion.div>

                {/* Subject Input */}
                <motion.div variants={itemVariants} className="relative">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gray-400">
                    <Tag size={13} />
                    <span>SUBJECT</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Web App Inquiry"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    onBlur={() => handleBlur("subject")}
                    className={`w-full bg-white/5 border rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-md focus:outline-none transition-all duration-300 ${
                      getFieldError("subject")
                        ? "border-red-500/80 bg-red-500/5"
                        : "border-white/15 focus:border-white/40 focus:bg-white/10"
                    }`}
                  />
                  {getFieldError("subject") && (
                    <span className="text-red-400 font-mono text-[10px] mt-1 block pl-1">
                      {getFieldError("subject")}
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Message Input */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gray-400">
                  <MessageSquare size={13} />
                  <span>MESSAGE</span>
                </div>
                <textarea
                  placeholder="Tell me about your project scope, timeline, and tech requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={`w-full bg-white/5 border rounded-2xl p-4 text-sm text-white placeholder-gray-500 backdrop-blur-md focus:outline-none transition-all duration-300 resize-none ${
                    getFieldError("message")
                      ? "border-red-500/80 bg-red-500/5"
                      : "border-white/15 focus:border-white/40 focus:bg-white/10"
                  }`}
                />
                {getFieldError("message") && (
                  <span className="text-red-400 font-mono text-[10px] mt-1 block pl-1">
                    {getFieldError("message")}
                  </span>
                )}
              </motion.div>

              {/* Action Button */}
              <motion.div variants={itemVariants} className="pt-2">
                <motion.button
                  whileHover={isFormValid && !loading ? { scale: 1.02 } : {}}
                  whileTap={isFormValid && !loading ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={loading || !isFormValid}
                  className={`w-full sm:w-auto px-8 py-4 font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-xs tracking-widest uppercase shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] ${
                    isFormValid && !loading
                      ? "bg-white text-black cursor-pointer hover:bg-gray-100 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                      : "bg-white/10 text-gray-500 border border-white/10 cursor-not-allowed opacity-50"
                  }`}
                >
                  <Send size={14} className={isFormValid && !loading ? "text-black" : "text-gray-500"} />
                  <span>{loading ? "Transmitting..." : "Send Message"}</span>
                </motion.button>
              </motion.div>
            </motion.form>

          </div>
        </div>
      </motion.div>
    </section>
  );
}