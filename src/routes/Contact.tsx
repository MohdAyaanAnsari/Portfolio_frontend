import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { sendMessage } from "../api/messages";

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
      ease: [0.215, 0.61, 0.355, 1] as const
    }
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

  // Strict Email Regex
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Strict Phone Regex (Allows +, and 7-15 digits)
  const validatePhone = (phone: string) => {
    return /^\+?[0-9]{7,15}$/.test(phone.replace(/\s/g, ""));
  };

  const getFieldError = (key: string) => {
    if (!touched[key]) return "";
    const value = formData[key as keyof typeof formData].trim();

    if (value === "") return "This field is required";

    if (key === "email" && !validateEmail(value)) return "Enter a valid email address";
    if (key === "phone" && !validatePhone(value)) return "Enter a valid phone number";

    return "";
  };

  // The button only enables if everything is perfect
  const isFormValid =
    formData.name.trim() !== "" &&
    validateEmail(formData.email) &&
    validatePhone(formData.phone) &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "";

  /* =========================
      Handlers
  ========================= */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const placeholder = e.target.placeholder.toLowerCase();
    let key = "message";

    if (placeholder.includes("name")) key = "name";
    else if (placeholder.includes("email")) key = "email";
    else if (placeholder.includes("phone")) key = "phone";
    else if (placeholder.includes("subject")) key = "subject";

    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleBlur = (key: string) => {
    setTouched({ ...touched, [key]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      setLoading(true);
      await sendMessage(formData);
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTouched({});
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto text-white flex flex-col justify-center items-start min-h-[60vh] py-10 px-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 w-full"
        >
          <h4 className="text-gray-400 font-medium uppercase tracking-widest text-sm">Contact me</h4>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Get in touch.</h2>
          <p className="text-zinc-400 max-w-md leading-relaxed font-light">
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <motion.div variants={itemVariants} className="relative">
              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors ${getFieldError("name") ? "border-red-500" : "border-gray-700 focus:border-white"
                  }`}
              />
              {getFieldError("name") && <span className="text-red-500 text-[10px] uppercase tracking-wider absolute -bottom-5 left-0">{getFieldError("name")}</span>}
            </motion.div>

            {/* Email - STRICT */}
            <motion.div variants={itemVariants} className="relative">
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors ${getFieldError("email") ? "border-red-500" : "border-gray-700 focus:border-white"
                  }`}
              />
              {getFieldError("email") && <span className="text-red-500 text-[10px] uppercase tracking-wider absolute -bottom-5 left-0">{getFieldError("email")}</span>}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone - STRICT */}
            <motion.div variants={itemVariants} className="relative">
              <input
                type="number"
                placeholder="Phone Number"
                onKeyDown={(e) => {
                  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                    e.preventDefault();
                  }
                }}
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors ${getFieldError("phone") ? "border-red-500" : "border-gray-700 focus:border-white"
                  }`}
              />
              {getFieldError("phone") && <span className="text-red-500 text-[10px] uppercase tracking-wider absolute -bottom-5 left-0">{getFieldError("phone")}</span>}
            </motion.div>

            {/* Subject */}
            <motion.div variants={itemVariants} className="relative">
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={() => handleBlur("subject")}
                className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors ${getFieldError("subject") ? "border-red-500" : "border-gray-700 focus:border-white"
                  }`}
              />
              {getFieldError("subject") && <span className="text-red-500 text-[10px] uppercase tracking-wider absolute -bottom-5 left-0">{getFieldError("subject")}</span>}
            </motion.div>
          </div>

          {/* Message */}
          <motion.div variants={itemVariants} className="relative">
            <textarea
              placeholder="Write your message here"
              rows={1}
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors resize-none ${getFieldError("message") ? "border-red-500" : "border-gray-700 focus:border-white"
                }`}
            />
            {getFieldError("message") && <span className="text-red-500 text-[10px] uppercase tracking-wider absolute -bottom-2 left-0">{getFieldError("message")}</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={isFormValid ? { scale: 1.02 } : {}}
              whileTap={isFormValid ? { scale: 0.98 } : {}}
              type="submit"
              disabled={loading || !isFormValid}
              className={`px-8 py-4 font-bold rounded-full transition-all uppercase tracking-widest text-xs ${isFormValid
                  ? "bg-white text-black cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
