"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type Service = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  color: string
}

const Services = () => {
  const [activeService, setActiveService] = useState<number>(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const services: Service[] = [
    {
      id: 0,
      title: "Landing Pages",
      description: "Captivating, high-conversion landing pages designed to transform visitors into customers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Responsive design for all devices",
        "SEO-optimized structure",
        "Fast-loading pages",
        "Conversion-focused layouts"
      ],
      color: "purple"
    },
    {
      id: 1,
      title: "Full Stack Applications",
      description: "End-to-end development solutions that combine powerful backends with intuitive frontends.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        "Scalable architecture",
        "Secure authentication systems",
        "Database optimization",
        "API integration"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Cross-platform compatibility",
        "Offline functionality",
        "Push notifications",
        "App store optimization"
      ],
      color: "green"
    },
    {
      id: 3,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions that transform data into actionable insights.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        "Predictive analytics",
        "Machine learning models",
        "Natural language processing",
        "Computer vision"
      ],
      color: "amber"
    }
  ]

  // Get current service color class
  const getColorClass = (color: string) => {
    const colors = {
      purple: "from-purple-500/20 to-purple-500/40",
      blue: "from-blue-500/20 to-blue-500/40",
      green: "from-green-500/20 to-green-500/40",
      amber: "from-amber-500/20 to-amber-500/40"
    }
    return colors[color as keyof typeof colors] || colors.purple
  }

  // Add animation variants
  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
  }

  return (
    <div className="relative py-16 md:py-32" id="services-section" onMouseMove={handleMouseMove}>
      {/* Cursor gradient light effect */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">Our Services</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Transforming your ideas into digital reality with our comprehensive range of services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Selection Panel */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 h-fit">
            <div className="space-y-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                    activeService === service.id 
                      ? "bg-white/10 border border-white/20"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${
                        activeService === service.id
                          ? service.color === "purple" ? "bg-purple-500/20" :
                            service.color === "blue" ? "bg-blue-500/20" :
                            service.color === "green" ? "bg-green-500/20" : "bg-amber-500/20"
                          : "bg-white/10"
                      }`}>
                        {service.icon}
                      </div>
                      <h3 className={`text-xl font-medium ${
                        activeService === service.id ? "text-white" : "text-white/70"
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    <svg 
                      className={`w-5 h-5 transform transition-all duration-300 ${
                        activeService === service.id ? "rotate-180 text-white" : "text-white/50 group-hover:translate-x-1"
                      }`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Details Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden h-full">
              <div className="relative p-8 md:p-10 min-h-[600px] flex flex-col">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClass(services[activeService].color)} opacity-30 transition-all duration-500`} />
                
                {/* Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={contentVariants}
                    className="relative z-10 h-full"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-8 h-full">
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                            {services[activeService].title}
                          </h2>
                          <p className="text-lg text-white/80 mb-8">
                            {services[activeService].description}
                          </p>
                          
                          <h4 className="text-xl font-medium text-white mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            {services[activeService].features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <svg className="h-6 w-6 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white/80">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <button className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors flex items-center gap-2 mt-8 w-fit">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                      </div>
                      
                      {/* Visual representation */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-full max-w-sm aspect-square rounded-3xl overflow-hidden relative border border-white/20">
                          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60" />
                          <Image
                            src={`/services/${activeService + 1}.jpg`}
                            alt={services[activeService].title}
                            fill
                            className="object-cover pt-11"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Technology stack */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Our Technology Stack</h3>
            <p className="text-white/70">We use cutting-edge technologies to build powerful solutions</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['React', 'Node.js', 'Flutter', 'Python', 'TensorFlow', 'AWS', 'Firebase', 'MongoDB'].map((tech, index) => (
              <div key={index} className="px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 text-white/80 hover:bg-white/10 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Ready to transform your idea into reality?</h3>
          <button className="px-8 py-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors flex items-center gap-2 mx-auto">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services