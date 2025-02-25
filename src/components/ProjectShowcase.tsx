"use client"

import { useState } from 'react'
import Image from 'next/image'

type Project = {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive analytics platform that leverages artificial intelligence to provide real-time insights and predictive analysis.",
    image: "/projects/project1.jpg",
    category: "Web Application",
    technologies: ["React", "Node.js", "TensorFlow"]
  },
  // Add more projects as needed
]

const ProjectShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Navigation Buttons */}
      <button 
        onClick={previousProject}
        className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={nextProject}
        className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Project Display */}
      <div className="relative w-full max-w-7xl aspect-[16/9] rounded-3xl overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={projects[currentProject].image}
            alt={projects[currentProject].title}
            fill
            className="object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Project Details - Glass morphism overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-white/10 backdrop-blur-xl border-t border-white/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-xl text-purple-300 text-sm">
                {projects[currentProject].category}
              </span>
              <div className="flex gap-2">
                {projects[currentProject].technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-xl text-white/70 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              {projects[currentProject].title}
            </h2>
            
            <p className="text-white/70 text-lg">
              {projects[currentProject].description}
            </p>
          </div>
        </div>
      </div>

      {/* Project Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentProject === index 
                ? "bg-white w-6" 
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectShowcase