// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Phone,
//   ExternalLink,
//   Code2,
//   Smartphone,
//   Server,
//   Database,
//   Cpu,
//   Award,
//   ChevronRight,
//   User,
//   Layout,
//   Globe,
//   Terminal,
//   Layers,
//   Zap,
//   CheckCircle2,
// } from "lucide-react";

// const App = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const projects = [
//     {
//       title: "AI Study Companion App",
//       category: "mobile",
//       description:
//         "A cutting-edge Flutter mobile application designed for modern students. It leverages OpenAI's GPT models to transform static notes (PDF/Images) into interactive summaries and adaptive quizzes. Built with Supabase for lightning-fast auth and cloud storage.",
//       tech: ["Flutter", "Dart", "OpenAI API", "Supabase", "Cloud Storage"],
//       image:
//         "https://images.unsplash.com/photo-1522248720265-d0c5ee917ad5?w=800&q=80",
//       link: "https://github.com/surafelbit",
//     },
//     {
//       title: "Taxi Calling Uber Mockup",
//       category: "web",
//       description:
//         "A sophisticated real-time ride-hailing platform. Features include live driver-passenger matching via Socket.io, dynamic map routing, and a mobile-first responsive UI built with Next.js and Tailwind CSS.",
//       tech: ["Next.js", "Socket.io", "Tailwind CSS", "Node.js"],
//       image:
//         "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
//       link: "https://github.com/surafelbit",
//     },
//     {
//       title: "Inventory Management Ecosystem",
//       category: "fullstack",
//       description:
//         "An enterprise-grade solution for shop owners. Includes a Flutter mobile app for floor staff and a Nest.js backend for complex data management. Designed with PostgreSQL to handle large-scale product catalogs and worker tracking.",
//       tech: ["Nest.js", "PostgreSQL", "Flutter", "TypeScript"],
//       image:
//         "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800&q=80",
//       link: "https://github.com/surafelbit",
//     },
//     {
//       title: "Employee Management (MERN)",
//       category: "web",
//       description:
//         "A full-cycle HR platform featuring role-based access control (RBAC), complex payroll simulations, and detailed employee data visualization. Streamlines administrative workflows through a modern React dashboard.",
//       tech: ["MongoDB", "Express", "React", "Node.js", "Mongoose"],
//       image:
//         "https://images.unsplash.com/photo-1454165205770-357bd196e877?w=800&q=80",
//       link: "https://github.com/surafelbit",
//     },
//     {
//       title: "Bill Management System (Derash)",
//       category: "web",
//       description:
//         "Developed specifically for the Derash platform (INSA). This system bridges service providers and banks, handling high-volume bill processing with JWT-secured file uploads and multi-layered validation.",
//       tech: ["MERN Stack", "JWT", "Multer", "Security Best Practices"],
//       image:
//         "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
//       link: "https://github.com/surafelbit",
//     },
//     {
//       title: "Tour Booking Backend",
//       category: "backend",
//       description:
//         "A robust, high-availability RESTful API architecture. Implements advanced query features like filtering, sorting, and pagination. Features secure user authentication and automated booking management workflows.",
//       tech: ["Node.js", "Express", "MongoDB", "REST API"],
//       image:
//         "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
//       link: "https://github.com/surafelbit",
//     },
//   ];

//   const filteredProjects =
//     activeTab === "all"
//       ? projects
//       : projects.filter((p) => p.category === activeTab);

//   const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6 },
//   };

//   return (
//     <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 font-sans scroll-smooth">
//       {/* Navigation */}
//       <nav
//         className={`fixed w-full z-50 transition-all duration-500 ${
//           isScrolled
//             ? "bg-slate-950/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl"
//             : "bg-transparent py-8"
//         }`}
//       >
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
//           >
//             SURAFEL.
//           </motion.div>
//           <div className="hidden md:flex space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase">
//             {["about", "skills", "projects", "experience", "contact"].map(
//               (item) => (
//                 <a
//                   key={item}
//                   href={`#${item}`}
//                   className="hover:text-blue-400 transition-all duration-300 relative group"
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section
//         id="about"
//         className="relative min-h-screen flex items-center pt-20 overflow-hidden"
//       >
//         {/* Animated Background Orbs */}
//         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse"></div>
//         <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full animate-bounce duration-[10s]"></div>

