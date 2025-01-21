"use client"

import { motion } from "framer-motion"
import { Music, Video, Palette, Coffee } from "lucide-react"

const interests = [
  { icon: Music, label: "Music Production" },
  { icon: Video, label: "Videography" },
  { icon: Palette, label: "Digital Art" },
  { icon: Coffee, label: "Coffee Enthusiast" },
]

export default function About() {
  return (
    <section className="py-20 px-4 bg-black text-green-400">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 font-mono">About Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg mb-4 font-mono">
            I'm Sarim Ali, a passionate technologist and solutions provider with a diverse background in software
            engineering, cloud computing, and blockchain technologies. With a Bachelor's degree in Computer Science from
            Universiti Teknologi Malaysia, I've honed my skills across various roles, from internships to leadership
            positions.
          </p>
          <p className="text-lg font-mono">
            My journey in tech has been driven by a constant desire to learn and innovate. I believe in the power of
            technology to solve complex problems and create meaningful impact. I specialize in delivering high-impact
            projects with rapid turnaround times, as demonstrated by my recent work with Sun Studios and the National
            Level Data Collection application.
          </p>
        </motion.div>
        <h3 className="text-2xl font-semibold mb-6 font-mono">Interests & Hobbies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <interest.icon className="w-12 h-12 mb-2 text-green-500" />
              <span className="font-mono">{interest.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

