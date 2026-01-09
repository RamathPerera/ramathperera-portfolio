"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaDownload,
  FaBars,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaExternalLinkAlt,
  FaVideo,
  FaLock,
  FaUsers,
} from "react-icons/fa";
import {
  SOCIAL_LINKS,
  SKILLS,
  EXPERIENCES,
  PROJECTS,
  EDUCATION,
  CONTACT_DETAILS,
} from "@/lib/data";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// --- TYPE ANIMATION COMPONENT ---
const TypeAnimation = ({ sequence }: { sequence: string[] }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= sequence.length) {
      setIndex(0);
      return;
    }
    const timeout = setTimeout(
      () => {
        if (reverse) {
          setText((prev) => prev.slice(0, -1));
        } else {
          setText((prev) => sequence[index].slice(0, subIndex + 1));
        }

        if (!reverse && subIndex === sequence[index].length) {
          setTimeout(() => setReverse(true), 1500);
        } else if (reverse && text === "") {
          setReverse(false);
          setIndex((prev) => (prev + 1) % sequence.length);
          setSubIndex(0);
        } else {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }
      },
      reverse ? 75 : 150
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, sequence, text]);

  return (
    <span className="text-teal-400 font-mono border-r-2 border-teal-400 pr-1 animate-pulse">
      {text}
    </span>
  );
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("mqeezzlb");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        theme: "dark",
      });
    }
    // Change state.errors.length to just state.errors
    if (state.errors) {
      toast.error("Oops! Something went wrong.", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  }, [state.succeeded, state.errors]);

  // PREVENT BACKGROUND SCROLL
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    document
      .querySelectorAll("section")
      .forEach((sec) => observer.observe(sec));
  }, []);

  const [stars, setStars] = useState<
    { id: number; style: React.CSSProperties }[]
  >([]);
  useEffect(() => {
    setStars(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
        },
      }))
    );
  }, []);

  const navItems = [
    "About",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <div className="min-h-screen bg-[#050511] text-slate-200 font-sans relative overflow-x-hidden selection:bg-teal-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse opacity-60"
            style={star.style}
          />
        ))}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      {/* --- NAVBAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 backdrop-blur-md bg-[#050511]/80 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div
            className="text-xl font-bold bg-linear-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
            onClick={(e) => scrollToSection(e, "hero")}
          >
            RP.
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {navItems.map((item) => {
              const id =
                item.toLowerCase() === "about" ? "hero" : item.toLowerCase();
              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className={`transition-colors hover:text-teal-400 ${
                      activeSection === id ? "text-teal-400" : ""
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="/Ramath_Perera_SE.pdf"
              download
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 border border-teal-500/50 text-teal-400 text-[10px] md:text-xs font-bold uppercase rounded-full hover:bg-teal-500/10 transition-all"
            >
              <FaDownload /> <span className="hidden sm:inline">Resume</span>
            </a>
            <button
              className="md:hidden text-slate-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- HERO SECTION --- */}
        <section
          id="hero"
          className="pt-32 pb-12 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20"
        >
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-bold text-slate-100 mb-4 tracking-tight"
            >
              Ramath Perera
            </motion.h1>
            <div className="text-xl lg:text-2xl font-semibold text-slate-400 mb-6 h-8">
              I am a{" "}
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "Tech Enthusiast",
                ]}
              />
            </div>
            <p className="max-w-xl mx-auto lg:mx-0 text-slate-400 text-lg leading-relaxed mb-8">
              A dedicated Computer Science Undergraduate building robust
              software and exploring new technologies. Currently focusing on{" "}
              <span className="text-purple-400">Software Engineering</span>.
            </p>
            <div className="flex gap-6 justify-center lg:justify-start items-center">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-all duration-300 md:grayscale md:hover:grayscale-0 ${link.color} grayscale-0`}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 border border-teal-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-slate-700 bg-[#112240]">
              <Image
                src="/ramathperera.jpeg"
                alt="Ramath Perera"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section id="education" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-12">
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="flex gap-4 bg-[#112240]/40 p-6 rounded-xl border border-white/5 hover:border-teal-500/30 transition-all"
                >
                  <div className="shrink-0 w-16 h-16 bg-white rounded-lg overflow-hidden relative">
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 leading-tight mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-teal-400 font-mono text-sm">
                      {edu.degree}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 text-sm text-slate-500 gap-2">
                      <span>{edu.period}</span>
                      <span className="bg-slate-800 px-2 py-1 rounded text-xs self-start sm:self-auto border border-slate-700">
                        {edu.gpa}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mt-3">{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-12">
              Experience
            </h2>
            <div className="border-l-2 border-slate-800 ml-4 space-y-12">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-8">
                  <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-[#050511]" />
                  <div className="bg-[#112240]/50 p-6 rounded-xl border border-white/5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg overflow-hidden relative shrink-0">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">
                          {exp.role}
                        </h3>
                        <span className="text-teal-400 font-bold">
                          @ {exp.company}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-mono text-slate-500 mb-4 inline-block border-b border-slate-700 pb-1">
                      {exp.period}
                    </span>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-slate-400 text-sm leading-relaxed"
                        >
                          <span className="text-teal-400 mr-2 mt-1">▹</span>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SKILLS & PROJECTS remain similar in structure ... */}
        {/* Skipping to the Modal section for the critical updates */}
        {/* --- SKILLS --- */}
        <section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-12">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((grp, idx) => (
                <div
                  key={idx}
                  className="bg-[#112240]/30 p-6 rounded-xl border border-white/5 hover:bg-[#112240]/50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-teal-400 mb-4">
                    {grp.category}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {grp.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 group min-w-15"
                      >
                        <skill.icon className="text-3xl text-slate-400 group-hover:text-white transition-colors" />
                        <span className="text-xs text-slate-500 font-mono text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-12">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer bg-[#112240] rounded-lg overflow-hidden border border-white/5 hover:border-teal-500/50 shadow-lg group flex flex-col h-full"
                >
                  <div className="relative h-44 bg-slate-800">
                    <Image
                      src={project.imgUrl}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#112240] to-transparent opacity-60" />
                  </div>
                  <div className="p-5 flex flex-col grow">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-teal-400 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-teal-500 mb-3">
                      {project.type}
                    </p>
                    <p className="text-slate-400 text-xs line-clamp-3 mb-4 grow">
                      {project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="py-20 mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-12">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-slate-400 leading-relaxed">
                  I'm always open to discussing product design work or
                  partnership opportunities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-300 bg-[#112240]/30 p-4 rounded-lg border border-white/5">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center text-teal-400">
                      <FaEnvelope />
                    </div>
                    <span>{CONTACT_DETAILS.email}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300 bg-[#112240]/30 p-4 rounded-lg border border-white/5">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center text-teal-400">
                      <FaPhone />
                    </div>
                    <span>{CONTACT_DETAILS.phone}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300 bg-[#112240]/30 p-4 rounded-lg border border-white/5">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center text-teal-400">
                      <FaMapMarkerAlt />
                    </div>
                    <span>{CONTACT_DETAILS.location}</span>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-[#112240]/30 p-8 rounded-2xl border border-white/5 space-y-4"
              >
                {state.succeeded ? (
                  <div className="text-center py-10">
                    <h3 className="text-teal-400 text-2xl font-bold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-400">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => window.location.reload()}
                      className="mt-4 text-sm text-teal-500 underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Name"
                        className="w-full bg-[#050511] border border-slate-700 rounded-lg p-3 text-slate-200 focus:border-teal-400 outline-none transition-colors"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="w-full bg-[#050511] border border-slate-700 rounded-lg p-3 text-slate-200 focus:border-teal-400 outline-none transition-colors"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Message"
                        className="w-full bg-[#050511] border border-slate-700 rounded-lg p-3 text-slate-200 focus:border-teal-400 outline-none transition-colors"
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full py-3 bg-linear-to-r from-teal-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <FaPaperPlane /> Send Message
                        </>
                      )}
                    </button>
                  </>
                )}
              </form>
            </div>
          </motion.div>

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </section>
      </main>

      {/* --- DETAILED PROJECT MODAL (UPDATED) --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* 1. Backdrop with Fade Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* 2. Modal Card with Zoom In/Out Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#112240] rounded-xl w-full max-w-2xl max-h-[85vh] shadow-2xl border border-slate-700 z-10 flex flex-col overflow-hidden"
            >
              {/* 3. FIXED Close Button (Stays at top-right even when content scrolls) */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 rounded-full text-white hover:bg-teal-500 transition-all hover:scale-110"
              >
                <FaTimes />
              </button>

              {/* 4. SCROLLABLE CONTENT (Scrollbar stays inside) */}
              <div className="overflow-y-auto custom-scrollbar">
                <div className="relative h-64 w-full shrink-0">
                  <Image
                    src={selectedProject.imgUrl}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#112240] to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex flex-col gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>

                    {/* Repository & Demo Links Logic */}
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.repoLinks &&
                      selectedProject.repoLinks.length > 0
                        ? selectedProject.repoLinks.map(
                            (repo: any, idx: number) => (
                              <a
                                key={idx}
                                href={repo.url}
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 text-white text-sm font-bold transition-colors"
                              >
                                {repo.icon && <repo.icon />} {repo.label}
                              </a>
                            )
                          )
                        : !selectedProject.repoLinks && (
                            <span className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg text-slate-500 text-sm font-bold cursor-not-allowed">
                              <FaLock /> Secret Code
                            </span>
                          )}

                      {/* Display Live Link if it exists in data.ts */}
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-500 text-white text-sm font-bold transition-colors"
                        >
                          <FaExternalLinkAlt /> Live
                        </a>
                      )}

                      {/* Display Demo Link if it exists in data.ts */}
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500 text-white text-sm font-bold transition-colors"
                        >
                          <FaVideo /> Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 text-sm font-mono text-teal-400 border-b border-white/10 pb-4">
                    <span>{selectedProject.type}</span>
                    <span>|</span>
                    <span>{selectedProject.period}</span>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                    {selectedProject.fullDesc}
                  </p>

                  {/* Collaboration Section */}
                  {selectedProject.collaboration && (
                    <div className="bg-slate-800/40 p-5 rounded-lg border-l-4 border-teal-500 mb-8">
                      <h4 className="text-teal-400 font-bold mb-3 flex items-center gap-2">
                        <FaUsers /> My Contribution
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.collaboration.map(
                          (item: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-start text-sm text-slate-300"
                            >
                              <span className="text-teal-500 mr-2 mt-1">▹</span>{" "}
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-teal-500/10 text-teal-300 text-sm font-mono rounded border border-teal-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