//         <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex-1 text-center lg:text-left"
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-wider uppercase">
//               <Zap size={14} fill="currentColor" /> Ready for Innovation
//             </div>
//             <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
//               Software <br />{" "}
//               <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
//                 Engineer
//               </span>
//             </h1>
//             <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
//               Passionate 5th-year Software Engineering student from Ethiopia. I
//               specialize in architecting scalable{" "}
//               <span className="text-blue-400 font-medium">MERN Stack</span>{" "}
//               ecosystems and crafting seamless{" "}
//               <span className="text-indigo-400 font-medium">Flutter</span>{" "}
//               mobile experiences. Bridging the gap between complex backend logic
//               and user-centric design.
//             </p>
//             <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="#contact"
//                 className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-blue-600/30 flex items-center gap-2"
//               >
//                 Hire Me <ChevronRight size={20} />
//               </motion.a>
//               <div className="flex items-center gap-6 px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl">
//                 <a
//                   href="https://github.com/surafelbit"
//                   target="_blank"
//                   className="hover:text-blue-400 transition-colors"
//                 >
//                   <Github size={22} />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/surafel-muhabaw-7119b8335"
//                   target="_blank"
//                   className="hover:text-blue-400 transition-colors"
//                 >
//                   <Linkedin size={22} />
//                 </a>
//                 <a
//                   href="mailto:surafelmuhabaw17@gmail.com"
//                   className="hover:text-blue-400 transition-colors"
//                 >
//                   <Mail size={22} />
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="flex-1 relative"
//           >
//             <div className="w-72 h-72 md:w-[450px] md:h-[450px] mx-auto relative group">
//               {/* Decorative Rings */}
//               <div className="absolute inset-[-20px] border border-white/5 rounded-full animate-spin duration-[20s]"></div>
//               <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-spin-reverse duration-[30s]"></div>

