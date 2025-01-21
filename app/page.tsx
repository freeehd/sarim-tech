import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  )
}

