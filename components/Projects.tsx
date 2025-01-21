"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "Sun Studios Solar Solutions",
    description:
      "Designed website and built web applications for a California-based Solar Solutions provider, including an Ideal Solar Configuration finder using Google Solar API and a Customized Solar Proposal Generator with Dashboarding.",
    tags: ["Web Development", "API Integration", "Solar Technology"],
  },
  {
    title: "National Level Data Collection App",
    description:
      "Designed, developed, delivered, and deployed a National Level Data Collection application in just 3 days, showcasing rapid development and problem-solving skills.",
    tags: ["Rapid Development", "Data Collection", "Full-Stack"],
  },
  {
    title: "E-Voting on Blockchain",
    description: "Research project exploring the feasibility of blockchain-based e-voting in Pakistan.",
    tags: ["Blockchain", "Research", "E-Voting"],
  },
  {
    title: "ThrillSpeak Education Platform",
    description: "Developed an online platform connecting students with tutors for various subjects and skills.",
    tags: ["EdTech", "Full-Stack", "Project Management"],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="py-20 px-4 bg-black text-green-400">
      <h2 className="text-4xl font-bold text-center mb-10 font-mono">Projects</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-green-900 bg-opacity-20 p-6 rounded-lg cursor-pointer hover:bg-green-800 hover:bg-opacity-30 transition-colors border border-green-400"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-2xl font-semibold mb-4 font-mono">{project.title}</h3>
            <p className="text-green-300 mb-4 font-mono">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-green-500 text-black text-sm px-2 py-1 rounded font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-green-900 bg-opacity-90 p-8 rounded-lg max-w-2xl w-full border-2 border-green-400"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4 font-mono">{selectedProject.title}</h3>
              <p className="text-green-300 mb-6 font-mono">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-green-500 text-black text-sm px-2 py-1 rounded font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded transition-colors font-mono"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

