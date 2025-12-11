"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { ErrorBoundary } from "react-error-boundary"

import SplineComponent from "@splinetool/react-spline"

const roles = ["Solutions Architect", "Full-Stack Developer", "Cloud Expert", "Blockchain Enthusiast"]

import { FallbackProps } from "react-error-boundary"

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-green-900 bg-opacity-20 text-green-400">
      <div>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </div>
  )
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const MemoizedSpline = useMemo(() => {
    return (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <SplineComponent
          scene="https://prod.spline.design/0CwcVET-sYc6HxXq/scene.splinecode"
          className="w-full h-full"
        />
      </ErrorBoundary>
    )
  }, [])

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-black text-green-400 overflow-hidden relative">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#002200_1px,transparent_1px),linear-gradient(to_bottom,#002200_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full md:w-1/2 h-1/2 md:h-full relative z-10">{isClient && MemoizedSpline}</div>
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center relative z-10">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-3 py-1 border border-green-500/30 rounded-full bg-green-900/10 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2 text-xs font-mono text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              SYSTEM_ONLINE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700"
          >
            Sarim Ali Ghazi
          </motion.h1>

          <div className="h-12 mb-6">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl text-green-500 font-mono flex items-center gap-3"
            >
              <span className="text-green-700">&gt;</span>
              {roles[currentRole]}
              <span className="animate-pulse">_</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 max-w-md mx-auto md:mx-0 font-mono text-sm md:text-base text-green-400/80 leading-relaxed border-l-2 border-green-900 pl-4"
          >
            Innovative solutions provider with a track record of delivering high-impact projects in record time.
            Specializing in web applications, data collection systems, and cutting-edge tech solutions.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

