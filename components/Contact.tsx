"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Here you would typically handle the form submission, e.g., sending an email
    console.log("Form submitted:", formState)
    // Reset form after submission
    setFormState({ name: "", email: "", message: "" })
  }

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
            INITIATE_UPLINK
          </h2>
          <p className="text-green-500/60 font-mono text-lg max-w-2xl mx-auto">
            {"// ESTABLISHING SECURE CONNECTION..."}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-green-900/10 border border-green-900/50 p-8 rounded-2xl backdrop-blur-sm relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />

          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-bold mb-2 font-mono text-green-400">
              &gt; IDENTIFIER_NAME
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-green-900 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-green-100 font-mono transition-all placeholder-green-900"
              placeholder="ENTER_NAME"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-bold mb-2 font-mono text-green-400">
              &gt; CONTACT_FREQUENCY (EMAIL)
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-green-900 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-green-100 font-mono transition-all placeholder-green-900"
              placeholder="ENTER_EMAIL_ADDRESS"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-bold mb-2 font-mono text-green-400">
              &gt; TRANSMISSION_DATA
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-green-900 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-green-100 font-mono h-32 transition-all placeholder-green-900"
              placeholder="ENTER_MESSAGE_CONTENT..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-black font-bold py-4 px-6 rounded-lg transition-all font-mono tracking-wider hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.6)] flex items-center justify-center gap-2 group"
          >
            <span className="w-2 h-2 bg-black rounded-full group-hover:animate-ping" />
            TRANSMIT_DATA
          </button>
        </motion.form>
      </div>
    </section>
  )
}

