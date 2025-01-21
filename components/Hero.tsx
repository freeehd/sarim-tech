"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { ErrorBoundary } from "react-error-boundary"

import SplineComponent from "@splinetool/react-spline"

const roles = ["Solutions Architect", "Full-Stack Developer", "Cloud Expert", "Blockchain Enthusiast"]

function ErrorFallback({ error, resetErrorBoundary }) {
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
    <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-black text-green-400 overflow-hidden">
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative">{isClient && MemoizedSpline}</div>
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-mono"
          >
            Sarim Ali Ghazi
          </motion.h1>
          <motion.div
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl text-green-500 font-mono"
          >
            {roles[currentRole]}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 max-w-md mx-auto md:mx-0 font-mono text-sm md:text-base"
          >
            Innovative solutions provider with a track record of delivering high-impact projects in record time.
            Specializing in web applications, data collection systems, and cutting-edge tech solutions.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

