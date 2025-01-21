"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Full-Stack Development", level: 90 },
  { name: "Cloud Development", level: 85 },
  { name: "Blockchain Technologies", level: 80 },
  { name: "DevOps", level: 75 },
  { name: "Project Management", level: 85 },
  { name: "UI/UX Design", level: 70 },
]

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-black text-green-400">
      <h2 className="text-4xl font-bold text-center mb-10 font-mono">Skills</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2 font-mono">{skill.name}</h3>
            <div className="bg-green-900 bg-opacity-20 h-4 rounded-full overflow-hidden border border-green-400">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

