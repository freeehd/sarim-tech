"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "FinalMed",
    description:
      "Designed and developed FinalMed’s main website and subscription-based LMS for UKMLA preparation. Built multiple custom WordPress plugins to handle memberships, gated content, and student access. Integrated Stripe for recurring payments and managed Mailchimp email campaigns/automations for launches and student onboarding.",
    tags: ["WordPress", "Custom Plugins", "Mailchimp", "Stripe"],
    link: "https://finalmed.co.uk",
  },
  {
    title: "Hirah Safi Coach",
    description:
      "Created a modern, high-converting website for a lifestyle coach, focused on personal branding and clarity of offer. Set up a digital products and events marketplace (workshops, online passes, 1:1 consults) with Stripe payments. Integrated ConvertKit for email marketing, automations, and tagging based on user behaviour and purchases.",
    tags: ["Next.js", "ConvertKit", "Stripe"],
    link: "https://hirahsaficoach.com",
  },
  {
    title: "Syed Saqib Mumtaz",
    description:
      "Developed a fast, SEO-friendly portfolio website for a digital marketing specialist. Focused on clear case-study presentation, trust-building elements (testimonials, CTAs), and easy future scalability.",
    tags: ["Next.js"],
    link: "https://syedsaqibmumtaz.com",
  },
  {
    title: "Wordcall",
    description:
      "Built and deployed a specialised web-based script that automates IP pre-processing for Wordcall. Reduced manual workload and errors by turning a previously manual pipeline into a streamlined, automated flow.",
    tags: ["Web App", "Custom Scripting", "Backend Automation"],
    link: null,
  },
  {
    title: "The Friendly Vertical",
    description:
      "Created a portfolio and client outreach website for a client offering client augmentation / software services. Structured the site to highlight services, use cases, and contact flows so prospects can quickly understand the offer and book calls.",
    tags: ["Next.js", "Modern Frontend Stack"],
    link: "https://thefriendlyvertical.com",
  },
  {
    title: "Sun Studios",
    description:
      "Designed and developed a specialised website for a US-based solar company. Implemented a custom solar calculator powered by the Google Solar API to estimate roof solar potential and help qualify leads. Focused on user-friendly UX for homeowners while capturing the key data the sales team needs.",
    tags: ["Next.js", "Google Solar API", "Stripe"],
    link: "https://sunstudios.com",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string
    description: string
    tags: string[]
    link?: string | null
  } | null>(null)

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
            <p className="text-green-300 mb-4 font-mono line-clamp-3">{project.description}</p>
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-green-900 bg-opacity-90 p-8 rounded-lg max-w-2xl w-full border-2 border-green-400 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-green-400 hover:text-green-200"
                onClick={() => setSelectedProject(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-3xl font-bold mb-4 font-mono">{selectedProject.title}</h3>
              <p className="text-green-300 mb-6 font-mono">{selectedProject.description}</p>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-200 underline mb-6 block font-mono"
                >
                  Visit Website
                </a>
              )}
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