//               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-[2.5rem] rotate-6 opacity-20 blur-2xl group-hover:rotate-12 transition-all duration-500"></div>
//               <div className="relative w-full h-full bg-slate-800 rounded-[2.5rem] overflow-hidden border border-white/10 p-4 shadow-2xl">
//                 <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
//                   <img
//                     src="/image.jpg"
//                     // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
//                     alt="Surafel Muhabaw"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Expertise Section */}
//       <section id="skills" className="py-32 relative bg-[#03081c]">
//         <div className="container mx-auto px-6">
//           <motion.div {...fadeIn} className="max-w-3xl mb-20">
//             <h2 className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
//               Core Expertise
//             </h2>
//             <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
//               Technical Mastery & Stack
//             </h3>
//             <p className="text-slate-400 text-lg">
//               I leverage a modern technology stack to build resilient,
//               performance-oriented applications. From cloud architecture to
//               pixel-perfect interfaces.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 icon: <Layout className="text-blue-400" />,
//                 title: "Frontend Engineering",
//                 skills: [
//                   "React.js",
//                   "Next.js",
//                   "TypeScript",
//                   "Tailwind CSS",
//                   "Redux Toolkit",
//                   "Material UI",
//                 ],
//                 color: "blue",
//               },
//               {
//                 icon: <Terminal className="text-indigo-400" />,
//                 title: "Backend & Systems",
//                 skills: [
//                   "Node.js",
//                   "Express.js",
//                   "Nest.js",
//                   "RESTful APIs",
//                   "Socket.io",
//                   "JWT Auth",
//                 ],
//                 color: "indigo",
//               },
//               {
//                 icon: <Smartphone className="text-cyan-400" />,
//                 title: "Cross-Platform Mobile",
//                 skills: [
//                   "Flutter",
//                   "Dart",
//                   "Firebase",
//                   "Supabase",
//                   "Native Integration",
//                   "App Deployment",
//                 ],
//                 color: "cyan",
//               },
//             ].map((skillBox, i) => (
//               <motion.div
//                 key={i}
//                 {...fadeIn}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="p-10 bg-slate-900/40 border border-white/5 rounded-[2rem] hover:bg-slate-900/60 transition-all group"
//               >
//                 <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
//                   {skillBox.icon}
//                 </div>
//                 <h4 className="text-2xl font-bold text-white mb-6">
//                   {skillBox.title}
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {skillBox.skills.map((s, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-slate-300 font-medium"
//                     >
//                       {s}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Grid */}
//       <section id="projects" className="py-32">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//             <motion.div {...fadeIn}>
//               <h2 className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
//                 Portfolio
//               </h2>
//               <h3 className="text-4xl md:text-5xl font-black text-white">
//                 Selected Works
//               </h3>
//             </motion.div>
//             <div className="flex bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/5 shadow-2xl">
//               {["all", "web", "mobile", "fullstack"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-6 py-3 text-[11px] font-black uppercase tracking-[0.15em] rounded-xl transition-all ${
//                     activeTab === tab
//                       ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30"
//                       : "text-slate-500 hover:text-slate-300"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             <AnimatePresence mode="popLayout">
//               {filteredProjects.map((project, idx) => (
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   key={project.title}
//                   className="group bg-slate-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
//                 >
//                   <div className="aspect-[4/3] overflow-hidden relative">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent"></div>
//                     <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
//                       {project.tech.slice(0, 3).map((t, i) => (
//                         <span
//                           key={i}
//                           className="text-[9px] px-2.5 py-1.5 bg-black/60 backdrop-blur-md text-white rounded-lg font-black uppercase tracking-widest"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="p-8">
//                     <h4 className="text-2xl font-bold text-white mb-4">
//                       {project.title}
//                     </h4>
//                     <p className="text-slate-400 text-base mb-8 leading-relaxed line-clamp-3">
//                       {project.description}
//                     </p>
//                     <div className="flex justify-between items-center pt-6 border-t border-white/5">
//                       <a
//                         href={project.link}
//                         target="_blank"
//                         className="text-blue-400 text-sm font-black flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest"
//                       >
//                         Case Study <ExternalLink size={14} />
//                       </a>
//                       <a
//                         href={project.link}
//                         className="p-3 bg-slate-800/50 hover:bg-blue-600 rounded-full text-slate-300 hover:text-white transition-all shadow-lg"
//                       >
//                         <Github size={18} />
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* Career Experience */}
//       <section id="experience" className="py-32 bg-[#03081c]">
//         <div className="container mx-auto px-6">
//           <div className="mb-24 text-center">
//             <h2 className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
//               Journey
//             </h2>
//             <h3 className="text-4xl md:text-5xl font-black text-white">
//               Experience & Education
//             </h3>
//           </div>

//           <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
//             {/* Professional */}
//             <div className="space-y-10">
//               <h4 className="text-xl font-black text-white flex items-center gap-3 mb-10">
//                 <Layers className="text-blue-500" /> Professional Experience
//               </h4>

//               {[
//                 {
//                   role: "Software Development Intern",
//                   company: "Derash (INSA), Addis Ababa",
//                   date: "Mar 2025 – Jun 2025",
//                   desc: "Spearheaded backend initiatives for high-security billing systems. Optimized Node.js file-handling logic and implemented robust RBAC systems.",
//                 },
//                 {
//                   role: "Backend Developer",
//                   company: "Efuye Gela, Addis Ababa",
//                   date: "Apr 2025 – Jun 2025",
//                   desc: "Crafted scalable backend architectures using Next.js and Prisma. Focused on database optimization and high-performance server-side rendering.",
//                 },
//                 {
//                   role: "Frontend Specialist",
//                   company: "Deutsche Fur Medicin",
//                   date: "Aug 2025 – Oct 2025",
//                   desc: "Leading the UI development for a centralized medical student registration platform. Using React.js and Tailwind to ensure 100% responsive design.",
//                 },
//               ].map((exp, i) => (
//                 <motion.div
//                   {...fadeIn}
//                   transition={{ delay: i * 0.1 }}
//                   key={i}
//                   className="relative pl-10 border-l-2 border-slate-800"
//                 >
//                   <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
//                   <span className="text-blue-400 font-mono text-xs mb-2 block">
//                     {exp.date}
//                   </span>
//                   <h5 className="text-xl font-bold text-white mb-1">
//                     {exp.role}
//                   </h5>
//                   <p className="text-slate-500 font-bold mb-3">{exp.company}</p>
//                   <p className="text-slate-400 leading-relaxed">{exp.desc}</p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Academic */}
//             <div className="space-y-10">
//               <h4 className="text-xl font-black text-white flex items-center gap-3 mb-10">
//                 <Award className="text-indigo-500" /> Academic Background
//               </h4>
//               <motion.div
//                 {...fadeIn}
//                 className="p-10 bg-slate-900/50 border border-white/5 rounded-[2.5rem] relative overflow-hidden group"
//               >
//                 <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-indigo-600/10 blur-[50px] rounded-full group-hover:bg-indigo-600/20 transition-all"></div>
//                 <div className="flex items-start gap-6">
//                   <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-400 flex-shrink-0">
//                     <Cpu size={32} />
//                   </div>
//                   <div>
//                     <h5 className="text-2xl font-bold text-white mb-2">
//                       B.Sc. Software Engineering
//                     </h5>
//                     <p className="text-indigo-400 font-bold mb-6">
//                       University Name, Ethiopia
//                     </p>
//                     <div className="space-y-4">
//                       <p className="text-slate-400 leading-relaxed italic">
//                         Expected Graduation: 2026
//                       </p>
//                       <div className="flex flex-wrap gap-2">
//                         {[
//                           "Algorithms",
//                           "Mobile Dev",
//                           "Cloud Computing",
//                           "AI Principles",
//                         ].map((tag) => (
//                           <span
//                             key={tag}
//                             className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg text-xs text-slate-400"
//                           >
//                             <CheckCircle2
//                               size={12}
//                               className="text-indigo-500"
//                             />{" "}
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Connect Section */}
//       <section id="contact" className="py-32">
//         <div className="container mx-auto px-6">
//           <div className="bg-gradient-to-br from-blue-900/30 to-[#020617] border border-white/5 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full"></div>

//             <div className="grid lg:grid-cols-2 gap-20 relative z-10">
//               <div>
//                 <motion.h2
//                   {...fadeIn}
//                   className="text-5xl md:text-7xl font-black text-white mb-10 leading-[1.1]"
//                 >
//                   Ready for the{" "}
//                   <span className="text-blue-500 underline decoration-white/10 underline-offset-8">
//                     next big thing?
//                   </span>
//                 </motion.h2>
//                 <div className="space-y-8">
//                   <p className="text-slate-400 text-xl leading-relaxed max-w-md">
//                     I'm currently looking for high-impact opportunities in
//                     full-stack web and mobile development.
//                   </p>
//                   <div className="space-y-6">
//                     {[
//                       { icon: <Mail />, text: "surafelmuhabaw17@gmail.com" },
//                       { icon: <Phone />, text: "+251-982-865-333" },
//                       { icon: <Globe />, text: "Addis Ababa, Ethiopia" },
//                     ].map((item, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-6 group cursor-pointer"
//                       >
//                         <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
//                           {item.icon}
//                         </div>
//                         <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">
//                           {item.text}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <motion.div
//                 {...fadeIn}
//                 className="bg-slate-950/50 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border border-white/5 shadow-inner"
//               >
//                 <form
//                   className="space-y-6"
//                   onSubmit={(e) => e.preventDefault()}
//                 >
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-2">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full px-6 py-5 bg-slate-900/50 border border-white/5 rounded-2xl focus:border-blue-500 outline-none transition-all"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-2">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         className="w-full px-6 py-5 bg-slate-900/50 border border-white/5 rounded-2xl focus:border-blue-500 outline-none transition-all"
//                         placeholder="john@example.com"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-2">
//                       Message
//                     </label>
//                     <textarea
//                       rows="5"
//                       className="w-full px-6 py-5 bg-slate-900/50 border border-white/5 rounded-2xl focus:border-blue-500 outline-none transition-all resize-none"
//                       placeholder="I have an interesting project..."
//                     ></textarea>
//                   </div>
//                   <button className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 group">
//                     Send Inquiry{" "}
//                     <Zap
//                       size={18}
//                       fill="currentColor"
//                       className="group-hover:scale-125 transition-transform"
//                     />
//                   </button>
//                 </form>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-20 border-t border-white/5">
//         <div className="container mx-auto px-6 text-center">
//           <div className="text-2xl font-black tracking-tighter text-white mb-8">
//             SURAFEL.
//           </div>
//           <div className="flex justify-center gap-10 mb-10">
//             {["LeetCode", "GitHub", "LinkedIn"].map((link) => (
//               <a
//                 key={link}
//                 href="#"
//                 className="text-slate-500 hover:text-blue-400 font-black uppercase text-[10px] tracking-[0.2em] transition-colors"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//           <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
//             © {new Date().getFullYear()} Handcrafted with Passion in Ethiopia.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
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
} from "lucide-react";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "AI Study Companion App",
      category: "mobile",
      description:
        "Flutter mobile app using OpenAI GPT to convert notes (PDF/images) into summaries and adaptive quizzes. Powered by Supabase auth & storage.",
      tech: ["Flutter", "OpenAI", "Supabase"],
      image:
        "https://images.unsplash.com/photo-1522248720265-d0c5ee917ad5?w=800&q=80",
      link: "https://github.com/surafelbit",
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
      tech: ["Node.js", "Express", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      link: "https://github.com/surafelbit",
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

                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mt-4 text-sm font-medium"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
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
      <section id="contact" className="py-24">
        <div className="container mx-auto px-5 md:px-10 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">
              Let's Build Something Great
            </h3>
          </motion.div>

          <div className="bg-gray-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gray-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-5 bg-black/40 rounded-2xl border border-gray-700 focus:border-violet-500 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-5 bg-black/40 rounded-2xl border border-gray-700 focus:border-violet-500 outline-none transition-all"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full p-5 bg-black/40 rounded-2xl border border-gray-700 focus:border-violet-500 outline-none transition-all resize-none"
              />
              <button className="w-full py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl font-semibold shadow-xl shadow-violet-900/30 hover:brightness-110 transition-all">
                Send Message
              </button>
            </form>

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
