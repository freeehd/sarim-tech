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
    <section className="py-24 px-4 bg-black text-green-400 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#002200_1px,transparent_1px),linear-gradient(to_bottom,#002200_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
            SKILL_MATRIX
          </h2>
          <p className="text-green-500/60 font-mono text-lg max-w-2xl mx-auto">
            {"// ANALYZING TECHNICAL COMPETENCIES..."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-green-900/10 border border-green-900/50 p-6 rounded-xl hover:border-green-400/50 transition-colors group"
            >
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-xl font-bold font-mono text-green-100 group-hover:text-green-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-green-500 font-mono text-sm">{skill.level}%</span>
              </div>

              <div className="h-2 bg-green-900/30 rounded-full overflow-hidden flex gap-1">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-full flex-1 rounded-sm ${(i + 1) * 10 <= skill.level ? "bg-green-500" : "bg-green-900/20"
                      }`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.1 + i * 0.05 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

