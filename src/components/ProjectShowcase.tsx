"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  client?: string
  completionDate?: string
  url?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Quiz App",
    description: "A Fully development game, where users can create quizzes with the help of LLM's and play them on the platform with their friends",
    image: "/projects/quiz.png",
    category: "Web Application",
    technologies: ["NextJS", "NodeJS", "GEMINI"],
    url: "https://quizlightyear.vercel.app/" 

  },
  {
    id: 2,
    title: "Adcance AI powered Jewellery Detection",
    description: "Advanced AI-powered system that detects and classifies jewellery items based on their visual characteristics.",
    image: "/projects/karishma.png",
    category: "AI",
    technologies: ["Python", "NextJS", "Pytorch"],
    client: "Jewellary Company",
    completionDate: "Feb 2025"
  },
  {
    id: 3,
    title: "Budget Buddy",
    description: "A tool that lets u track and manage expenses, helping users stay on top of their budgets and make informed financial decisions.",
    image: "/projects/budgetBuddy.png",
    category: "Machine Learning",
    technologies: ["SwiftUI", "Figma"]
  },
  {
    id: 4,
    title: "Course Mate",
    description: "Instantly generate a course outline based on the user's input, providing them with a structured videos to complete their course.",
    image: "/projects/courseMate.png",
    category: "Education",
    technologies: ["NextJS", "Gemini"],
    url: "https://course-mate-mate.vercel.app/"
  }
]

const ProjectShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const element = containerRef.current
    element?.addEventListener('mousemove', handleMouseMove)

    return () => {
      element?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const changeProject = (index: number) => {
    if (isAnimating || index === currentProject) return
    setIsAnimating(true)
    setCurrentProject(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const nextProject = () => {
    if (isAnimating) return
    changeProject((currentProject + 1) % projects.length)
  }

  const previousProject = () => {
    if (isAnimating) return
    changeProject((currentProject - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative py-20 md:py-32" ref={containerRef}>
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">Our Projects</h2>
        <p className="text-lg text-white/70 max-w-2xl">
          Explore our portfolio of data-driven solutions that have helped businesses transform raw information into actionable insights.
        </p>
      </div>

      {/* Cursor gradient light effect */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Project Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Project Display */}
          <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:row-span-1 particle-interaction">
            <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay z-10"></div>
            <Image
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20"></div>
            
            {/* Project Details */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/30 backdrop-blur-xl text-purple-300 text-sm">
                  {projects[currentProject].category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl text-white/80 text-sm">
                  {projects[currentProject].client}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                {projects[currentProject].title}
              </h3>
              
              <p className="text-white/70 mb-6 line-clamp-3">
                {projects[currentProject].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[currentProject].technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-xl text-white/70 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={projects[currentProject].url || "#"} 
                className="inline-flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Project Thumbnails / Navigation */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 particle-interaction">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl text-white">Project Gallery</h4>
              <div className="flex gap-2">
                <button 
                  onClick={previousProject}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                  disabled={isAnimating}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  onClick={nextProject}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                  disabled={isAnimating}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {projects.map((project, index) => (
                  <a 
                  href={project.url} 
                  key={project.id}
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    changeProject(index);
                    if (project.url) {
                      window.open(project.url, '_blank');
                    }
                  }}
                >

                <div 
                  key={project.id}
                  onClick={() => changeProject(index)}
                  className={`relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] transition-all duration-300 ${
                    currentProject === index ? 'ring-2 ring-purple-500 scale-95' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 right-3">
                    <p className="text-white text-sm font-medium truncate">{project.title}</p>
                  </div>
                </div>
                </a>
              ))}
            </div>
            
            {/* Project Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeProject(index)}
                  className={`transition-all duration-300 ${
                    currentProject === index 
                      ? "bg-purple-500 w-6 h-2 rounded-full" 
                      : "bg-white/30 hover:bg-white/50 w-2 h-2 rounded-full"
                  }`}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="bg-gradient-to-r from-purple-500/20 to-purple-800/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/30">
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
            Ready to transform your data into insights?
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let's collaborate on your next data project and unlock the hidden potential in your information.
          </p>
          <button className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectShowcase