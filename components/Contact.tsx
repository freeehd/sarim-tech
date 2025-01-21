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
    <section className="py-20 px-4 bg-black text-green-400">
      <h2 className="text-4xl font-bold text-center mb-10 font-mono">Get in Touch</h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2 font-mono">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full px-3 py-2 bg-green-900 bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-400 font-mono"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2 font-mono">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full px-3 py-2 bg-green-900 bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-400 font-mono"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2 font-mono">
            Message
          </label>
          <textarea
            id="message"
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full px-3 py-2 bg-green-900 bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-400 font-mono h-32"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded transition-colors font-mono"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  )
}

