"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Solutions Architect",
    company: "Sun Studios (California-based Solar Solutions Provider)",
    period: "Recent Project",
    description:
      "Designed website and built web applications including an Ideal Solar Configuration finder using Google Solar API and a Customized Solar Proposal Generator with Dashboarding.",
  },
  {
    title: "Solutions Provider",
    company: "National Level Project",
    period: "Recent Project",
    description:
      "Designed, developed, delivered, and deployed a National Level Data Collection application in just 3 days.",
  },
  {
    title: "Solutions Architect",
    company: "Elysian Innovations",
    period: "Jun 2024 - Present",
    description: "Leading complex technical initiatives and delivering tailored solutions.",
  },
  {
    title: "Chief Technology Officer",
    company: "ThrillSpeak Education Services",
    period: "Mar 2021 - Jun 2024",
    description: "Oversaw technology strategy and implementation for educational services.",
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-black text-green-400">
      <h2 className="text-4xl font-bold text-center mb-10 font-mono">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-8`}
          >
            <div className="w-1/2 p-4">
              <h3 className="text-2xl font-semibold font-mono">{exp.title}</h3>
              <h4 className="text-xl text-green-500 font-mono">{exp.company}</h4>
              <p className="text-green-700 font-mono">{exp.period}</p>
            </div>
            <div className="w-1/2 p-4 bg-green-900 bg-opacity-20 rounded-lg shadow-lg shadow-green-400/20 border border-green-400">
              <p className="font-mono">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

