"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Project {
  title: string
  shortDescription: string
  fullDescription: string
  role: string
  techStack: string[]
  features: string[]
  challenge: string
  solution: string
  link?: string | null
}

const projects: Project[] = [
  {
    title: "FinalMed",
    shortDescription: "Subscription-based LMS for UKMLA preparation with custom WordPress plugins.",
    fullDescription:
      "A comprehensive Learning Management System (LMS) designed for medical students preparing for the UKMLA. The platform serves as a central hub for study resources, practice exams, and progress tracking.",
    role: "Lead Developer & Designer",
    techStack: ["WordPress", "PHP", "MySQL", "Stripe API", "Mailchimp API", "JavaScript"],
    features: [
      "Custom Membership Plugin: Built from scratch to handle tiered access levels.",
      "Automated Recurring Payments: Deep integration with Stripe for seamless subscriptions.",
      "Email Automation: User behavior triggers tailored Mailchimp campaigns.",
      "Gated Content System: Secure protection for premium study materials.",
    ],
    challenge:
      "The client needed a way to securely gate high-value medical content while offering a frictionless subscription experience. Off-the-shelf LMS plugins were too bloated and lacked the specific payment flows required.",
    solution:
      "I developed a suite of lightweight, custom WordPress plugins tailored exactly to the business logic. This ensured fast load times and a secure, custom-tailored checkout flow that increased conversion rates by simplifying the user journey.",
    link: "https://finalmed.co.uk",
  },
  {
    title: "Sun Studios",
    shortDescription: "Solar proposal generator powered by Google Solar API.",
    fullDescription:
      "A specialized platform for a US-based solar company that automates the lead qualification process. It allows homeowners to estimate their solar potential instantly by entering their address.",
    role: "Full Stack Developer",
    techStack: ["Next.js", "Google Solar API", "Node.js", "Stripe", "Tailwind CSS"],
    features: [
      "Solar Potential Calculator: Uses satellite data to estimate roof sunlight hours.",
      "Dynamic Proposal Generator: Creates instant cost-saving estimates.",
      "Lead Qualification Engine: Filters high-quality leads for the sales team.",
      "Interactive Dashboard: Visualizes energy savings over 20 years.",
    ],
    challenge:
      "Sales teams were wasting time on unqualified leads, and homeowners were hesitant to engage without preliminary data. The manual proposal process took hours.",
    solution:
      "I implemented the Google Solar API to fetch real-time roof data. This data feeds into a custom algorithm I wrote to calculate potential energy offset and ROI, generating a preliminary proposal in seconds rather than hours.",
    link: "https://sunstudios.com",
  },
  {
    title: "Wordcall",
    shortDescription: "Automated IP pre-processing pipeline.",
    fullDescription:
      "A backend automation tool designed to streamline the intellectual property (IP) pre-processing workflow. It replaces a manual, error-prone data entry pipeline with a robust, automated script.",
    role: "Backend Developer",
    techStack: ["Node.js", "Python", "Express", "REST APIs", "Shell Scripting"],
    features: [
      "Batch Processing: Handles thousands of records simultaneously.",
      "Error Validation: Automatic detection and flagging of inconsistent data.",
      "API Integration: Connects directly to the internal IP database.",
      "Audit Logging: Detailed logs of every action for compliance.",
    ],
    challenge:
      "The previous workflow involved manual data entry and validation, leading to a high error rate and significant man-hour costs. Scaling operations was impossible with the manual bottleneck.",
    solution:
      "I built a web-based automation script that ingests raw data, sanitizes it, validates it against business rules, and pushes it to the production database. This reduced the workload by 90% and eliminated human error.",
    link: null,
  },
  {
    title: "Hirah Safi Coach",
    shortDescription: "High-converting lifestyle coaching platform & marketplace.",
    fullDescription:
      "A personal branding and digital marketplace website for a lifestyle coach. The site is engineered to build trust and convert visitors into paying clients for workshops and 1:1 sessions.",
    role: "Frontend Developer & UI/UX Designer",
    techStack: ["Next.js", "React", "ConvertKit", "Stripe", "Framer Motion"],
    features: [
      "Digital Marketplace: Seamless purchasing of workshops and passes.",
      "Event Booking System: Integrated calendar for 1:1 consultations.",
      "Behavioral Email Tagging: Syncs user actions with ConvertKit for targeted marketing.",
      "Performance Optimized: 99/100 Lighthouse score for SEO and Performance.",
    ],
    challenge:
      "The client struggled with a fragmented tech stack that made managing products and emails difficult. The user experience was disjointed, leading to drop-offs.",
    solution:
      "I created a unified Next.js platform that handles everything from content delivery to payments. By integrating ConvertKit deeply, we automated the entire customer journey from lead magnet to purchase.",
    link: "https://hirahsaficoach.com",
  },
  {
    title: "The Friendly Vertical",
    shortDescription: "Portfolio and lead-gen site for software services.",
    fullDescription:
      "A sleek, modern portfolio for a software augmentation agency. The site serves as a digital brochure and a lead generation engine, showcasing technical capabilities and case studies.",
    role: "Lead Frontend Developer",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    features: [
      "Dynamic Case Studies: CMS-backed project showcases.",
      "Interactive Service Map: Visual guide to service offerings.",
      "Fast Contact Flows: Optimized forms to reduce friction.",
      "Dark Mode UI: Premium, tech-focused aesthetic.",
    ],
    challenge:
      "The agency needed to look bigger and more established than they were. They needed a site that communicated 'enterprise-grade' quality immediately.",
    solution:
      "I focused heavily on micro-interactions and a polished, high-end design system. The use of smooth page transitions and a structured content strategy helped position them as a premium service provider.",
    link: "https://thefriendlyvertical.com",
  },
  {
    title: "Syed Saqib Mumtaz",
    shortDescription: "SEO-optimized portfolio for a digital marketer.",
    fullDescription:
      "A personal portfolio website designed to rank high on search engines and convert visitors. It acts as a living resume and a proof-of-competence for a digital marketing specialist.",
    role: "Web Developer",
    techStack: ["Next.js", "SEO Optimization", "Schema Markup", "Vercel"],
    features: [
      "Advanced SEO: JSON-LD schema, semantic HTML, and meta optimization.",
      "Fast Loading: Sub-second load times for better retention.",
      "Case Study Layouts: Structured data presentation for marketing metrics.",
    ],
    challenge:
      "The client needed a site that not only looked good but also performed exceptionally well in search rankings to prove his own marketing skills.",
    solution:
      "I built the site using Next.js for server-side rendering, ensuring maximum crawlability. I implemented strict semantic HTML and automated sitemap generation to ensure perfect SEO health.",
    link: "https://syedsaqibmumtaz.com",
  },
  {
    title: "National Data App",
    shortDescription: "Rapidly deployed national-level data collection tool.",
    fullDescription:
      "A mission-critical data collection application deployed for a national initiative. The project required extreme reliability and ease of use for non-technical field workers.",
    role: "Lead Engineer",
    techStack: ["React", "Firebase", "PWA", "Google Maps API"],
    features: [
      "Offline Capability: Works without internet in remote areas.",
      "Geo-tagging: Automatically records location data for every entry.",
      "Real-time Sync: Updates the central dashboard as soon as connectivity is restored.",
      "Rapid Deployment: Went from concept to live in 3 days.",
    ],
    challenge:
      "The deadline was immovable: 3 days to build a tool that would be used by thousands of field workers across the country.",
    solution:
      "I utilized a serverless architecture with Firebase to eliminate infrastructure management time. I focused on a PWA (Progressive Web App) approach to ensure compatibility across all low-end devices used in the field.",
    link: null,
  },
  {
    title: "Blockchain E-Voting",
    shortDescription: "Research prototype for secure decentralized voting.",
    fullDescription:
      "A research-driven project exploring the application of blockchain technology to national elections. It demonstrates how distributed ledgers can ensure vote immutability and transparency.",
    role: "Blockchain Researcher & Developer",
    techStack: ["Solidity", "Ethereum", "Web3.js", "React"],
    features: [
      "Immutable Ledger: Votes cannot be altered once cast.",
      "Voter Anonymity: Cryptographic hashing ensures privacy.",
      "Public Verification: Anyone can audit the vote count without revealing identities.",
      "Smart Contracts: Automated vote tallying logic.",
    ],
    challenge:
      "Ensuring that the system was both secure against attacks and simple enough for a regular voter to understand.",
    solution:
      "I developed a simplified dApp interface that abstracted the complex wallet interactions, making the voting process feel like a standard web form while maintaining the underlying blockchain security.",
    link: null,
  },
  {
    title: "ThrillSpeak",
    shortDescription: "EdTech platform connecting students and tutors.",
    fullDescription:
      "An online education marketplace that facilitates real-time connection between students and language tutors. It handles scheduling, video links, and payments.",
    role: "Full Stack Developer",
    techStack: ["MERN Stack", "Socket.io", "WebRTC", "Redux"],
    features: [
      "Real-time Messaging: Instant chat between students and tutors.",
      "Video Class Integration: Seamless links to video rooms.",
      "Smart Scheduling: Timezone-aware calendar booking.",
      "Review System: Trust-building rating mechanism.",
    ],
    challenge:
      "Managing timezones and real-time availability for users across the globe was the primary technical hurdle.",
    solution:
      "I implemented a robust scheduling engine using Moment.js and a custom algorithm to handle availability slots, ensuring that users always see times in their local timezone.",
    link: null,
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

  return (
    <section className="py-24 px-4 bg-black text-green-400 min-h-screen relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#002200_1px,transparent_1px),linear-gradient(to_bottom,#002200_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
            SYSTEM_PROJECTS
          </h2>
          <p className="text-green-500/60 font-mono text-lg max-w-2xl mx-auto">
            {"// ACCESSING ARCHIVES..."}
            <br />
            {"// SELECT A MODULE TO INITIATE DEEP DIVE"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-green-950/10 border border-green-900/50 hover:border-green-400/50 rounded-xl p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.1)]"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-green-900/30 text-green-400 text-xs font-mono px-2 py-1 rounded border border-green-800">
                    ID: {String(index + 1).padStart(2, "0")}
                  </div>
                  {project.link && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600 group-hover:text-green-400 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2 font-mono text-green-100 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-green-400/60 text-sm font-mono mb-6 line-clamp-2">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-green-500 bg-green-900/20 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs font-mono text-green-500 bg-green-900/20 px-2 py-1 rounded">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-green-500/30 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-[0_0_50px_-10px_rgba(74,222,128,0.15)] relative [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black [&::-webkit-scrollbar-thumb]:bg-[#1a4731] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-green-500"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-black/95 backdrop-blur border-b border-green-900/50 p-6 md:p-8 flex justify-between items-start z-20">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold font-mono text-green-400 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-green-600 font-mono text-sm md:text-base">{selectedProject.shortDescription}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-green-900/20 rounded-full text-green-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <section>
                    <h4 className="text-green-500 font-mono text-sm mb-4 border-b border-green-900/50 pb-2">
                      {"// PROJECT_OVERVIEW"}
                    </h4>
                    <p className="text-green-100/80 leading-relaxed text-lg">{selectedProject.fullDescription}</p>
                  </section>

                  <section className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-900/10 p-6 rounded-xl border border-green-900/30">
                      <h4 className="text-green-400 font-mono text-sm mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        THE_CHALLENGE
                      </h4>
                      <p className="text-green-200/70 text-sm leading-relaxed">{selectedProject.challenge}</p>
                    </div>
                    <div className="bg-green-900/10 p-6 rounded-xl border border-green-900/30">
                      <h4 className="text-green-400 font-mono text-sm mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        THE_SOLUTION
                      </h4>
                      <p className="text-green-200/70 text-sm leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  </section>

                  <section>
                    <h4 className="text-green-500 font-mono text-sm mb-4 border-b border-green-900/50 pb-2">
                      {"// KEY_FEATURES"}
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-green-200/80">
                          <span className="text-green-500 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Right Column: Sidebar */}
                <div className="space-y-8">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-500 hover:bg-green-400 text-black font-bold font-mono py-4 px-6 rounded-xl text-center transition-all hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(74,222,128,0.4)]"
                    >
                      LAUNCH_PROJECT ↗
                    </a>
                  )}

                  <div className="bg-green-900/5 border border-green-900/30 rounded-xl p-6">
                    <h4 className="text-green-500 font-mono text-xs mb-4 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono text-green-300 bg-green-900/30 border border-green-800 px-3 py-1.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-900/5 border border-green-900/30 rounded-xl p-6">
                    <h4 className="text-green-500 font-mono text-xs mb-4 uppercase tracking-wider">Role</h4>
                    <p className="text-green-100 font-mono">{selectedProject.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </section>
  )
}
