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
            BIO_DATA
          </h2>
          <p className="text-green-500/60 font-mono text-lg max-w-2xl mx-auto">
            {"// ACCESSING PERSONAL RECORDS..."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-green-900/10 border border-green-900/50 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
              <p className="text-lg mb-4 font-mono text-green-200/90 leading-relaxed">
                I&apos;m Sarim Ali, a passionate technologist and solutions provider with a diverse background in software
                engineering, cloud computing, and blockchain technologies. With a Bachelor&apos;s degree in Computer Science from
                Universiti Teknologi Malaysia, I&apos;ve honed my skills across various roles, from internships to leadership
                positions.
              </p>
              <p className="text-lg font-mono text-green-200/90 leading-relaxed">
                My journey in tech has been driven by a constant desire to learn and innovate. I believe in the power of
                technology to solve complex problems and create meaningful impact. I specialize in delivering high-impact
                projects with rapid turnaround times.
              </p>
            </div>
          </motion.div>

          <div>
            <h3 className="text-xl font-bold mb-6 font-mono text-green-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              INSTALLED_MODULES
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-green-900/10 border border-green-900/50 p-4 rounded-xl flex flex-col items-center text-center hover:bg-green-900/20 hover:border-green-400/50 transition-all cursor-default group"
                >
                  <interest.icon className="w-8 h-8 mb-3 text-green-600 group-hover:text-green-400 transition-colors" />
                  <span className="font-mono text-sm text-green-300 group-hover:text-green-100 transition-colors">{interest.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

