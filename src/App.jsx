import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Smartphone,
  Server,
  Award,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  Globe,
  Zap,
} from "lucide-react";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [scrollProgress, setScrollProgress] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    const updateProgress = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // initial call
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xnjbqgkr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };
  const projects = [
    {
      title: "AI Study Companion App",
      category: "mobile",
      description:
        "Website using OpenAI GPT to convert notes (PDF/images) into summaries and adaptive quizzes and track each session preparing quizes. Powered by Supabase auth & storage.",
      tech: ["MERN", "OpenAI", "Supabase"],
      image:
        "https://plus.unsplash.com/premium_photo-1733342678263-f53160dcd9e1?q=80&w=954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/surafelbit",
      demo: "https://e-learning-frontend-397l.vercel.app/",
    },
    {
      title: "Taxi Calling Uber Mockup",
      category: "web",
      description:
        "Real-time ride-hailing platform with Socket.io matching, dynamic maps, and responsive Next.js + Tailwind UI.",
      tech: ["Next.js", "Socket.io", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      link: "https://github.com/surafelbit",
    },
    {
      title: "Inventory Management Ecosystem",
      category: "fullstack",
      description:
        "Flutter mobile + NestJS backend with PostgreSQL for large-scale inventory and staff management.",
      tech: ["NestJS", "PostgreSQL", "Flutter"],
      image:
        "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800&q=80",
      link: "https://github.com/surafelbit",
    },
    {
      title: "Employee Management (MERN)",
      category: "web",
      description:
        "Full HR platform with RBAC, payroll simulation, and React dashboard — built with MERN stack.",
      tech: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1454165205770-357bd196e877?w=800&q=80",
      link: "https://github.com/surafelbit",
    },
    {
      title: "Bill Management System (Derash)",
      category: "web",
      description:
        "Secure bill processing system for Derash/INSA with JWT auth and file upload validation.",
      tech: ["MERN", "JWT", "Multer"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      link: "https://github.com/surafelbit",
    },
    {
      title: "Tour Booking Backend",
      category: "backend",
      description:
        "RESTful API with filtering, sorting, pagination, secure auth, and booking automation.",
      tech: ["Flutter", "React", "Postgres"],
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      link: "https://github.com/surafelbit",
    },
    {
      title: "Taxi Payment System",
      category: "fullstack",
      description:
        "fully integrated system to allow passengers to pay there fare",
      tech: ["Node.js", "Express", "MongoDB"],
      image:
        "https://th.bing.com/th/id/OIP._F6zMVOUbL-Kt4EX_75yLwHaEO?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "https://github.com/surafelbit",
      demo: "https://yegna-taxi.vercel.app/",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-gray-800/60">
        <div className="container mx-auto px-5 md:px-10 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-extrabold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent"
          >
            Surafel
          </motion.div>

          <div className="hidden lg:flex items-center gap-10 text-sm font-medium uppercase tracking-wide">
            {["about", "skills", "projects", "experience", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-violet-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300" />
                </a>
              )
            )}
          </div>

          <button
            className="lg:hidden text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden bg-black/90 border-t border-gray-800"
          >
            <div className="container mx-auto px-5 py-6 flex flex-col items-center gap-6 text-lg">
              {["about", "skills", "projects", "experience", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-violet-400 transition-colors"
                  >
                    {item.toUpperCase()}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </nav>
      {/* Scroll Progress Bar */}
      {/* Scroll Progress Bar - cute glowing version without percentage */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-gray-900/30 z-[9999] backdrop-blur-md pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.6)]"
          initial={{ width: "0%" }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      {/* Hero */}
      <section
        id="about"
        className="min-h-screen pt-28 pb-16 flex items-center"
      >
        <div className="container mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-violet-950/40 border border-violet-600/40 text-violet-300 text-xs font-semibold uppercase tracking-wide">
              <Code2 size={16} /> Full-Stack Creator
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Software Engineer &<br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Mobile Innovator
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10">
              5th-year Software Engineering student from Ethiopia. I build
              scalable MERN backends, elegant React/Next.js frontends, and
              production-ready Flutter mobile apps.
            </p>

            <div className="flex flex-wrap gap-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full font-semibold shadow-xl shadow-violet-900/40 flex items-center gap-2"
              >
                Let's Collaborate <ChevronRight size={18} />
              </motion.a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/surafelbit"
                  target="_blank"
                  className="p-3 bg-gray-800/80 rounded-full hover:bg-violet-600/50 transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/surafel-muhabaw-7119b8335"
                  target="_blank"
                  className="p-3 bg-gray-800/80 rounded-full hover:bg-violet-600/50 transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:surafelmuhabaw17@gmail.com"
                  className="p-3 bg-gray-800/80 rounded-full hover:bg-violet-600/50 transition-colors"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="w-80 md:w-96 aspect-square rounded-3xl overflow-hidden border-4 border-violet-600/40 shadow-2xl shadow-violet-900/30 relative">
              <img
                src="/image.jpg"
                alt="Surafel Muhabaw"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-black/40">
        <div className="container mx-auto px-5 md:px-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">
              Tech Stack
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">
              What I Build With
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                icon: <Code2 size={40} className="text-violet-400" />,
                items: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Redux",
                  "Framer Motion",
                ],
              },
              {
                title: "Backend",
                icon: <Server size={40} className="text-fuchsia-400" />,
                items: [
                  "Node.js",
                  "Express",
                  "NestJS",
                  "MongoDB",
                  "PostgreSQL",
                  "JWT + Auth",
                ],
              },
              {
                title: "Mobile",
                icon: <Smartphone size={40} className="text-pink-400" />,
                items: [
                  "Flutter",
                  "Dart",
                  "Supabase",
                  "Firebase",
                  "API Integration",
                ],
              },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                {...fadeInUp}
                transition={{ delay: i * 0.15 }}
                className="p-8 bg-gray-900/50 rounded-3xl border border-gray-800 hover:border-violet-600/50 transition-all group"
              >
                <div className="flex justify-center mb-6">{cat.icon}</div>
                <h4 className="text-2xl font-bold text-center mb-6">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-black/40 rounded-xl text-sm border border-gray-700 group-hover:border-violet-600/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-5 md:px-10">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">
              Selected Works
            </h3>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-900/70 p-1.5 rounded-full border border-gray-800 backdrop-blur-sm">
              {["all", "web", "mobile", "fullstack", "backend"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-900/40"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900/40 rounded-3xl overflow-hidden border border-gray-800 hover:border-violet-600/50 transition-all group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-gray-950/70 rounded-full text-xs border border-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mt-4 text-sm font-medium"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-violet-600/20 hover:bg-violet-600/40 px-4 py-2 rounded-full text-sm font-medium text-violet-300 hover:text-white transition-colors"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-black/40">
        <div className="container mx-auto px-5 md:px-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">
              Journey
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">
              Experience & Education
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold flex items-center gap-3 mb-6">
                <Award size={28} className="text-violet-400" /> Professional
                Experience
              </h4>

              {[
                {
                  role: "Software Dev Intern",
                  company: "Derash (INSA)",
                  date: "Mar – Jun 2025",
                  desc: "High-security billing backend + RBAC",
                },
                {
                  role: "Backend Developer",
                  company: "Efuye Gela",
                  date: "Apr – Jun 2025",
                  desc: "Next.js + Prisma scalable APIs",
                },
                {
                  role: "Frontend Specialist",
                  company: "Deutsche Fur Medicin",
                  date: "Aug – Oct 2025",
                  desc: "React + Tailwind medical platform UI",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800"
                >
                  <div className="text-violet-400 text-sm mb-2">{exp.date}</div>
                  <h5 className="text-xl font-bold">{exp.role}</h5>
                  <div className="text-gray-500 mb-3">{exp.company}</div>
                  <p className="text-gray-400 text-sm">{exp.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold flex items-center gap-3 mb-6">
                <Award size={28} className="text-fuchsia-400" /> Education
              </h4>

              <motion.div
                {...fadeInUp}
                className="p-8 bg-gray-900/50 rounded-3xl border border-gray-800"
              >
                <h5 className="text-2xl font-bold mb-2">
                  B.Sc. Software Engineering
                </h5>
                <p className="text-violet-400 mb-4">
                  University Name, Ethiopia
                </p>
                <p className="text-gray-400 italic mb-6">
                  Expected Graduation: 2026
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Algorithms",
                    "Mobile Development",
                    "Cloud Computing",
                    "AI Basics",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-950/60 rounded-xl text-sm border border-gray-700"
                    >
                      <CheckCircle2 size={14} className="text-violet-400" />{" "}
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-5 md:px-10 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">
              Let's Build Something Great
            </h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Feel free to reach out directly via email or use the form below —
              I'll usually reply within 24 hours!
            </p>
          </motion.div>

          <div className="bg-gray-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gray-800">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-6">🎉</div>
                <h4 className="text-3xl font-bold text-violet-400 mb-4">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-300 text-lg mb-8">
                  Thank you! I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-8 py-4 bg-violet-600 hover:bg-violet-700 rounded-full font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-red-400"
              >
                <div className="text-6xl mb-6">😕</div>
                <h4 className="text-2xl font-bold mb-4">
                  Something went wrong
                </h4>
                <p className="text-gray-300 mb-6">
                  Please try again or email me directly at{" "}
                  <a
                    href="mailto:surafelmuhabaw17@gmail.com"
                    className="underline hover:text-violet-400"
                  >
                    surafelmuhabaw17@gmail.com
                  </a>
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-full font-semibold transition-colors"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 pl-2">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-gray-950 border border-gray-700 rounded-2xl focus:border-violet-500 outline-none transition-all placeholder-gray-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 pl-2">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-gray-950 border border-gray-700 rounded-2xl focus:border-violet-500 outline-none transition-all placeholder-gray-600"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 pl-2">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-6 py-5 bg-gray-950 border border-gray-700 rounded-2xl focus:border-violet-500 outline-none transition-all resize-none placeholder-gray-600"
                    placeholder="Tell me about your project, job opportunity, or idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`w-full py-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold uppercase tracking-wider rounded-2xl transition-all shadow-2xl shadow-violet-900/40 flex items-center justify-center gap-3 group ${
                    status === "submitting"
                      ? "opacity-70 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {status === "submitting" ? (
                    <>
                      Sending...
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Zap
                        size={20}
                        className="group-hover:scale-125 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-10 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={18} /> surafelmuhabaw17@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} /> +251 982 865 333
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} /> Addis Ababa, Ethiopia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Surafel Muhabaw • Built with passion in
        Ethiopia
      </footer>
    </div>
  );
};

export default App;
